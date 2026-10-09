# 🍔 Plataforma de Menú Interactivo & Pedidos - BULLMARKET

Plataforma web moderna, de alta velocidad y mobile-first diseñada para **BULLMARKET (Brunch, Bistro & Gourmet Burgers)** en Barquisimeto, Venezuela.

Incluye la **base de datos completa de 186 productos** sincronizada desde su menú oficial de OlaClick (`https://bullmarket-brunch.ola.click/products`), fotos oficiales en alta resolución, descripciones gastronómicas, carrito interactivo con pedido automático al **WhatsApp oficial (+58 412 864 2855)** y una **plataforma completa de administración (CMS)** para editar productos, precios, fotos, disponibilidad y horarios.

---

## ✨ Características Principales

### 1. 📋 Catálogo Completo & Oficial (186 Productos)
- **18 Secciones / Categorías:**
  - 🔥 **Promos & Boxes:** Papilote de Merluza, Full Box Chicken, Bull Boxes 1, 2 y 3, Parrilla Bull, Bull House.
  - 🥞 **Brunch & Desayunos:** Pancakes tradicionales, Pancakes Bacon, Waffles, Waffles Free sin gluten, Desayuno Americano, Francés, Criollo, Salmón Toast, Huevos Benedictinos, Omelettes, Plato Keto.
  - 🥪 **Sandwiches & Croissants:** Clásico, Sandwich Bull, Croissant American Delight, Ibérico, Italiano, Ratatouille.
  - 🥩 **Platos Principales:** Cowboy Steak (550gr), Lomito al grill, New York Steak, Tomahawk de Cerdo, Costillas BBQ, Salmón al ajillo, Róbalo al gratén.
  - 🍗 **Entradas & Compartir:** Ceviche Bull, Carpaccio de lomito, Camarones al ajillo, Tartar de salmón, Dedos de mozzarella, Arepitas con nata, Fish & Chips, BBQ Wings, Búfalo Wings, Tenders, Tequeños (9 und) y Pasteles Bull.
  - 🥗 **Livianitos & Bowls:** Strogonoff de lomito y puré, Cordon Bleu con césar, Lasaña Bull (pasticho venezolano), Cotoletta de res/pollo, Pollo Toscano.
  - 🍝 **Pastas Italianas:** 4 Quesos, Alfredo, Carbonara, Del Pruno, Sinatra, Brava, Bologna, Napolitana.
  - 🥑 **Ensaladas Frescas:** Mediterránea, Salmón, César Clásica, César con Pollo, Duquesa, Rusttys Salad.
  - 🍔 **Hamburguesas Gourmet:** Bull Master (Ganadora Burger Master 2024), Bull Burger (Ganadora As Burger 2024), Beasty Burger (3 carnes), Big Boss, Pulled Pork, Full Cheese, K-Chicken (estilo coreano), Parrillera, Llanera, Street Molly.
  - 🥪 **Paninis Tostados:** Italiano con prosciutto, Panini Bull con brisket ahumado, Lomito con doble queso, Argentino, Roast Beef, Atún.
  - 👶 **Menú Infantil:** Mac & Cheese / Nápoles, Papas bacon-cheese, Mini Burger con papas, Tequeños kids.
  - 🍰 **Postres & Repostería:** Choco Master (Ganador Sweet Master 2024), Cheesecake de Cinnamon, Golden Queen, Cheesecakes NY (Fresa, Chocoavellana, Oreo, Sugar Free), Torta de Matilda, Red Velvet, Zanahoria, Milhojas, Tres Leches, Galletas NY, Alfajores, Muffins.
  - 🥐 **Panadería Dulce:** Roll New York Chocolate con avellanas, Cachito tradicional de jamón, Panes de queso rellenos.
  - ☕ **Cafetería de Especialidad:** Espresso, Americano, Capuccino, Latte, Mocaccino, Caramel Macchiato, Frappuccino, Baileys Coffee, Affogato Manhattan/California/NY, Carajillo con ron, Toddy caliente.
  - 🍵 **Té & Infusiones:** Ginger Chai (hebras), Matcha Ceremonial, Spiced Chai, Taro Mix, Bubble Tea.
  - 🥤 **Batidos & Bebidas:** Bullshake, Merengadas, Batidos naturales, Té Lipton, Jugos Yukery, Pepsi, Coca-Cola, Chinotto, Golden, 7UP.

---

### 2. 📱 Experiencia de Usuario (Mobile-First)
- **Buscador instantáneo** que filtra en tiempo real por nombre del plato, ingredientes o categoría.
- **Selector de categorías deslizables** horizontalmente con contador de productos en vivo.
- **Modal de Detalle Gastronómico:** Permite ver la foto ampliada, descripción gourmet, notas personalizadas para la cocina (ej: *"término 3/4, sin cebolla, aderezo aparte"*) y selector de cantidades.
- **Lightbox de Zoom:** Permite ver la foto de cualquier plato a pantalla completa con un solo toque.

