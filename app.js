/**
 * BULLMARKET - PLATAFORMA INTERACTIVA DE PEDIDOS & MENÚ
 * Catálogo completo, Carrito, Filtros por Categoría, Modal de Producto y Pedidos a WhatsApp
 */

document.addEventListener("DOMContentLoaded", () => {
  // Carga reactiva de datos: LocalStorage primero, luego fallback a data.js
  function getConfig() {
    try {
      const saved = localStorage.getItem("bullmarket_config");
      const cfg = saved ? JSON.parse(saved) : (typeof BULLMARKET_CONFIG !== "undefined" ? BULLMARKET_CONFIG : {});
      if (typeof BULLMARKET_CONFIG !== "undefined") {
        if (!cfg.tripAdvisorUrl) cfg.tripAdvisorUrl = BULLMARKET_CONFIG.tripAdvisorUrl;
        if (!cfg.googleBusinessUrl || cfg.googleBusinessUrl.includes("maps.google.com/?q=")) {
          cfg.googleBusinessUrl = BULLMARKET_CONFIG.googleBusinessUrl;
          cfg.googleReviewUrl = BULLMARKET_CONFIG.googleReviewUrl;
        }
        if (!cfg.instagramUser || cfg.instagramUser === "bullmarketbrunch") {
          cfg.instagramUser = BULLMARKET_CONFIG.instagramUser;
          cfg.instagramUrl = BULLMARKET_CONFIG.instagramUrl;
        }
      }
      return cfg;
    } catch (e) {
      return typeof BULLMARKET_CONFIG !== "undefined" ? BULLMARKET_CONFIG : {};
    }
  }

  function getCategories() {
    try {
      const saved = localStorage.getItem("bullmarket_categories");
      return saved ? JSON.parse(saved) : (typeof CATEGORIES !== "undefined" ? CATEGORIES : []);
    } catch (e) {
      return typeof CATEGORIES !== "undefined" ? CATEGORIES : [];
    }
  }

  function getProducts() {
    try {
      const saved = localStorage.getItem("bullmarket_products");
      return saved ? JSON.parse(saved) : (typeof PRODUCTS !== "undefined" ? PRODUCTS : []);
    } catch (e) {
      return typeof PRODUCTS !== "undefined" ? PRODUCTS : [];
    }
  }

  // Estado global de la aplicación
  let state = {
    activeCategory: "all",
    searchQuery: "",
    cart: loadCartFromStorage(),
    currentModalProduct: null,
    modalQuantity: 1,
    serviceType: "onsite", // "onsite" | "pickup" | "delivery"
    config: getConfig(),
    categories: getCategories(),
    products: getProducts()
  };

  // Referencias del DOM
  const brandNameEl = document.getElementById("brandName");
  const brandTaglineEl = document.getElementById("brandTagline");
  const brandAddressEl = document.getElementById("brandAddress");
  const brandAddressLinkEl = document.getElementById("brandAddressLink");
  const brandLogoEl = document.getElementById("brandLogo");
  const brandBannerEl = document.getElementById("brandBanner");
  const statusBadgeEl = document.getElementById("statusBadge");
  const instagramLinkEl = document.getElementById("instagramLink");
  const googleMapsLinkEl = document.getElementById("googleMapsLink");
  const tripAdvisorLinkEl = document.getElementById("tripAdvisorLink");
  const directWaLinkEl = document.getElementById("directWaLink");
  const footerInstagramLinkEl = document.getElementById("footerInstagramLink");
  const footerGoogleMapsLinkEl = document.getElementById("footerGoogleMapsLink");
  const footerTripAdvisorLinkEl = document.getElementById("footerTripAdvisorLink");
  const footerWhatsappLinkEl = document.getElementById("footerWhatsappLink");

  const productsContainer = document.getElementById("productsContainer");
  const categoriesContainer = document.getElementById("categoriesContainer");
  const productsCounterEl = document.getElementById("productsCounter");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  const floatingCartBtn = document.getElementById("floatingCartBtn");
  const cartBadge = document.getElementById("cartBadge");
  const cartBtnTotal = document.getElementById("cartBtnTotal");
  const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
  const closeCartDrawerBtn = document.getElementById("closeCartDrawer");
  const cartItemsList = document.getElementById("cartItemsList");
  const clearCartBtn = document.getElementById("clearCartBtn");

  const subtotalAmountEl = document.getElementById("subtotalAmount");
  const totalAmountEl = document.getElementById("totalAmount");
  const clientNameInput = document.getElementById("clientName");
  const clientPhoneInput = document.getElementById("clientPhone");
  const locationFieldGroup = document.getElementById("locationFieldGroup");
  const locationLabel = document.getElementById("locationLabel");
  const locationInput = document.getElementById("locationInput");
  const paymentMethodSelect = document.getElementById("paymentMethod");
  const orderNotesInput = document.getElementById("orderNotes");
  const btnSendWhatsapp = document.getElementById("btnSendWhatsapp");

  // Modal de Detalle
  const productModal = document.getElementById("productModal");
  const closeProductModalBtn = document.getElementById("closeProductModal");
  const modalProductImg = document.getElementById("modalProductImg");
  const btnPrevProductImg = document.getElementById("btnPrevProductImg");
  const btnNextProductImg = document.getElementById("btnNextProductImg");
  const modalGalleryDots = document.getElementById("modalGalleryDots");
  const modalGalleryThumbsClient = document.getElementById("modalGalleryThumbsClient");
  const modalProductBadge = document.getElementById("modalProductBadge");
  const modalProductCategory = document.getElementById("modalProductCategory");
  const modalProductTitle = document.getElementById("modalProductTitle");
  const modalProductPrice = document.getElementById("modalProductPrice");
  const modalProductDesc = document.getElementById("modalProductDesc");
  const modalSpecialNotes = document.getElementById("modalSpecialNotes");
  const modalQuantityDisplay = document.getElementById("modalQuantityDisplay");
  const modalAddPrice = document.getElementById("modalAddPrice");
  const btnDecreaseQty = document.getElementById("btnDecreaseQty");
  const btnIncreaseQty = document.getElementById("btnIncreaseQty");
  const btnAddToCartModal = document.getElementById("btnAddToCartModal");
  const btnZoomModalImg = document.getElementById("btnZoomModalImg");

  // Lightbox
  const imageLightboxModal = document.getElementById("imageLightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const closeLightboxBtn = document.getElementById("closeLightboxBtn");

  const toastContainer = document.getElementById("toastContainer");

  // Inicialización de la aplicación
  initApp();

  function initApp() {
    renderBrandHeader();
    renderCategories();
    renderProducts();
    updateCartUI();
    setupEventListeners();
  }

  // --- RENDERIZADO DE CABECERA Y NEGOCIO ---
  function renderBrandHeader() {
    const cfg = state.config;
    if (brandNameEl) brandNameEl.textContent = cfg.name || "BULLMARKET";
    if (brandTaglineEl) brandTaglineEl.textContent = cfg.tagline || "Brunch, Bistro & Gourmet Burgers";
    if (brandAddressEl) brandAddressEl.textContent = cfg.address || "Barquisimeto, Lara";
    if (brandAddressLinkEl && cfg.googleBusinessUrl) brandAddressLinkEl.href = cfg.googleBusinessUrl;
    if (brandBannerEl && cfg.bannerImage) brandBannerEl.src = cfg.bannerImage;
    if (brandLogoEl && cfg.logoImage) {
      brandLogoEl.src = cfg.logoImage;
      brandLogoEl.onerror = () => {
        brandLogoEl.src = cfg.logoImageFallback || "https://assets.olaclick.app/companies/logos/be35feb9-65e1-4d35-aff6-f2b8a2fa7fd2.png";
      };
    }
    if (instagramLinkEl && cfg.instagramUrl) instagramLinkEl.href = cfg.instagramUrl;
    if (googleMapsLinkEl && cfg.googleBusinessUrl) googleMapsLinkEl.href = cfg.googleBusinessUrl;
    if (tripAdvisorLinkEl && cfg.tripAdvisorUrl) tripAdvisorLinkEl.href = cfg.tripAdvisorUrl;
    if (directWaLinkEl && cfg.whatsappNumber) directWaLinkEl.href = `https://wa.me/${cfg.whatsappNumber}`;

    if (footerInstagramLinkEl) {
      footerInstagramLinkEl.href = cfg.instagramUrl || "https://www.instagram.com/bullmarket_bqto/";
      footerInstagramLinkEl.textContent = "@" + (cfg.instagramUser || "bullmarket_bqto");
    }
    if (footerGoogleMapsLinkEl && cfg.googleBusinessUrl) footerGoogleMapsLinkEl.href = cfg.googleBusinessUrl;
    if (footerTripAdvisorLinkEl && cfg.tripAdvisorUrl) footerTripAdvisorLinkEl.href = cfg.tripAdvisorUrl;
    if (footerWhatsappLinkEl && cfg.whatsappNumber) {
      footerWhatsappLinkEl.href = `https://wa.me/${cfg.whatsappNumber}`;
      footerWhatsappLinkEl.textContent = `+${cfg.whatsappNumber.slice(0, 2)} ${cfg.whatsappNumber.slice(2, 5)} ${cfg.whatsappNumber.slice(5, 8)} ${cfg.whatsappNumber.slice(8)}`;
    }

    // Estado Abierto / Cerrado
    if (statusBadgeEl) {
      const isClosed = cfg.forceStatus === "closed";
      statusBadgeEl.textContent = isClosed ? "Cerrado" : "Abierto";
      statusBadgeEl.className = `badge-status ${isClosed ? 'closed' : 'open'}`;
    }
  }

  // --- RENDERIZADO DE CATEGORÍAS ---
  function renderCategories() {
    if (!categoriesContainer) return;
    categoriesContainer.innerHTML = "";

    const availableProducts = state.products.filter(p => p.available !== false);

    state.categories.forEach(cat => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `category-pill ${state.activeCategory === cat.id ? "active" : ""}`;
      pill.dataset.category = cat.id;

      // Calcular conteo
      let count = 0;
      if (cat.id === "all") {
        count = availableProducts.length;
      } else {
        count = availableProducts.filter(p => p.categoryId === cat.id).length;
      }

      pill.innerHTML = `
        <span>${cat.name}</span>
        <span class="pill-badge">${count}</span>
      `;

      pill.addEventListener("click", () => {
        state.activeCategory = cat.id;
        document.querySelectorAll(".category-pill").forEach(el => el.classList.remove("active"));
        pill.classList.add("active");
        renderProducts();
        
        // Centrar botón activo en el scroll horizontal
        pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });

      categoriesContainer.appendChild(pill);
    });
  }

  // --- RENDERIZADO DEL CATÁLOGO DE PRODUCTOS ---
  function renderProducts() {
    if (!productsContainer) return;
    productsContainer.innerHTML = "";

    const query = state.searchQuery.toLowerCase().trim();
    let filtered = state.products.filter(p => p.available !== false);

    // Filtro por búsqueda
    if (query) {
      filtered = filtered.filter(p => {
        const nameMatch = p.name && p.name.toLowerCase().includes(query);
        const descMatch = p.description && p.description.toLowerCase().includes(query);
        const catMatch = p.categoryName && p.categoryName.toLowerCase().includes(query);
        return nameMatch || descMatch || catMatch;
      });
    } else if (state.activeCategory !== "all") {
      filtered = filtered.filter(p => p.categoryId === state.activeCategory);
    }

    // Actualizar contador
    if (productsCounterEl) {
      if (query) {
        productsCounterEl.textContent = `Resultados para "${state.searchQuery}": ${filtered.length} plato(s)`;
      } else if (state.activeCategory !== "all") {
        const currentCat = state.categories.find(c => c.id === state.activeCategory);
        productsCounterEl.textContent = `${currentCat ? currentCat.name : 'Categoría'}: ${filtered.length} opciones`;
      } else {
        productsCounterEl.textContent = `Menú Completo: ${filtered.length} delicias disponibles`;
      }
    }

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
          <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom: 12px; opacity: 0.6;">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <h3 style="color: #fff; font-size: 1.2rem; margin-bottom: 6px;">No se encontraron productos</h3>
          <p>Prueba buscando con otra palabra o selecciona otra categoría.</p>
        </div>
      `;
      return;
    }

    // Renderizar tarjetas
    filtered.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.dataset.id = product.id;

      const cartItem = state.cart.find(item => item.id === product.id);
      const inCartQty = cartItem ? cartItem.quantity : 0;

      card.innerHTML = `
        <div class="card-img-wrap" data-action="detail">
          <img src="${product.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'">
          ${product.badge ? `<span class="card-badge">${escapeHtml(product.badge)}</span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-category">${escapeHtml(product.categoryName || "")}</span>
          <h3 class="card-title" data-action="detail">${escapeHtml(product.name)}</h3>
          <p class="card-desc">${escapeHtml(product.description || "Deliciosa especialidad de BULLMARKET preparada con ingredientes frescos.")}</p>
          <div class="card-footer">
            <div class="card-price">
              <span class="currency">$</span>${product.price.toFixed(2)}
            </div>
            <div class="card-action-slot">
              ${inCartQty > 0 ? `
                <div class="card-qty-control">
                  <button type="button" class="btn-card-qty" data-action="card-decrease" data-id="${product.id}">-</button>
                  <span class="card-qty-num">${inCartQty}</span>
                  <button type="button" class="btn-card-qty" data-action="card-increase" data-id="${product.id}">+</button>
                </div>
              ` : `
                <button type="button" class="btn-add-card" data-action="card-add" data-id="${product.id}">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>Pedir</span>
                </button>
              `}
            </div>
          </div>
        </div>
      `;

      // Eventos de la tarjeta
      card.addEventListener("click", (e) => {
        const target = e.target.closest("[data-action]");
        if (!target) return;
        const action = target.dataset.action;

        if (action === "detail") {
          openProductModal(product);
        } else if (action === "card-add") {
          addToCart(product, 1);
        } else if (action === "card-increase") {
          updateCartItemQuantity(product.id, inCartQty + 1);
        } else if (action === "card-decrease") {
          updateCartItemQuantity(product.id, inCartQty - 1);
        }
      });

      productsContainer.appendChild(card);
    });
  }

  // --- MODAL DETALLE DE PRODUCTO ---
  let clientModalImages = [];
  let clientActiveImageIndex = 0;

  function openProductModal(product) {
    state.currentModalProduct = product;
    state.modalQuantity = 1;

    // Cargar fotos del plato (múltiples o individual)
    if (Array.isArray(product.images) && product.images.length > 0) {
      clientModalImages = [...product.images];
    } else if (product.image) {
      clientModalImages = [product.image];
    } else {
      clientModalImages = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"];
    }
    clientActiveImageIndex = 0;
    renderClientModalGallery();

    modalProductCategory.textContent = product.categoryName || "";
    modalProductTitle.textContent = product.name;
    modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
    modalProductDesc.textContent = product.description || "Preparación fresca y artesanal bajo los más altos estándares gastronómicos de BULLMARKET.";
    modalSpecialNotes.value = "";

    if (product.badge) {
      modalProductBadge.textContent = product.badge;
      modalProductBadge.classList.add("active");
    } else {
      modalProductBadge.classList.remove("active");
    }

    updateModalTotal();
    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function renderClientModalGallery() {
    if (!clientModalImages || clientModalImages.length === 0) return;
    if (clientActiveImageIndex >= clientModalImages.length) {
      clientActiveImageIndex = 0;
    }

    modalProductImg.src = clientModalImages[clientActiveImageIndex];

    const hasMultiple = clientModalImages.length > 1;

    if (btnPrevProductImg) btnPrevProductImg.style.display = hasMultiple ? "flex" : "none";
    if (btnNextProductImg) btnNextProductImg.style.display = hasMultiple ? "flex" : "none";

    if (modalGalleryDots) {
      modalGalleryDots.style.display = hasMultiple ? "flex" : "none";
      modalGalleryDots.innerHTML = clientModalImages.map((_, i) =>
        `<span class="gallery-dot ${i === clientActiveImageIndex ? 'active' : ''}" data-idx="${i}"></span>`
      ).join("");
    }

    if (modalGalleryThumbsClient) {
      modalGalleryThumbsClient.style.display = hasMultiple ? "flex" : "none";
      modalGalleryThumbsClient.innerHTML = "";
      if (hasMultiple) {
        clientModalImages.forEach((url, i) => {
          const thumb = document.createElement("div");
          thumb.className = `client-thumb-item ${i === clientActiveImageIndex ? 'active' : ''}`;
          thumb.innerHTML = `<img src="${escapeHtml(url)}" alt="Foto ${i+1}">`;
          thumb.addEventListener("click", () => {
            clientActiveImageIndex = i;
            renderClientModalGallery();
          });
          modalGalleryThumbsClient.appendChild(thumb);
        });
      }
    }
  }

  function closeProductModal() {
    productModal.classList.remove("active");
    state.currentModalProduct = null;
    document.body.style.overflow = "";
  }

  function updateModalTotal() {
    if (!state.currentModalProduct) return;
    modalQuantityDisplay.textContent = state.modalQuantity;
    const total = state.currentModalProduct.price * state.modalQuantity;
    modalAddPrice.textContent = `$${total.toFixed(2)}`;
  }

  // --- LIGHTBOX DE IMAGEN ---
  function openLightbox(imgSrc, title) {
    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = title;
    imageLightboxModal.classList.add("active");
  }

  function closeLightbox() {
    imageLightboxModal.classList.remove("active");
  }

  // --- CARRITO DE COMPRAS & STORAGE ---
  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem("bullmarket_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem("bullmarket_cart", JSON.stringify(state.cart));
    } catch (e) {
      console.warn("Error guardando carrito", e);
    }
  }

  function addToCart(product, quantity = 1, notes = "") {
    const existingIndex = state.cart.findIndex(i => i.id === product.id && i.notes === notes);
    if (existingIndex >= 0) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        categoryName: product.categoryName,
        quantity: quantity,
        notes: notes
      });
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts();
    showToast(`"${product.name}" agregado a tu orden`);
  }

  function updateCartItemQuantity(productId, newQty, notes = null) {
    const itemIndex = state.cart.findIndex(i => i.id === productId && (notes === null || i.notes === notes));
    if (itemIndex >= 0) {
      if (newQty <= 0) {
        state.cart.splice(itemIndex, 1);
      } else {
        state.cart[itemIndex].quantity = newQty;
      }
    }
    saveCartToStorage();
    updateCartUI();
    renderProducts();
  }

  function removeCartItem(index) {
    if (state.cart[index]) {
      const removed = state.cart.splice(index, 1);
      saveCartToStorage();
      updateCartUI();
      renderProducts();
      showToast(`Eliminado de la orden`);
    }
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    if (confirm("¿Deseas vaciar todos los productos del carrito?")) {
      state.cart = [];
      saveCartToStorage();
      updateCartUI();
      renderProducts();
      showToast("Carrito vaciado");
    }
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Botón flotante
    if (floatingCartBtn) {
      if (totalItems > 0) {
        floatingCartBtn.style.display = "flex";
        cartBadge.textContent = totalItems;
        cartBtnTotal.textContent = `$${totalPrice.toFixed(2)}`;
      } else {
        floatingCartBtn.style.display = "none";
      }
    }

    // Totales en el Drawer
    if (subtotalAmountEl) subtotalAmountEl.textContent = `$${totalPrice.toFixed(2)}`;
    if (totalAmountEl) totalAmountEl.textContent = `$${totalPrice.toFixed(2)}`;

    // Lista del Drawer
    renderCartDrawerList();
  }

  function renderCartDrawerList() {
    if (!cartItemsList) return;
    cartItemsList.innerHTML = "";

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>Tu orden está vacía.<br>Agrega hamburguesas, brunch o postres para comenzar.</p>
        </div>
      `;
      return;
    }

    state.cart.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "cart-item";
      itemEl.innerHTML = `
        <div class="cart-item-img">
          <img src="${item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}" alt="${escapeHtml(item.name)}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${escapeHtml(item.name)}</div>
          ${item.notes ? `<div class="cart-item-notes">Nota: ${escapeHtml(item.notes)}</div>` : ""}
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} ($${item.price.toFixed(2)} c/u)</div>
        </div>
        <div class="cart-item-actions">
          <div class="card-qty-control" style="padding: 2px 4px;">
            <button type="button" class="btn-card-qty" data-cart-dec="${index}" style="width: 22px; height: 22px; font-size: 0.8rem;">-</button>
            <span class="card-qty-num" style="font-size: 0.82rem; min-width: 16px;">${item.quantity}</span>
            <button type="button" class="btn-card-qty" data-cart-inc="${index}" style="width: 22px; height: 22px; font-size: 0.8rem;">+</button>
          </div>
          <button type="button" class="btn-cart-remove" data-cart-del="${index}" title="Eliminar">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;

      itemEl.querySelector("[data-cart-dec]").addEventListener("click", () => {
        updateCartItemQuantity(item.id, item.quantity - 1, item.notes);
      });
      itemEl.querySelector("[data-cart-inc]").addEventListener("click", () => {
        updateCartItemQuantity(item.id, item.quantity + 1, item.notes);
      });
      itemEl.querySelector("[data-cart-del]").addEventListener("click", () => {
        removeCartItem(index);
      });

      cartItemsList.appendChild(itemEl);
    });
  }

  // --- ENRUTAMIENTO DE PEDIDOS A WHATSAPP ---
  function sendOrderToWhatsApp() {
    if (state.cart.length === 0) {
      alert("Por favor agrega productos a la orden antes de continuar.");
      return;
    }

    const clientName = clientNameInput.value.trim();
    if (!clientName) {
      alert("Por favor ingresa tu nombre y apellido para identificar el pedido.");
      clientNameInput.focus();
      return;
    }

    const locationVal = locationInput.value.trim();
    if (!locationVal) {
      const msg = state.serviceType === "onsite" ? "Por favor indica tu número de mesa o ubicación." :
                  state.serviceType === "delivery" ? "Por favor escribe tu dirección exacta de entrega." :
                  "Por favor indica tu nombre o detalle de retiro.";
      alert(msg);
      locationInput.focus();
      return;
    }

    const phoneVal = clientPhoneInput.value.trim();
    const notesVal = orderNotesInput.value.trim();
    const paymentVal = paymentMethodSelect.options[paymentMethodSelect.selectedIndex].text;
    const targetWaNumber = state.config.whatsappNumber || "584128642855";

    // Formatear Mensaje Profesional para WhatsApp
    let serviceLabel = "En Mesa / Salón";
    let locationTitle = "Mesa / Ubicación:";
    if (state.serviceType === "pickup") {
      serviceLabel = "Para Retirar (Pick Up)";
      locationTitle = "Retira:";
    } else if (state.serviceType === "delivery") {
      serviceLabel = "Delivery a Domicilio";
      locationTitle = "Dirección de Entrega:";
    }

    const orderId = "BM-" + Math.floor(100000 + Math.random() * 900000);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let text = `👋 *¡Hola BULLMARKET! Deseo realizar el siguiente pedido:*\n\n`;
    text += `📋 *ORDEN:* #${orderId}\n`;
    text += `👤 *Cliente:* ${clientName}\n`;
    if (phoneVal) text += `📱 *Teléfono:* ${phoneVal}\n`;
    text += `🍽️ *Modalidad:* ${serviceLabel}\n`;
    text += `📍 *${locationTitle}* ${locationVal}\n`;
    text += `💳 *Método de Pago:* ${paymentVal}\n\n`;

    text += `🛒 *DETALLE DEL PEDIDO:*\n`;
    text += `--------------------------------\n`;

    state.cart.forEach((item, i) => {
      text += `*${item.quantity}x* ${item.name} — $${(item.price * item.quantity).toFixed(2)}\n`;
      if (item.notes) {
        text += `   📝 _Nota: ${item.notes}_\n`;
      }
    });

    text += `--------------------------------\n`;
    text += `💰 *TOTAL A PAGAR: $${totalPrice.toFixed(2)} USD*\n\n`;

    if (notesVal) {
      text += `👨‍🍳 *Observaciones Cocina:* ${notesVal}\n\n`;
    }

    text += `_Pedido generado desde el Menú Digital Oficial BULLMARKET_ 🌟`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${targetWaNumber}?text=${encoded}`;

    // Abrir WhatsApp
    window.open(waUrl, "_blank");

    // Limpiar carrito o guardar confirmación
    showToast("¡Redirigiendo a WhatsApp de Bullmarket!");
  }

  // --- NOTIFICACIONES TOAST ---
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Buscador
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (searchClear) searchClear.style.display = state.searchQuery ? "flex" : "none";
        renderProducts();
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        searchClear.style.display = "none";
        renderProducts();
        searchInput.focus();
      });
    }

    // Modal Producto
    if (closeProductModalBtn) {
      closeProductModalBtn.addEventListener("click", closeProductModal);
    }
    if (productModal) {
      productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeProductModal();
      });
    }

    if (btnDecreaseQty) {
      btnDecreaseQty.addEventListener("click", () => {
        if (state.modalQuantity > 1) {
          state.modalQuantity--;
          updateModalTotal();
        }
      });
    }

    if (btnIncreaseQty) {
      btnIncreaseQty.addEventListener("click", () => {
        state.modalQuantity++;
        updateModalTotal();
      });
    }

    if (btnAddToCartModal) {
      btnAddToCartModal.addEventListener("click", () => {
        if (state.currentModalProduct) {
          const notes = modalSpecialNotes.value.trim();
          addToCart(state.currentModalProduct, state.modalQuantity, notes);
          closeProductModal();
        }
      });
    }

    if (btnPrevProductImg) {
      btnPrevProductImg.addEventListener("click", (e) => {
        e.stopPropagation();
        if (clientModalImages.length > 1) {
          clientActiveImageIndex = (clientActiveImageIndex - 1 + clientModalImages.length) % clientModalImages.length;
          renderClientModalGallery();
        }
      });
    }

    if (btnNextProductImg) {
      btnNextProductImg.addEventListener("click", (e) => {
        e.stopPropagation();
        if (clientModalImages.length > 1) {
          clientActiveImageIndex = (clientActiveImageIndex + 1) % clientModalImages.length;
          renderClientModalGallery();
        }
      });
    }

    if (modalGalleryDots) {
      modalGalleryDots.addEventListener("click", (e) => {
        const dot = e.target.closest(".gallery-dot");
        if (dot && dot.dataset.idx !== undefined) {
          clientActiveImageIndex = parseInt(dot.dataset.idx, 10);
          renderClientModalGallery();
        }
      });
    }

    if (btnZoomModalImg) {
      btnZoomModalImg.addEventListener("click", () => {
        if (clientModalImages && clientModalImages[clientActiveImageIndex]) {
          openLightbox(clientModalImages[clientActiveImageIndex], modalProductTitle.textContent);
        } else if (state.currentModalProduct) {
          openLightbox(state.currentModalProduct.image, state.currentModalProduct.name);
        }
      });
    }

    // Lightbox
    if (closeLightboxBtn) {
      closeLightboxBtn.addEventListener("click", closeLightbox);
    }
    if (imageLightboxModal) {
      imageLightboxModal.addEventListener("click", (e) => {
        if (e.target === imageLightboxModal) closeLightbox();
      });
    }

    // Carrito Drawer
    if (floatingCartBtn) {
      floatingCartBtn.addEventListener("click", () => {
        cartDrawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    }

    if (closeCartDrawerBtn) {
      closeCartDrawerBtn.addEventListener("click", () => {
        cartDrawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    }

    if (cartDrawerOverlay) {
      cartDrawerOverlay.addEventListener("click", (e) => {
        if (e.target === cartDrawerOverlay) {
          cartDrawerOverlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }

    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", clearCart);
    }

    if (btnSendWhatsapp) {
      btnSendWhatsapp.addEventListener("click", sendOrderToWhatsApp);
    }

    // Selector de Servicios
    document.querySelectorAll(".btn-service").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".btn-service").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.serviceType = btn.dataset.service;

        // Actualizar etiqueta del campo
        if (locationLabel && locationInput) {
          if (state.serviceType === "onsite") {
            locationLabel.textContent = "Número de Mesa o Ubicación *";
            locationInput.placeholder = "Ej: Mesa 4, Terraza, Galería...";
          } else if (state.serviceType === "pickup") {
            locationLabel.textContent = "Detalle para Retirar *";
            locationInput.placeholder = "Ej: Retiro en barra a las 2:30 PM";
          } else if (state.serviceType === "delivery") {
            locationLabel.textContent = "Dirección Exacta y Punto de Referencia *";
            locationInput.placeholder = "Ej: Urb. El Parral, Edif. A, Apto 4B. Ref: frente a la plaza";
          }
        }
      });
    });

    // Modal de Login / Acceso Administrativo
    const btnOpenLoginModal = document.getElementById("btnOpenLoginModal");
    const footerAdminLink = document.getElementById("footerAdminLink");
    const loginModal = document.getElementById("loginModal");
    const closeLoginModal = document.getElementById("closeLoginModal");
    const loginForm = document.getElementById("loginForm");
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    const btnTogglePassword = document.getElementById("btnTogglePassword");
    const eyeOpenIcon = document.getElementById("eyeOpenIcon");
    const eyeClosedIcon = document.getElementById("eyeClosedIcon");
    const loginErrorMsg = document.getElementById("loginErrorMsg");
    const loginErrorText = document.getElementById("loginErrorText");

    function openLogin() {
      // Si ya está autenticado en esta sesión de navegador, entrar directo
      if (sessionStorage.getItem("bullmarket_admin_logged") === "true") {
        window.location.href = "admin.html";
        return;
      }
      if (loginModal) {
        loginModal.classList.add("active");
        if (loginErrorMsg) loginErrorMsg.style.display = "none";
        if (loginUsername) {
          loginUsername.value = "";
          setTimeout(() => loginUsername.focus(), 100);
        }
        if (loginPassword) loginPassword.value = "";
      }
    }

    function closeLogin() {
      if (loginModal) loginModal.classList.remove("active");
    }

    if (btnOpenLoginModal) {
      btnOpenLoginModal.addEventListener("click", (e) => {
        e.preventDefault();
        openLogin();
      });
    }

    if (footerAdminLink) {
      footerAdminLink.addEventListener("click", (e) => {
        e.preventDefault();
        openLogin();
      });
    }

    if (closeLoginModal) {
      closeLoginModal.addEventListener("click", closeLogin);
    }

    if (loginModal) {
      loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) closeLogin();
      });
    }

    // Toggle ver contraseña
    if (btnTogglePassword && loginPassword) {
      btnTogglePassword.addEventListener("click", () => {
        const isPassword = loginPassword.type === "password";
        loginPassword.type = isPassword ? "text" : "password";
        if (eyeOpenIcon) eyeOpenIcon.style.display = isPassword ? "none" : "block";
        if (eyeClosedIcon) eyeClosedIcon.style.display = isPassword ? "block" : "none";
      });
    }

    // Procesar autenticación
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = loginUsername.value.trim().toLowerCase();
        const pass = loginPassword.value.trim();

        // Obtener credenciales válidas
        const auth = (state.config && state.config.adminAuth) ? state.config.adminAuth : { username: "admin", password: "bullmarket2026" };
        const validUser1 = (auth.username || "admin").toLowerCase();
        const validUser2 = "bullmarket"; // alias de conveniencia
        const validPass = auth.password || "bullmarket2026";

        if ((user === validUser1 || user === validUser2) && pass === validPass) {
          // Autenticado con éxito
          sessionStorage.setItem("bullmarket_admin_logged", "true");
          sessionStorage.setItem("bullmarket_admin_user", user);
          showToast("¡Acceso autorizado! Redirigiendo al panel...");
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 400);
        } else {
          // Error de credenciales
          if (loginErrorMsg) {
            loginErrorMsg.style.display = "flex";
            if (loginErrorText) loginErrorText.textContent = "Usuario o contraseña incorrectos. Verifica e intenta de nuevo.";
          }
          if (loginPassword) {
            loginPassword.value = "";
            loginPassword.focus();
          }
        }
      });
    }

    // Tecla Escape para modales
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (loginModal && loginModal.classList.contains("active")) {
          closeLogin();
        } else if (imageLightboxModal && imageLightboxModal.classList.contains("active")) {
          closeLightbox();
        } else if (productModal && productModal.classList.contains("active")) {
          closeProductModal();
        } else if (cartDrawerOverlay && cartDrawerOverlay.classList.contains("active")) {
          cartDrawerOverlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      }
    });
  }

  // Utilidad de escape HTML
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
