/**
 * BULLMARKET - PANEL ADMINISTRATIVO (CMS)
 * Lógica de Edición del Menú, Productos, Precios, Fotos, Horarios y Categorías
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Estado con LocalStorage o defaults de data.js
  let state = {
    products: loadProducts(),
    categories: loadCategories(),
    config: loadConfig(),
    currentEditingProduct: null,
    currentEditingCategory: null,
    searchQuery: "",
    filterCategory: "all",
    filterStatus: "all"
  };

  // Referencias del DOM
  const tableProductsBody = document.getElementById("tableProductsBody");
  const categoriesListBody = document.getElementById("categoriesListBody");
  const searchProductInput = document.getElementById("searchProductInput");
  const filterCategorySelect = document.getElementById("filterCategorySelect");
  const filterStatusSelect = document.getElementById("filterStatusSelect");
  const btnNewProduct = document.getElementById("btnNewProduct");
  const btnNewCategory = document.getElementById("btnNewCategory");
  const barStatusToggle = document.getElementById("barStatusToggle");
  const barStatusText = document.getElementById("barStatusText");
  const toastContainer = document.getElementById("adminToastContainer");

  // Métricas
  const metricTotalProducts = document.getElementById("metricTotalProducts");
  const metricAvailableProducts = document.getElementById("metricAvailableProducts");
  const metricPausedProducts = document.getElementById("metricPausedProducts");
  const metricTotalCategories = document.getElementById("metricTotalCategories");

  // Modales
  const productModal = document.getElementById("productModal");
  const productModalTitle = document.getElementById("productModalTitle");
  const closeProductModalBtn = document.getElementById("closeProductModalBtn");
  const btnCancelProduct = document.getElementById("btnCancelProduct");
  const productForm = document.getElementById("productForm");

  // Campos de Formulario de Producto
  const prodNameInput = document.getElementById("prodName");
  const prodCategorySelect = document.getElementById("prodCategory");
  const prodPriceInput = document.getElementById("prodPrice");
  const prodBadgeInput = document.getElementById("prodBadge");
  const prodDescInput = document.getElementById("prodDesc");
  const prodImageUrlInput = document.getElementById("prodImageUrl");
  const prodFileInput = document.getElementById("prodFileInput");
  const prodPreviewImg = document.getElementById("prodPreviewImg");
  const prodAvailableSwitch = document.getElementById("prodAvailable");
  const prodAvailableLabel = document.getElementById("prodAvailableLabel");

  // Elementos de la Galería y Modificación de Fotos
  const prodAddAnotherFileInput = document.getElementById("prodAddAnotherFileInput");
  const btnToggleUrlInput = document.getElementById("btnToggleUrlInput");
  const urlInputContainer = document.getElementById("urlInputContainer");
  const btnApplyUrlReplace = document.getElementById("btnApplyUrlReplace");
  const btnApplyUrlAdd = document.getElementById("btnApplyUrlAdd");
  const photosCountBadge = document.getElementById("photosCountBadge");
  const previewRoleBadge = document.getElementById("previewRoleBadge");
  const btnDeleteActivePhoto = document.getElementById("btnDeleteActivePhoto");
  const productGalleryThumbnails = document.getElementById("productGalleryThumbnails");

  let modalImages = [];
  let activeImageIndex = 0;

  // Modal de Categoría
  const categoryModal = document.getElementById("categoryModal");
  const categoryModalTitle = document.getElementById("categoryModalTitle");
  const closeCategoryModalBtn = document.getElementById("closeCategoryModalBtn");
  const btnCancelCategory = document.getElementById("btnCancelCategory");
  const categoryForm = document.getElementById("categoryForm");
  const catNameInput = document.getElementById("catName");
  const catBadgeInput = document.getElementById("catBadge");

  // Ajustes y Horarios
  const formSettings = document.getElementById("formSettings");
  const cfgNameInput = document.getElementById("cfgName");
  const cfgTaglineInput = document.getElementById("cfgTagline");
  const cfgAddressInput = document.getElementById("cfgAddress");
  const cfgWhatsappInput = document.getElementById("cfgWhatsapp");
  const cfgInstagramInput = document.getElementById("cfgInstagram");
  const cfgGoogleMapsInput = document.getElementById("cfgGoogleMaps");
  const cfgTripAdvisorInput = document.getElementById("cfgTripAdvisor");
  const cfgScheduleWeekdaysInput = document.getElementById("cfgScheduleWeekdays");
  const cfgScheduleWeekendInput = document.getElementById("cfgScheduleWeekend");
  const cfgDeliveryTimeInput = document.getElementById("cfgDeliveryTime");
  const cfgForceStatusSelect = document.getElementById("cfgForceStatus");

  // Seguridad y Credenciales Admin
  const cfgAdminUsername = document.getElementById("cfgAdminUsername");
  const cfgAdminPassword = document.getElementById("cfgAdminPassword");
  const btnToggleCfgPassword = document.getElementById("btnToggleCfgPassword");
  const btnSaveAdminPassword = document.getElementById("btnSaveAdminPassword");
  const currentAdminName = document.getElementById("currentAdminName");
  const btnLogoutAdmin = document.getElementById("btnLogoutAdmin");

  // Telón Auth Gate
  const adminAuthGate = document.getElementById("adminAuthGate");
  const authGateForm = document.getElementById("authGateForm");
  const gateUsername = document.getElementById("gateUsername");
  const gatePassword = document.getElementById("gatePassword");
  const gateErrorAlert = document.getElementById("gateErrorAlert");
  const gateErrorText = document.getElementById("gateErrorText");
  const btnToggleGatePassword = document.getElementById("btnToggleGatePassword");

  // Respaldo y Exportación
  const btnExportDataJs = document.getElementById("btnExportDataJs");
  const btnExportJson = document.getElementById("btnExportJson");
  const inputImportJson = document.getElementById("inputImportJson");
  const btnResetDefaults = document.getElementById("btnResetDefaults");
  const btnMobileSidebar = document.getElementById("btnMobileSidebar");
  const adminSidebar = document.getElementById("adminSidebar");

  // Inicializar
  initAdmin();

  function initAdmin() {
    checkAdminAuth();
    setupNavigation();
    populateCategoryDropdowns();
    renderMetrics();
    renderProductsTable();
    renderCategoriesTable();
    loadSettingsIntoForm();
    setupEventListeners();
  }

  // --- VERIFICACIÓN DE AUTENTICACIÓN ADMIN ---
  function checkAdminAuth() {
    const isLogged = sessionStorage.getItem("bullmarket_admin_logged") === "true";
    if (isLogged) {
      if (adminAuthGate) adminAuthGate.classList.add("hidden");
      const loggedUser = sessionStorage.getItem("bullmarket_admin_user") || (state.config.adminAuth ? state.config.adminAuth.username : "admin");
      if (currentAdminName) currentAdminName.textContent = loggedUser;
    } else {
      if (adminAuthGate) {
        adminAuthGate.classList.remove("hidden");
        setTimeout(() => {
          if (gateUsername) gateUsername.focus();
        }, 100);
      }
    }
  }

  // --- CARGA Y PERSISTENCIA DE DATOS ---
  function loadProducts() {
    try {
      const saved = localStorage.getItem("bullmarket_products");
      return saved ? JSON.parse(saved) : (typeof PRODUCTS !== "undefined" ? PRODUCTS : []);
    } catch (e) {
      return typeof PRODUCTS !== "undefined" ? PRODUCTS : [];
    }
  }

  function saveProducts() {
    try {
      localStorage.setItem("bullmarket_products", JSON.stringify(state.products));
      renderMetrics();
    } catch (e) {
      console.error("Error guardando productos", e);
    }
  }

  function loadCategories() {
    try {
      const saved = localStorage.getItem("bullmarket_categories");
      return saved ? JSON.parse(saved) : (typeof CATEGORIES !== "undefined" ? CATEGORIES : []);
    } catch (e) {
      return typeof CATEGORIES !== "undefined" ? CATEGORIES : [];
    }
  }

  function saveCategories() {
    try {
      localStorage.setItem("bullmarket_categories", JSON.stringify(state.categories));
      populateCategoryDropdowns();
      renderMetrics();
    } catch (e) {
      console.error("Error guardando categorías", e);
    }
  }

  function loadConfig() {
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
      if (!cfg.adminAuth && typeof BULLMARKET_CONFIG !== "undefined" && BULLMARKET_CONFIG.adminAuth) {
        cfg.adminAuth = BULLMARKET_CONFIG.adminAuth;
      }
      if (!cfg.adminAuth) {
        cfg.adminAuth = { username: "admin", password: "bullmarket2026" };
      }
      return cfg;
    } catch (e) {
      return (typeof BULLMARKET_CONFIG !== "undefined" ? BULLMARKET_CONFIG : { adminAuth: { username: "admin", password: "bullmarket2026" } });
    }
  }

  function saveConfig() {
    try {
      localStorage.setItem("bullmarket_config", JSON.stringify(state.config));
    } catch (e) {
      console.error("Error guardando config", e);
    }
  }

  // --- NAVEGACIÓN ENTRE SECCIONES ---
  function setupNavigation() {
    const navItems = document.querySelectorAll(".admin-sidebar .nav-item");
    const sections = document.querySelectorAll(".admin-section");
    const topbarPageTitle = document.getElementById("topbarPageTitle");

    const titles = {
      products: "Productos del Menú",
      categories: "Categorías del Menú",
      settings: "Horarios y Configuración del Negocio",
      backup: "Respaldar y Exportar Menú"
    };

    navItems.forEach(item => {
      item.addEventListener("click", () => {
        const sectionId = item.dataset.section;
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        sections.forEach(s => {
          s.classList.remove("active");
          if (s.id === `section-${sectionId}`) {
            s.classList.add("active");
          }
        });

        if (topbarPageTitle && titles[sectionId]) {
          topbarPageTitle.textContent = titles[sectionId];
        }

        // Cerrar sidebar móvil si está abierto
        if (adminSidebar && adminSidebar.classList.contains("mobile-open")) {
          adminSidebar.classList.remove("mobile-open");
        }
      });
    });

    if (btnMobileSidebar && adminSidebar) {
      btnMobileSidebar.addEventListener("click", () => {
        adminSidebar.classList.toggle("mobile-open");
      });
    }
  }

  // --- MÉTRICAS ---
  function renderMetrics() {
    const total = state.products.length;
    const available = state.products.filter(p => p.available !== false).length;
    const paused = total - available;
    const catsCount = state.categories.filter(c => c.id !== "all").length;

    if (metricTotalProducts) metricTotalProducts.textContent = total;
    if (metricAvailableProducts) metricAvailableProducts.textContent = available;
    if (metricPausedProducts) metricPausedProducts.textContent = paused;
    if (metricTotalCategories) metricTotalCategories.textContent = catsCount;
  }

  // --- DROPDOWNS DE CATEGORÍAS ---
  function populateCategoryDropdowns() {
    const pureCategories = state.categories.filter(c => c.id !== "all");

    // Dropdown de filtro en tabla
    if (filterCategorySelect) {
      const currentVal = filterCategorySelect.value || "all";
      filterCategorySelect.innerHTML = `<option value="all">Todas las categorías</option>`;
      pureCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.id;
        opt.textContent = cat.name;
        filterCategorySelect.appendChild(opt);
      });
      filterCategorySelect.value = currentVal;
    }

    // Dropdown del modal de producto
    if (prodCategorySelect) {
      prodCategorySelect.innerHTML = "";
      pureCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.id;
        opt.textContent = cat.name;
        prodCategorySelect.appendChild(opt);
      });
    }
  }

  // --- TABLA DE PRODUCTOS ---
  function renderProductsTable() {
    if (!tableProductsBody) return;
    tableProductsBody.innerHTML = "";

    const query = state.searchQuery.toLowerCase().trim();
    let filtered = state.products.filter(p => {
      // Filtro por Categoría
      if (state.filterCategory !== "all" && p.categoryId !== state.filterCategory) {
        return false;
      }
      // Filtro por Estado
      if (state.filterStatus === "available" && p.available === false) return false;
      if (state.filterStatus === "paused" && p.available !== false) return false;

      // Filtro por Búsqueda
      if (query) {
        const matchName = p.name && p.name.toLowerCase().includes(query);
        const matchDesc = p.description && p.description.toLowerCase().includes(query);
        const matchCat = p.categoryName && p.categoryName.toLowerCase().includes(query);
        return matchName || matchDesc || matchCat;
      }
      return true;
    });

    if (filtered.length === 0) {
      tableProductsBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-dim);">
            No hay productos que coincidan con los filtros aplicados.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(p => {
      const isAvailable = p.available !== false;
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>
          <div class="table-product-thumb">
            <img src="${p.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}" alt="${escapeHtml(p.name)}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'">
          </div>
        </td>
        <td>
          <div class="table-product-name">
            <span>${escapeHtml(p.name)}</span>
            ${p.badge ? `<span class="table-badge">${escapeHtml(p.badge)}</span>` : ""}
          </div>
        </td>
        <td>
          <span class="table-category-tag">${escapeHtml(p.categoryName || p.categoryId)}</span>
        </td>
        <td>
          <div class="table-desc-cell" title="${escapeHtml(p.description || '')}">
            ${escapeHtml(p.description || "Sin descripción")}
          </div>
        </td>
        <td>
          <span class="table-price-cell">$${p.price.toFixed(2)}</span>
        </td>
        <td>
          <div class="switch-wrapper">
            <label class="custom-switch">
              <input type="checkbox" data-action="toggle-status" data-id="${p.id}" ${isAvailable ? "checked" : ""}>
              <span class="slider"></span>
            </label>
            <span class="switch-label ${isAvailable ? 'active' : 'paused'}">
              ${isAvailable ? "Disponible" : "Agotado"}
            </span>
          </div>
        </td>
        <td>
          <div class="table-actions-cell">
            <button type="button" class="btn-table-action" data-action="edit" data-id="${p.id}" title="Editar Producto">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button type="button" class="btn-table-action delete" data-action="delete" data-id="${p.id}" title="Eliminar Producto">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </td>
      `;

      // Eventos de fila
      tr.querySelector('[data-action="toggle-status"]').addEventListener("change", (e) => {
        toggleProductAvailability(p.id, e.target.checked);
      });

      tr.querySelector('[data-action="edit"]').addEventListener("click", () => {
        openEditProductModal(p);
      });

      tr.querySelector('[data-action="delete"]').addEventListener("click", () => {
        deleteProduct(p.id);
      });

      tableProductsBody.appendChild(tr);
    });
  }

  // Alternar disponibilidad rápida
  function toggleProductAvailability(id, isAvailable) {
    const prod = state.products.find(p => p.id === id);
    if (prod) {
      prod.available = isAvailable;
      saveProducts();
      renderProductsTable();
      showAdminToast(`"${prod.name}" marcado como ${isAvailable ? 'Disponible' : 'Agotado / Pausado'}`);
    }
  }

  // --- MODAL AGREGAR / EDITAR PRODUCTO Y GESTIÓN DE GALERÍA ---
  function openNewProductModal() {
    state.currentEditingProduct = null;
    productModalTitle.textContent = "Agregar Nuevo Producto al Menú";
    productForm.reset();
    prodAvailableSwitch.checked = true;
    if (prodAvailableLabel) prodAvailableLabel.textContent = "Disponible para ordenar";
    if (urlInputContainer) urlInputContainer.style.display = "none";
    if (prodImageUrlInput) prodImageUrlInput.value = "";

    modalImages = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"];
    activeImageIndex = 0;
    renderModalGallery();

    productModal.classList.add("active");
  }

  function openEditProductModal(product) {
    state.currentEditingProduct = product;
    productModalTitle.textContent = `Editar: ${product.name}`;

    prodNameInput.value = product.name;
    prodCategorySelect.value = product.categoryId;
    prodPriceInput.value = product.price;
    prodBadgeInput.value = product.badge || "";
    prodDescInput.value = product.description || "";
    if (urlInputContainer) urlInputContainer.style.display = "none";
    if (prodImageUrlInput) prodImageUrlInput.value = "";

    // Cargar fotos: si tiene array 'images' o 'image' individual
    if (Array.isArray(product.images) && product.images.length > 0) {
      modalImages = [...product.images];
    } else if (product.image) {
      modalImages = [product.image];
    } else {
      modalImages = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"];
    }
    activeImageIndex = 0;
    renderModalGallery();

    prodAvailableSwitch.checked = product.available !== false;
    if (prodAvailableLabel) {
      prodAvailableLabel.textContent = product.available !== false ? "Disponible para ordenar" : "Pausado / Agotado";
    }

    productModal.classList.add("active");
  }

  function closeProductModal() {
    productModal.classList.remove("active");
    state.currentEditingProduct = null;
    if (urlInputContainer) urlInputContainer.style.display = "none";
  }

  // Renderizar visor de foto y tira de miniaturas
  function renderModalGallery() {
    if (!modalImages || modalImages.length === 0) {
      modalImages = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"];
    }
    if (activeImageIndex >= modalImages.length) {
      activeImageIndex = 0;
    }

    // Actualizar visor de foto activa
    prodPreviewImg.src = modalImages[activeImageIndex];

    if (photosCountBadge) {
      photosCountBadge.textContent = `${modalImages.length} ${modalImages.length === 1 ? 'foto' : 'fotos'}`;
    }

    if (previewRoleBadge) {
      previewRoleBadge.textContent = activeImageIndex === 0 ? "Foto Principal ⭐" : `Foto #${activeImageIndex + 1}`;
    }

    if (btnDeleteActivePhoto) {
      btnDeleteActivePhoto.style.display = modalImages.length > 1 ? "inline-flex" : "none";
    }

    // Renderizar miniaturas
    if (productGalleryThumbnails) {
      productGalleryThumbnails.innerHTML = "";
      modalImages.forEach((imgUrl, idx) => {
        const thumbCard = document.createElement("div");
        thumbCard.className = `gallery-thumb-card ${idx === activeImageIndex ? 'active' : ''}`;
        thumbCard.title = idx === 0 ? "Foto Principal" : `Foto #${idx + 1} (Clic para ver/cambiar)`;

        thumbCard.innerHTML = `
          <img src="${escapeHtml(imgUrl)}" alt="Miniatura ${idx + 1}" onerror="this.src='logo-bullmarket.png'">
          ${idx === 0 ? '<span class="thumb-star-badge">⭐ Principal</span>' : ''}
          ${modalImages.length > 1 ? `<button type="button" class="btn-remove-thumb" title="Eliminar esta foto de la galería" data-index="${idx}">×</button>` : ''}
        `;

        thumbCard.addEventListener("click", (e) => {
          if (e.target.closest(".btn-remove-thumb")) {
            e.stopPropagation();
            removeModalImage(idx);
            return;
          }
          activeImageIndex = idx;
          renderModalGallery();
        });

        productGalleryThumbnails.appendChild(thumbCard);
      });
    }
  }

  function removeModalImage(index) {
    if (modalImages.length <= 1) {
      alert("El producto debe tener al menos una foto.");
      return;
    }
    const removedWasActive = (index === activeImageIndex);
    modalImages.splice(index, 1);
    if (activeImageIndex >= modalImages.length) {
      activeImageIndex = modalImages.length - 1;
    }
    renderModalGallery();
    showAdminToast("Foto quitada de la galería");
  }

  // Botón Quitar Foto activa
  if (btnDeleteActivePhoto) {
    btnDeleteActivePhoto.addEventListener("click", () => {
      removeModalImage(activeImageIndex);
    });
  }

  // 1. Modificar Foto Actual (Subir archivo PC)
  if (prodFileInput) {
    prodFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          modalImages[activeImageIndex] = event.target.result;
          renderModalGallery();
          showAdminToast("Foto modificada con éxito");
        };
        reader.readAsDataURL(file);
        e.target.value = "";
      }
    });
  }

  // 2. Agregar Otra Foto Adicional (Subir archivo PC)
  if (prodAddAnotherFileInput) {
    prodAddAnotherFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          modalImages.push(event.target.result);
          activeImageIndex = modalImages.length - 1;
          renderModalGallery();
          showAdminToast("¡Nueva foto agregada a la galería!");
        };
        reader.readAsDataURL(file);
        e.target.value = "";
      }
    });
  }

  // 3. Toggle de Input de URL
  if (btnToggleUrlInput && urlInputContainer) {
    btnToggleUrlInput.addEventListener("click", () => {
      const isHidden = urlInputContainer.style.display === "none";
      urlInputContainer.style.display = isHidden ? "flex" : "none";
      if (isHidden && prodImageUrlInput) {
        prodImageUrlInput.focus();
      }
    });
  }

  // 4. Reemplazar Foto Actual vía URL
  if (btnApplyUrlReplace && prodImageUrlInput) {
    btnApplyUrlReplace.addEventListener("click", () => {
      const url = prodImageUrlInput.value.trim();
      if (!url) {
        alert("Por favor ingresa un enlace URL válido.");
        return;
      }
      modalImages[activeImageIndex] = url;
      renderModalGallery();
      prodImageUrlInput.value = "";
      if (urlInputContainer) urlInputContainer.style.display = "none";
      showAdminToast("Foto modificada mediante URL");
    });
  }

  // 5. Agregar Nueva Foto vía URL
  if (btnApplyUrlAdd && prodImageUrlInput) {
    btnApplyUrlAdd.addEventListener("click", () => {
      const url = prodImageUrlInput.value.trim();
      if (!url) {
        alert("Por favor ingresa un enlace URL válido.");
        return;
      }
      modalImages.push(url);
      activeImageIndex = modalImages.length - 1;
      renderModalGallery();
      prodImageUrlInput.value = "";
      if (urlInputContainer) urlInputContainer.style.display = "none";
      showAdminToast("¡Nueva foto añadida a la galería!");
    });
  }

  // Guardar formulario de producto
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = prodNameInput.value.trim();
    const categoryId = prodCategorySelect.value;
    const catObj = state.categories.find(c => c.id === categoryId);
    const categoryName = catObj ? catObj.name : categoryId;
    const price = parseFloat(prodPriceInput.value);
    const badge = prodBadgeInput.value.trim();
    const description = prodDescInput.value.trim();
    
    // Foto principal y fotos de galería
    const images = (modalImages && modalImages.length > 0) ? [...modalImages] : [prodPreviewImg.src];
    const image = images[0];
    const available = prodAvailableSwitch.checked;

    if (!name || isNaN(price)) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    if (state.currentEditingProduct) {
      // Actualizar existente
      const prod = state.products.find(p => p.id === state.currentEditingProduct.id);
      if (prod) {
        prod.name = name;
        prod.categoryId = categoryId;
        prod.categoryName = categoryName;
        prod.price = price;
        prod.badge = badge;
        prod.description = description;
        prod.image = image;
        prod.images = images;
        prod.available = available;
      }
      showAdminToast(`Producto "${name}" actualizado con éxito`);
    } else {
      // Crear nuevo
      const slug = name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      const newId = `${categoryId}-${slug}-${Date.now().toString().slice(-4)}`;
      const newProduct = {
        id: newId,
        categoryId,
        categoryName,
        name,
        description,
        price,
        image,
        images,
        badge,
        available
      };
      state.products.unshift(newProduct);
      showAdminToast(`Nuevo producto "${name}" agregado al menú`);
    }

    saveProducts();
    renderProductsTable();
    closeProductModal();
  });

  // Eliminar producto
  function deleteProduct(id) {
    const prod = state.products.find(p => p.id === id);
    if (!prod) return;

    if (confirm(`¿Estás seguro de eliminar "${prod.name}" permanentemente del menú?`)) {
      state.products = state.products.filter(p => p.id !== id);
      saveProducts();
      renderProductsTable();
      showAdminToast(`"${prod.name}" eliminado del menú`);
    }
  }

  // --- GESTIÓN DE CATEGORÍAS ---
  function renderCategoriesTable() {
    if (!categoriesListBody) return;
    categoriesListBody.innerHTML = "";

    const cats = state.categories.filter(c => c.id !== "all");

    cats.forEach(cat => {
      const count = state.products.filter(p => p.categoryId === cat.id).length;
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td><strong style="color: #fff;">${escapeHtml(cat.name)}</strong></td>
        <td><code style="color: var(--text-dim);">${escapeHtml(cat.id)}</code></td>
        <td>${cat.badge ? `<span class="table-badge">${escapeHtml(cat.badge)}</span>` : '<span style="color: var(--text-dim);">-</span>'}</td>
        <td><span style="font-weight: 700; color: var(--color-gold);">${count} productos</span></td>
        <td>
          <div class="table-actions-cell">
            <button type="button" class="btn-table-action" data-cat-edit="${cat.id}" title="Editar Categoría">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button type="button" class="btn-table-action delete" data-cat-del="${cat.id}" title="Eliminar Categoría">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </td>
      `;

      tr.querySelector(`[data-cat-edit="${cat.id}"]`).addEventListener("click", () => {
        openEditCategoryModal(cat);
      });

      tr.querySelector(`[data-cat-del="${cat.id}"]`).addEventListener("click", () => {
        deleteCategory(cat.id);
      });

      categoriesListBody.appendChild(tr);
    });
  }

  function openNewCategoryModal() {
    state.currentEditingCategory = null;
    categoryModalTitle.textContent = "Agregar Nueva Categoría";
    categoryForm.reset();
    categoryModal.classList.add("active");
  }

  function openEditCategoryModal(cat) {
    state.currentEditingCategory = cat;
    categoryModalTitle.textContent = `Editar Categoría: ${cat.name}`;
    catNameInput.value = cat.name;
    catBadgeInput.value = cat.badge || "";
    categoryModal.classList.add("active");
  }

  function closeCategoryModal() {
    categoryModal.classList.remove("active");
    state.currentEditingCategory = null;
  }

  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = catNameInput.value.trim();
    const badge = catBadgeInput.value.trim();
    if (!name) return;

    if (state.currentEditingCategory) {
      const cat = state.categories.find(c => c.id === state.currentEditingCategory.id);
      if (cat) {
        cat.name = name;
        cat.badge = badge;
      }
      showAdminToast(`Categoría "${name}" actualizada`);
    } else {
      const id = name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      state.categories.push({
        id: id || `cat-${Date.now()}`,
        name,
        icon: "utensils",
        badge: badge || ""
      });
      showAdminToast(`Categoría "${name}" creada con éxito`);
    }

    saveCategories();
    renderCategoriesTable();
    closeCategoryModal();
  });

  function deleteCategory(catId) {
    const productsInCat = state.products.filter(p => p.categoryId === catId).length;
    if (productsInCat > 0) {
      alert(`No se puede eliminar la categoría porque contiene ${productsInCat} productos. Reasigna o elimina los productos primero.`);
      return;
    }

    if (confirm("¿Deseas eliminar esta categoría?")) {
      state.categories = state.categories.filter(c => c.id !== catId);
      saveCategories();
      renderCategoriesTable();
      showAdminToast("Categoría eliminada");
    }
  }

  // --- CONFIGURACIÓN & HORARIOS ---
  function loadSettingsIntoForm() {
    const cfg = state.config;
    if (cfgNameInput) cfgNameInput.value = cfg.name || "BULLMARKET";
    if (cfgTaglineInput) cfgTaglineInput.value = cfg.tagline || "";
    if (cfgAddressInput) cfgAddressInput.value = cfg.address || "";
    if (cfgWhatsappInput) cfgWhatsappInput.value = cfg.whatsappNumber || "584128642855";
    if (cfgInstagramInput) cfgInstagramInput.value = cfg.instagramUser || "bullmarket_bqto";
    if (cfgGoogleMapsInput) cfgGoogleMapsInput.value = cfg.googleBusinessUrl || "";
    if (cfgTripAdvisorInput) cfgTripAdvisorInput.value = cfg.tripAdvisorUrl || "";
    if (cfgScheduleWeekdaysInput && cfg.schedule) cfgScheduleWeekdaysInput.value = cfg.schedule.weekdays || "";
    if (cfgScheduleWeekendInput && cfg.schedule) cfgScheduleWeekendInput.value = cfg.schedule.weekend || "";
    if (cfgDeliveryTimeInput) cfgDeliveryTimeInput.value = cfg.deliveryTime || "10 - 15 min.";
    if (cfgForceStatusSelect) cfgForceStatusSelect.value = cfg.forceStatus || "auto";

    // Cargar credenciales
    if (cfgAdminUsername) {
      cfgAdminUsername.value = (cfg.adminAuth && cfg.adminAuth.username) || "admin";
    }
    if (cfgAdminPassword) {
      cfgAdminPassword.value = (cfg.adminAuth && cfg.adminAuth.password) || "bullmarket2026";
    }

    updateBarStatusBadge();
  }

  function updateBarStatusBadge() {
    const isClosed = state.config.forceStatus === "closed";
    if (barStatusToggle) {
      if (isClosed) {
        barStatusToggle.classList.add("closed");
        barStatusText.textContent = "Menú: Cerrado";
      } else {
        barStatusToggle.classList.remove("closed");
        barStatusText.textContent = "Menú: Abierto";
      }
    }
  }

  if (barStatusToggle) {
    barStatusToggle.addEventListener("click", () => {
      const isCurrentlyClosed = state.config.forceStatus === "closed";
      state.config.forceStatus = isCurrentlyClosed ? "open" : "closed";
      saveConfig();
      updateBarStatusBadge();
      if (cfgForceStatusSelect) cfgForceStatusSelect.value = state.config.forceStatus;
      showAdminToast(`Menú configurado como: ${isCurrentlyClosed ? 'Abierto' : 'Cerrado'}`);
    });
  }

  if (formSettings) {
    formSettings.addEventListener("submit", (e) => {
      e.preventDefault();
      state.config.name = cfgNameInput.value.trim();
      state.config.tagline = cfgTaglineInput.value.trim();
      state.config.address = cfgAddressInput.value.trim();
      state.config.whatsappNumber = cfgWhatsappInput.value.trim();
      const rawInsta = cfgInstagramInput.value.trim().replace(/^@/, "");
      state.config.instagramUser = rawInsta;
      state.config.instagramUrl = `https://www.instagram.com/${rawInsta}/`;
      state.config.googleBusinessUrl = cfgGoogleMapsInput.value.trim();
      state.config.googleReviewUrl = cfgGoogleMapsInput.value.trim();
      state.config.tripAdvisorUrl = cfgTripAdvisorInput ? cfgTripAdvisorInput.value.trim() : "";
      state.config.deliveryTime = cfgDeliveryTimeInput.value.trim();
      state.config.forceStatus = cfgForceStatusSelect.value;
      
      if (!state.config.schedule) state.config.schedule = {};
      state.config.schedule.weekdays = cfgScheduleWeekdaysInput.value.trim();
      state.config.schedule.weekend = cfgScheduleWeekendInput.value.trim();

      // Guardar también credenciales si se especificaron
      if (cfgAdminUsername && cfgAdminPassword) {
        const u = cfgAdminUsername.value.trim() || "admin";
        const p = cfgAdminPassword.value.trim() || "bullmarket2026";
        if (!state.config.adminAuth) state.config.adminAuth = {};
        state.config.adminAuth.username = u;
        state.config.adminAuth.password = p;
        if (currentAdminName) currentAdminName.textContent = u;
      }

      saveConfig();
      updateBarStatusBadge();
      showAdminToast("Ajustes del negocio guardados con éxito");
    });
  }

  // Guardar credenciales de forma directa con botón dedicado
  if (btnSaveAdminPassword) {
    btnSaveAdminPassword.addEventListener("click", () => {
      const newU = cfgAdminUsername ? cfgAdminUsername.value.trim() : "admin";
      const newP = cfgAdminPassword ? cfgAdminPassword.value.trim() : "bullmarket2026";

      if (!newU || !newP) {
        alert("El usuario y la contraseña no pueden estar vacíos.");
        return;
      }

      if (!state.config.adminAuth) state.config.adminAuth = {};
      state.config.adminAuth.username = newU;
      state.config.adminAuth.password = newP;

      saveConfig();
      if (currentAdminName) currentAdminName.textContent = newU;
      sessionStorage.setItem("bullmarket_admin_user", newU);
      showAdminToast("¡Credenciales de Administrador actualizadas con éxito!");
    });
  }

  // Toggle visibilidad contraseña en formulario de ajustes
  if (btnToggleCfgPassword && cfgAdminPassword) {
    btnToggleCfgPassword.addEventListener("click", () => {
      const isPwd = cfgAdminPassword.type === "password";
      cfgAdminPassword.type = isPwd ? "text" : "password";
    });
  }

  // Autenticación en Telón (Auth Gate)
  if (authGateForm) {
    authGateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredUser = gateUsername.value.trim().toLowerCase();
      const enteredPass = gatePassword.value.trim();

      const auth = state.config.adminAuth || { username: "admin", password: "bullmarket2026" };
      const validUser1 = (auth.username || "admin").toLowerCase();
      const validUser2 = "bullmarket"; // alias
      const validPass = auth.password || "bullmarket2026";

      if ((enteredUser === validUser1 || enteredUser === validUser2) && enteredPass === validPass) {
        sessionStorage.setItem("bullmarket_admin_logged", "true");
        sessionStorage.setItem("bullmarket_admin_user", enteredUser);
        if (currentAdminName) currentAdminName.textContent = enteredUser;
        if (adminAuthGate) adminAuthGate.classList.add("hidden");
        if (gateErrorAlert) gateErrorAlert.style.display = "none";
        showAdminToast("¡Acceso autorizado! Bienvenido Administrador");
      } else {
        if (gateErrorAlert) {
          gateErrorAlert.style.display = "flex";
          gateErrorText.textContent = "Credenciales incorrectas. Verifica usuario o clave.";
        }
        gatePassword.value = "";
        gatePassword.focus();
      }
    });
  }

  // Toggle visibilidad contraseña en Auth Gate
  if (btnToggleGatePassword && gatePassword) {
    btnToggleGatePassword.addEventListener("click", () => {
      const isPwd = gatePassword.type === "password";
      gatePassword.type = isPwd ? "text" : "password";
    });
  }

  // Cerrar Sesión Administrador
  if (btnLogoutAdmin) {
    btnLogoutAdmin.addEventListener("click", () => {
      if (confirm("¿Deseas cerrar la sesión de administrador?")) {
        sessionStorage.removeItem("bullmarket_admin_logged");
        sessionStorage.removeItem("bullmarket_admin_user");
        showAdminToast("Sesión cerrada");
        if (adminAuthGate) {
          adminAuthGate.classList.remove("hidden");
          if (gatePassword) gatePassword.value = "";
          if (gateErrorAlert) gateErrorAlert.style.display = "none";
          if (gateUsername) gateUsername.focus();
        }
      }
    });
  }

  // --- EXPORTAR Y DESCARGAR DATA.JS ---
  if (btnExportDataJs) {
    btnExportDataJs.addEventListener("click", () => {
      exportDataJsFile();
    });
  }

  function exportDataJsFile() {
    const fileContent = `// ===========================================================================
// 🍽️ CATÁLOGO OFICIAL Y CONFIGURACIÓN - BULLMARKET BRUNCH & GASTROBAR
// Base de datos actualizada desde el Panel Administrativo
// ===========================================================================

const BULLMARKET_CONFIG = ${JSON.stringify(state.config, null, 2)};

const CATEGORIES = ${JSON.stringify(state.categories, null, 2)};

const PRODUCTS = ${JSON.stringify(state.products, null, 2)};
`;

    const blob = new Blob([fileContent], { type: "application/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.js";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showAdminToast("¡Archivo data.js generado y descargado con éxito!");
  }

  // --- EXPORTAR / IMPORTAR COPIA DE SEGURIDAD JSON ---
  if (btnExportJson) {
    btnExportJson.addEventListener("click", () => {
      const backupData = {
        config: state.config,
        categories: state.categories,
        products: state.products,
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `bullmarket-menu-backup-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showAdminToast("Copia de seguridad JSON descargada");
    });
  }

  if (inputImportJson) {
    inputImportJson.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed.products) && Array.isArray(parsed.categories)) {
            state.products = parsed.products;
            state.categories = parsed.categories;
            if (parsed.config) state.config = parsed.config;

            saveProducts();
            saveCategories();
            saveConfig();

            populateCategoryDropdowns();
            renderMetrics();
            renderProductsTable();
            renderCategoriesTable();
            loadSettingsIntoForm();

            showAdminToast("¡Copia de seguridad importada con éxito!");
          } else {
            alert("El archivo no tiene el formato de respaldo válido de Bullmarket.");
          }
        } catch (err) {
          alert("Error leyendo el archivo JSON: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  // --- RESTABLECER DE FÁBRICA ---
  if (btnResetDefaults) {
    btnResetDefaults.addEventListener("click", () => {
      if (confirm("⚠️ ¿Estás seguro de restablecer el catálogo de fábrica? Esto descartará modificaciones locales y volverá a los 186 productos oficiales extraídos de OlaClick.")) {
        localStorage.removeItem("bullmarket_products");
        localStorage.removeItem("bullmarket_categories");
        localStorage.removeItem("bullmarket_config");
        window.location.reload();
      }
    });
  }

  // --- TOAST NOTIFICATIONS ---
  function showAdminToast(msg) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "admin-toast";
    toast.innerHTML = `<span>${escapeHtml(msg)}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // --- EVENT LISTENERS GENERALES ---
  function setupEventListeners() {
    if (searchProductInput) {
      searchProductInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderProductsTable();
      });
    }

    if (filterCategorySelect) {
      filterCategorySelect.addEventListener("change", (e) => {
        state.filterCategory = e.target.value;
        renderProductsTable();
      });
    }

    if (filterStatusSelect) {
      filterStatusSelect.addEventListener("change", (e) => {
        state.filterStatus = e.target.value;
        renderProductsTable();
      });
    }

    if (btnNewProduct) {
      btnNewProduct.addEventListener("click", openNewProductModal);
    }

    if (closeProductModalBtn) {
      closeProductModalBtn.addEventListener("click", closeProductModal);
    }

    if (btnCancelProduct) {
      btnCancelProduct.addEventListener("click", closeProductModal);
    }

    if (btnNewCategory) {
      btnNewCategory.addEventListener("click", openNewCategoryModal);
    }

    if (closeCategoryModalBtn) {
      closeCategoryModalBtn.addEventListener("click", closeCategoryModal);
    }

    if (btnCancelCategory) {
      btnCancelCategory.addEventListener("click", closeCategoryModal);
    }

    // Escape para modales
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (productModal.classList.contains("active")) closeProductModal();
        if (categoryModal.classList.contains("active")) closeCategoryModal();
      }
    });
  }

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