---

### 3. 🛍️ Carrito de Compras & Enrutamiento a WhatsApp
- **Selector de modalidad de servicio:**
  - 🪑 **En Mesa / Salón:** Solicita el número de mesa o ubicación en el restaurante.
  - 🛍️ **Para Retirar (Pick Up):** Listo para buscar en la barra o mostrador.
  - 🛵 **Delivery a Domicilio:** Solicita la dirección exacta y punto de referencia.
- **Métodos de pago:** Efectivo USD ($), Zelle, Pago Móvil (Bs. Tasa del día), Tarjeta / Punto de Venta.
- **Botón "Enviar Pedido por WhatsApp":** Construye automáticamente un mensaje profesional con formato limpio, emojis, número de orden, ítems detallados, notas de cocina y total a pagar, abriendo el chat directo con el WhatsApp oficial de Bullmarket (+58 412 864 2855).

---

### 4. ⚙️ Plataforma de Administración y Edición del Menú (`admin.html`)
- **Protección de Seguridad con Clave de Administrador:**
  - Al hacer clic en **"Editar Menú"** en el menú de clientes o al abrir directamente `admin.html`, el sistema solicita autenticación obligatoria.
  - **Credenciales Oficiales de Administrador:**
    - **Usuario:** `admin` *(o el alias `bullmarket`)*
    - **Contraseña:** `bullmarket2026`
  - Puedes cambiar el usuario y la contraseña en cualquier momento desde la pestaña **"Horarios y Negocio"** -> **"Seguridad y Clave de Administrador"**.
- **Gestión de Productos:**
  - Agregar nuevos platos, hamburguesas o bebidas.
  - Editar precios, fotos, descripciones, categorías e insignias promocionales (*Promo, 2x1, Top Seller*).
  - Pausar / activar disponibilidad con un switch con un solo clic (si un plato se agota, márcalo como "Agotado").
  - Subir fotos desde tu computadora o pegar enlaces de internet con vista previa instantánea.
  - Eliminar productos obsoletos.
- **Gestión de Categorías:**
  - Crear nuevas secciones o editar las existentes.
- **Configuración del Negocio & Seguridad:**
  - Modificar usuario y contraseña del administrador.
  - Modificar el número de WhatsApp donde se reciben las órdenes.
  - Modificar horarios semanales y de fin de semana.
  - Cambiar el estado del local (Automático, Abierto o Cerrado temporalmente).
- **Respaldar & Exportar:**
  - **"Descargar data.js listo para producción":** Genera y descarga el archivo `data.js` actualizado con todos los cambios que hayas hecho en el panel para guardarlo permanentemente en la carpeta del proyecto.
  - **Copia de seguridad JSON:** Exporta o importa un respaldo de todo el catálogo en un clic.
  - **Restablecer de Fábrica:** Vuelve al catálogo original de 186 productos en cualquier momento.

---

## 🚀 ¿Cómo Abrir y Usar el Menú Localmente?

No requiere instalar ningún programa ni consola:
1. Abre esta carpeta (`Menu Interactivo Bullmarket`).
2. Haz **doble clic en `index.html`** para abrir el menú de clientes en Google Chrome, Edge, Safari o tu navegador preferido.
3. Haz **doble clic en `admin.html`** para abrir el panel de control y edición.

---

## 🌐 ¿Cómo Publicar el Menú en Internet Gratis?

Para colocar este nuevo menú interactivo en el perfil de Instagram (`@bullmarket_bqto`), Google Maps, TripAdvisor o en enlaces de WhatsApp:

### Opción 1: Netlify Drop (La más rápida, toma 30 segundos)
1. Ingresa a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta `Menu Interactivo Bullmarket` completa a la ventana del navegador.
3. Te generará un enlace público inmediato como `https://bullmarket-menu.netlify.app`.

### Opción 2: Vercel
1. Ingresa a [vercel.com](https://vercel.com).
2. Sube la carpeta o conecta tu repositorio de GitHub.
3. Se publicará automáticamente con certificado SSL (HTTPS) y máxima velocidad.

### Opción 3: GitHub Pages
1. Sube los archivos a un repositorio en GitHub.
2. Ve a **Settings -> Pages** y activa **Deploy from branch: main**.
3. El menú estará disponible en `https://tu-usuario.github.io/Menu-Interactivo-Bullmarket`.

---

© 2026 BULLMARKET. Todos los derechos reservados.
