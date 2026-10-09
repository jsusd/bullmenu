// ===========================================================================
// 🍽️ CATÁLOGO OFICIAL Y CONFIGURACIÓN - BULLMARKET BRUNCH & GASTROBAR
// Base de datos completa con todos los productos, fotos, descripciones y precios
// Sincronizada desde https://bullmarket-brunch.ola.click/products
// ===========================================================================

const BULLMARKET_CONFIG = {
  name: "BULLMARKET",
  tagline: "Brunch, Bistro & Gourmet Burgers",
  address: "Galería Gastronómica C.C. Las Trinitarias / Av. Herman Garmendia, Barquisimeto, Lara, Venezuela",
  whatsappNumber: "584128642855", // WhatsApp oficial de recepción de pedidos
  instagramUser: "bullmarket_bqto",
  instagramUrl: "https://www.instagram.com/bullmarket_bqto/",
  googleBusinessUrl: "https://www.google.com/maps/place/Bull+Market+%26+Brunch/data=!4m2!3m1!1s0x0:0xa7d99ba7b0023584?sa=X&ved=1t:2428&ictx=111",
  googleReviewUrl: "https://www.google.com/maps/place/Bull+Market+%26+Brunch/data=!4m2!3m1!1s0x0:0xa7d99ba7b0023584?sa=X&ved=1t:2428&ictx=111",
  tripAdvisorUrl: "https://www.tripadvisor.es/Restaurant_Review-g316090-d25275311-Reviews-Bull_Market_Brunch-Barquisimeto_Central_Western_Region.html",
  currency: {
    symbol: "$",
    code: "USD",
    rateBS: 0 // Si se desea activar tasa BCV en el futuro
  },
  schedule: {
    weekdays: "Lunes a Domingo: 8:00 AM - 10:00 PM",
    weekend: "Brunch & Cenas: 8:00 AM - 11:00 PM"
  },
  deliveryTime: "10 - 15 min.",
  deliveryMethods: [
    { id: "onsite", label: "Consumo en Mesa / Salón", icon: "chair", reqAddress: false, reqTable: true },
    { id: "pickup", label: "Para Retirar (Pick Up)", icon: "bag-shopping", reqAddress: false, reqTable: false },
    { id: "delivery", label: "Delivery a Domicilio", icon: "motorcycle", reqAddress: true, reqTable: false }
  ],
  paymentMethods: [
    { id: "cash_usd", label: "Efectivo USD ($)" },
    { id: "zelle", label: "Zelle" },
    { id: "pagomovil", label: "Pago Móvil (Bs. Tasa del día)" },
    { id: "tarjeta", label: "Punto de Venta / Tarjeta (En local)" }
  ],
  bannerImage: "https://assets.olaclick.app/companies/backgrounds/7b7865eb-5abe-45e5-ab2b-c99fcd6d30a1.webp",
  logoImage: "logo-bullmarket.png",
  logoImageFallback: "https://assets.olaclick.app/companies/logos/be35feb9-65e1-4d35-aff6-f2b8a2fa7fd2.png",
  adminAuth: {
    username: "admin",
    password: "bullmarket2026"
  }
};

const CATEGORIES = [
  { id: "all", name: "Todos", icon: "fire" },
  { id: "promos", name: "Promos & Boxes", icon: "sparkles", badge: "Destacado" },
  { id: "brunch", name: "Brunch & Desayunos", icon: "egg", badge: "Favoritos" },
  { id: "sandwiches", name: "Sandwiches & Croissants", icon: "sandwich" },
  { id: "principales", name: "Platos Principales", icon: "utensils", badge: "Carnes & Grill" },
  { id: "entradas", name: "Entradas & Compartir", icon: "drumstick" },
  { id: "livianitos", name: "Livianitos & Bowls", icon: "bowl-food", badge: "Fit" },
  { id: "pastas", name: "Pastas Italianas", icon: "pasta" },
  { id: "ensaladas", name: "Ensaladas Frescas", icon: "leaf", badge: "Healthy" },
  { id: "hamburguesas", name: "Hamburguesas Gourmet", icon: "burger", badge: "Top Bull" },
  { id: "paninis", name: "Paninis Tostados", icon: "bread-slice" },
  { id: "infantil", name: "Menú Infantil", icon: "face-smile", badge: "Kids" },
  { id: "postres", name: "Postres & Repostería", icon: "cake", badge: "Sweet" },
  { id: "panaderia", name: "Panadería Dulce", icon: "cookie", badge: "Horno" },
  { id: "cafes", name: "Café de Especialidad", icon: "mug-hot", badge: "Barista" },
  { id: "te", name: "Té & Infusiones", icon: "cup-water", badge: "Hebras" },
  { id: "batidos", name: "Batidos & Merengadas", icon: "blender" },
  { id: "jugos", name: "Jugos & Aguas", icon: "bottle-water" },
  { id: "refrescos", name: "Refrescos", icon: "can" }
];

const PRODUCTS = [
  // ==================== PROMOS & BOXES ====================
  {
    id: "promos-papilote-de-merluza",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Papilote de Merluza",
    description: "Delicado filete de merluza al papilote con aromáticas hierbas, acompañado de suave puré de papas.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/f961d785-fccf-44ca-a24c-a742feb9e115.jpeg",
    badge: "Promo",
    available: true
  },
  {
    id: "promos-merluza-frita",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Merluza frita",
    description: "Crujiente merluza dorada servida con ensalada fresca de la casa y tostones de plátano.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7bca43a0-eb1d-4744-8b08-15d75fa24f0f.jpeg",
    badge: "Promo",
    available: true
  },
  {
    id: "promos-full-box-chicken",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Full Box Chicken 🍔",
    description: "Tres hamburguesas de pollo de 100 g cada una, 300 g de cotufa de pollo apanado, 200 g de Tenders, 300 g de papas fritas y 200 g de papas rústicas.",
    price: 29.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7983cb6a-955a-4f70-97cb-1f153671c1bf.jpeg",
    badge: "Mega Box",
    available: true
  },
  {
    id: "promos-bull-box-3",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Bull Box 3 🍔",
    description: "2 hamburguesas pulled pork + 1 ración de papas + 100g de Tenders de pollo + 1 refresco de 1lts.",
    price: 19.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7f47f0e8-c045-4eaa-95e4-353ff59583f1.jpeg",
    badge: "Para 2",
    available: true
  },
  {
    id: "promos-bull-box-2",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Bull box 2 🍔",
    description: "Lo mejor para compartir: tres hamburguesas, 3 dedos de mozzarella, tenders de pollo, ración de tequeños y de papas fritas.",
    price: 29.95,
    image: "https://assets.olaclick.app/companies/products/images/800/18de94b7-e8a8-4ca0-9658-a3d241d63bb5.jpeg",
    badge: "Compartir",
    available: true
  },
  {
    id: "promos-bull-box-1",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Bull box 1 🍔",
    description: "Perfecto para dos personas: dos hamburguesas, alitas de pollo, ración de tequeños y ración de papas fritas.",
    price: 19.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5dd957b7-c499-489b-bced-a117c29c6d02.jpeg",
    badge: "Para 2",
    available: true
  },
  {
    id: "promos-parrilla-bull",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Parrilla Bull",
    description: "400gr de Solomo a la parrilla acompañado de Chorizo Ahumado y Queso Semiduro sobre cama fresca de lechuga, tomate y cebolla morada con guasacaca, vinagreta y papas fritas.",
    price: 24.95,
    image: "https://assets.olaclick.app/companies/products/images/800/357bc112-d572-41b4-8209-8340f579b297.jpeg",
    badge: "Especialidad",
    available: true
  },
  {
    id: "promos-bull-house",
    categoryId: "promos",
    categoryName: "Promos & Boxes",
    name: "Bull House",
    description: "Sándwiches rellenos de suprema de pollo, huevo, lechuga, queso amarillo, jamón y tocineta, acompañados con papas fritas (bacon-cheese).",
    price: 22.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5ca2d6eb-bbec-4ba3-9645-c647ccfc1e7b.jpeg",
    badge: "Super Combo",
    available: true
  },

  // ==================== BRUNCH & DESAYUNOS ====================
  {
    id: "brunch-pancakes",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Pancakes",
    description: "Pancakes americanos esponjosos acompañados de chocolate, miel, fresas frescas con crema chantilly y mermelada.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5505d362-8648-408e-87c6-d6a526d81789.jpeg",
    badge: "Clásico",
    available: true
  },
  {
    id: "brunch-pancakes-bacon",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Pancakes bacon",
    description: "Pancakes americanos acompañados de huevos al gusto, crujiente tocineta, mermelada y mantequilla.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/2af79628-d600-4b38-a323-e1185bf2708e.jpeg",
    badge: "Top Brunch",
    available: true
  },
  {
    id: "brunch-waffles",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Waffles",
    description: "Crujientes y dorados waffles acompañados de chocolate, miel, m&ms, fresas y crema chantilly.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ca449fe0-067a-4ad8-a481-4029e0577dad.png",
    badge: "Sweet",
    available: true
  },
  {
    id: "brunch-waffles-free",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Waffles free",
    description: "Waffles saludables de avena sin gluten, servidos con granola crocante, yogurt griego, sirope sugar free y mix de frutas frescas.",
    price: 13.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1c3445f2-d632-47ac-9e15-d1fa2860ae16.png",
    badge: "Healthy",
    available: true
  },
  {
    id: "brunch-desayuno-americano",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Desayuno americano",
    description: "Huevos al gusto, crocante tocineta, salchichas, mermelada, mantequilla y pan artesanal tostado.",
    price: 13.95,
    image: "https://assets.olaclick.app/companies/products/images/800/efbc2aba-d81f-4f05-8e64-ece21f3166e6.png",
    badge: "Completo",
    available: true
  },
  {
    id: "brunch-desayuno-frances",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Desayuno francés",
    description: "Tostadas francesas dulces con topping de fresa, crema y miel; acompañadas de un omelette de jamón y queso.",
    price: 13.95,
    image: "https://assets.olaclick.app/companies/products/images/800/32a44f39-a4e6-404e-a1d0-e021b5c50b3b.png",
    badge: "Gourmet",
    available: true
  },
  {
    id: "brunch-desayuno-criollo",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Desayuno criollo",
    description: "Arepas asadas o fritas, caraotas negras, carne mechada jugosa, huevos al gusto, mantequilla, natilla criolla y queso blanco rallado.",
    price: 13.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b2b0d318-7ac5-4b2a-9b2a-91cad17386e0.png",
    badge: "Criollo",
    available: true
  },
  {
    id: "brunch-toast",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Toast",
    description: "Pan tostado, huevos pochados, aguacate o guacamole, salsa holandesa cremosa, prosciutto, rúgula fresca y cebolla caramelizada.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/6a3f9ff9-4eaa-4bf9-9beb-9eae63ae15e8.jpeg",
    badge: "Brunch",
    available: true
  },
  {
    id: "brunch-salmon-toast",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Salmón toast",
    description: "Pan de avena tostado, aguacate hass, yogurt griego, salmón ahumado, perejil fresco, semillas de sésamo y huevos.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/03c899a5-b96f-4df7-a424-6eefebf38e4c.jpeg",
    badge: "Premium",
    available: true
  },
  {
    id: "brunch-huevos-benedictinos",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Huevos benedictinos",
    description: "Huevos pochados sobre jamón ahumado y pan brioche tostado, con tocineta crocante, rúgula y suave salsa holandesa casera.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/180ea2f3-1e89-41b1-abfc-2a1dcc38b054.png",
    badge: "Favorito",
    available: true
  },
  {
    id: "brunch-omelette-fit",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Omelette Fit",
    description: "Omelette relleno de jamón de pavo, queso paisa, maíz, champiñones, tomates y espinaca, acompañado de tostadas de avena (claras o completo).",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/8b23dfbe-cc22-4988-b7d0-da920ae13d5b.png",
    badge: "Fit",
    available: true
  },
  {
    id: "brunch-omelette",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Omelette Tradicional",
    description: "Huevos batidos dorados con jamón ahumado, queso amarillo fundido, rebanadas de pan tostado y mantequilla.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/2b773c59-329d-401d-90ef-9ba2915ec3eb.png",
    available: true
  },
  {
    id: "brunch-keto",
    categoryId: "brunch",
    categoryName: "Brunch & Desayunos",
    name: "Plato Keto",
    description: "200g de suprema de pollo al grill, huevo, aguacate en lascas, rúgula fresca y tomates cherry con aderezo bajo en carbohidratos.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/e687f5f7-055b-45b7-8bbf-c9bb9336dc88.jpeg",
    badge: "Keto",
    available: true
  },

  // ==================== SANDWICHES Y CROISSANTS ====================
  {
    id: "sandwiches-clasico",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Sándwich Clásico",
    description: "Pan de molde tostado relleno de jamón seleccionado, queso amarillo derretido, kétchup, mayonesa y vegetales frescos.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b5f7d30f-0bef-4229-bf1b-a09995169085.png",
    available: true
  },
  {
    id: "sandwiches-sandwich-bull",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Sandwich Bull",
    description: "Relleno con jugosa suprema de pollo, huevo, lechuga, queso amarillo, jamón ahumado y porción de papas fritas crujientes.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/675662a6-c216-40a9-8d7f-e4b7046ca6ae.png",
    badge: "Especial",
    available: true
  },
  {
    id: "sandwiches-croissant-jamon-queso",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Croissant de Jamón y queso",
    description: "Croissant hojaldrado horneado diariamente con jamón y queso fundido.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1dd08e5f-cfa5-40b2-97a1-e8141a9e3d20.png",
    available: true
  },
  {
    id: "sandwiches-croissant-american-delight",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Croissant American Delight",
    description: "Croissant artesanal relleno de suaves huevos revueltos, queso americano facilista y tocineta ahumada crujiente.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ee5998f8-de39-44b5-a4a3-369b68ba3fd0.png",
    badge: "Popular",
    available: true
  },
  {
    id: "sandwiches-croissant-ratattoille",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Croissant Ratatouille",
    description: "Croissant relleno de queso mozzarella, vegetales salteados estilo ratatouille, salsa nápoles y queso pecorino.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/96d93a14-dcb1-4b53-b4ad-a09028c124e6.png",
    available: true
  },
  {
    id: "sandwiches-croissant-italiano",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Croissant Italiano",
    description: "Huevo entero, rúgula tierna, prosciutto italiano, lascas de pecorino y salsa pesto casera.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/f92558ea-b102-445b-a666-df33e6a09c04.png",
    available: true
  },
  {
    id: "sandwiches-croissant-iberico",
    categoryId: "sandwiches",
    categoryName: "Sandwiches & Croissants",
    name: "Croissant Ibérico",
    description: "Prosciutto curado, tomates confitados, queso pecorino y aderezo alioli en un croissant crujiente de mantequilla.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/89e900af-c861-478e-882e-42e1c2e0c71a.png",
    badge: "Gourmet",
    available: true
  },

  // ==================== PLATOS PRINCIPALES ====================
  {
    id: "principales-cowboy-steak",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Cowboy steak",
    description: "550gr de imponente corte de res (cowboy) a la brasa más dos contornos de tu preferencia, acompañado de guasacaca, pico de gallo o chimichurri.",
    price: 44.95,
    image: "https://assets.olaclick.app/companies/products/images/800/4d3654be-0cfb-4c83-9151-f7718ea42bdc.jpeg",
    badge: "550gr Corte Premium",
    available: true
  },
  {
    id: "principales-lomito-al-grill",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Lomito al grill",
    description: "Tiernos medallones de lomito de res o filet mignon sellados al término deseado con dos guarniciones.",
    price: 22.95,
    image: "https://assets.olaclick.app/companies/products/images/800/e30aa412-ffc2-46c0-93ee-f1069e48e2c7.png",
    available: true
  },
  {
    id: "principales-new-york-steak",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "New York Steak",
    description: "Corte de carne de res premium madurada con marmoleo perfecto, acompañado de dos guarniciones a tu elección.",
    price: 24.95,
    image: "https://assets.olaclick.app/companies/products/images/800/2fcaad7d-140a-4dc0-a1b4-cdecf278c5c2.png",
    badge: "Corte Angus",
    available: true
  },
  {
    id: "principales-tomahawk-de-cerdo",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Tomahawk De Cerdo",
    description: "Corte premium de cerdo con hueso, glaseado en reducción de naranja y miel con especias, acompañado de dos guarniciones.",
    price: 24.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ba34c2ca-31a5-4826-8c5a-8005e6ef81a5.png",
    badge: "Recomendado",
    available: true
  },
  {
    id: "principales-suprema-de-pollo-al-grill",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Suprema De Pollo Al Grill",
    description: "Milanesa jugosa de suprema de pollo marinada y asada al grill, servida con dos guarniciones.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1a69ba5e-ea37-4f45-a21f-501d98e8f6b7.png",
    available: true
  },
  {
    id: "principales-salmon-al-ajillo",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Salmón Al Ajillo",
    description: "Churrasco de salmón rosado preparado con ajo confitado, mantequilla clarificada, perejil, vino blanco y sal marina.",
    price: 32.95,
    image: "https://assets.olaclick.app/companies/products/images/800/d1cb286c-7721-4deb-9dfe-5a58956a5037.png",
    badge: "Del Mar",
    available: true
  },
  {
    id: "principales-robalo",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Róbalo al Gratén",
    description: "Filete de róbalo fresco con champiñones a la crema y salsa meunière al gratén con queso mozzarella y parmesano.",
    price: 29.95,
    image: "https://assets.olaclick.app/companies/products/images/800/4d6397a1-d3c0-400e-ace2-7bd85be9b37e.png",
    available: true
  },
  {
    id: "principales-costillas-bbq",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Costillas BBQ",
    description: "Costillas de cerdo seleccionadas, cocinadas a fuego lento hasta desprenderse del hueso en salsa BBQ ahumada de la casa.",
    price: 24.95,
    image: "https://assets.olaclick.app/companies/products/images/800/9df46510-c9f5-4b9c-aa1a-b94af47cbbe6.png",
    badge: "Favorito",
    available: true
  },
  {
    id: "principales-medallones-de-salmon",
    categoryId: "principales",
    categoryName: "Platos Principales",
    name: "Medallones de salmón",
    description: "150gr de salmón en medallón a la plancha servido con guarniciones a tu gusto.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/41aea728-5889-4a85-9883-405c1c81165b.png",
    available: true
  },

  // ==================== ENTRADAS & COMPARTIR ====================
  {
    id: "entradas-ceviche-bull",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Ceviche Bull",
    description: "Cubos de pescado blanco marinados en zumo de limón, toque de sriracha, cebolla morada, ají dulce, cilantro, maní, rúgula y maíz; con casabe o focaccia.",
    price: 19.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ad325d3a-6da0-4562-8238-9c97d528f4ce.png",
    badge: "Especialidad",
    available: true
  },
  {
    id: "entradas-carpaccio-de-lomito",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Carpaccio De Lomito",
    description: "Finas lonjas de lomito crudo acompañadas con rúcula fresca, lascas de queso parmesano, alcaparras y reducción balsámica.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/a2282473-a22d-41b8-901b-c5cfb87bcc0d.jpeg",
    badge: "Gourmet",
    available: true
  },
  {
    id: "entradas-camarones-al-ajillo",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Camarones al ajillo",
    description: "Camarones salteados con casabe tostado, pimienta negra, ajo confitado, perejil fresco, mantequilla y aceite de oliva virgen.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/20b9a274-ad7f-4a8e-bff1-541319b2edf7.png",
    available: true
  },
  {
    id: "entradas-julianne-chicken-soup",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Julianne chicken soup",
    description: "200g de pollo desmechado, zanahoria, céleri, calabacín, cilantro, pimentón y cebollín en reconfortante caldo casero.",
    price: 8.95,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "entradas-tartar-de-salmon",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Tartar de salmón",
    description: "Salmón picado a cuchillo, aguacate, cebollín, sésamo, queso crema, salsa de ostras, cebolla morada, aceite de oliva y casabe crujiente.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5a2309b8-827e-4e35-bb52-1f8a54c74686.png",
    badge: "Top Entradas",
    available: true
  },
  {
    id: "entradas-dedos-de-mozarella",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Dedos de mozarella",
    description: "Cremosos bastones de queso empanizados y dorados, servidos con salsa de tomate relish artesanal.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/bd4f4d33-ebc7-47cf-b645-4bb8f7a128bf.png",
    available: true
  },
  {
    id: "entradas-arepitas-con-nata",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Arepitas con nata",
    description: "9 crujientes arepitas fritas servidas con nata larense fresca para acompañar.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ea8de5ff-73db-4fce-aa05-a23f131acfd2.png",
    badge: "9 Und",
    available: true
  },
  {
    id: "entradas-fish-and-chips",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Fish And Chips + papas fritas",
    description: "Dedos de pescado blanco rebozados, acompañados con aros de cebolla crocantes, papas fritas, salsa tártara y kétchup.",
    price: 17.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c01dda73-d12c-4ba3-b5f1-4aaffd146b6c.png",
    available: true
  },
  {
    id: "entradas-bbq-wings",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "BBQ Wings + papas fritas",
    description: "Crujientes alitas de pollo cubiertas por una rica salsa BBQ con toque ahumado dulce, acompañadas de papas fritas.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b80a55c1-aaec-4219-8202-9a4f16c8df66.JPG",
    available: true
  },
  {
    id: "entradas-bufalo-wings",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Búfalo Wings + papas fritas",
    description: "Crujientes alitas de pollo bañadas en salsa búfalo picante especiada, acompañadas de papas fritas.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/49470be5-8fb1-4fd0-ab38-145820f8970f.JPG",
    badge: "Picante",
    available: true
  },
  {
    id: "entradas-tenders-de-pollo",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Tenders de pollo + papas",
    description: "Crujientes tiras de pechuga empanizadas, servidas con salsa tártara de la casa, kétchup y papas fritas.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/84786ba8-824c-4aae-ba15-66e38ae23bb0.png",
    available: true
  },
  {
    id: "entradas-tequenos",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Ración de Tequeños (9 und)",
    description: "9 tequeños tradicionales de queso blanco semiduro con masa dorada y crujiente.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/4c6de590-2358-4b76-9760-703cc8bdbf30.png",
    badge: "9 Und",
    available: true
  },
  {
    id: "entradas-pasteles-bull",
    categoryId: "entradas",
    categoryName: "Entradas & Compartir",
    name: "Pasteles Bull (6 und)",
    description: "Ración de 6 pasteles surtidos de hojaldre frito (queso, carne y pollo).",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/83be6c3d-7468-468c-9b5e-47f6f0a7564d.jpg",
    badge: "6 Und",
    available: true
  },

  // ==================== LIVIANITOS & BOWLS ====================
  {
    id: "livianitos-lomito-grill-pasta-crema",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Lomito al grill y pasta a la crema",
    description: "Tiernas tiras de lomito al grill acompañadas de pasta larga bañada en suave salsa de crema y parmesano.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/23e55c30-f7ce-4a6b-a1c1-74d37b6b0275.jpeg",
    available: true
  },
  {
    id: "livianitos-pollo-grill-vegetales",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Pollo al grill y vegetales salteados",
    description: "Pechuga de pollo al grill con mix de vegetales de estación salteados al wok con aceite de oliva.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ff69eb9a-631c-4d21-93d8-8f861e55d47e.jpeg",
    badge: "Fit",
    available: true
  },
  {
    id: "livianitos-pollo-toscano",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Pollo Toscano con champiñones y puré",
    description: "Pollo salteado con champiñones en cama de espinacas tiernas, tomates secos y suave puré de papa casero.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/199f9a1d-3c5b-40e2-b31f-fd1072da8b2b.jpeg",
    available: true
  },
  {
    id: "livianitos-chuleta-ahumada",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Chuleta Ahumada con papas rústicas y ensalada",
    description: "Chuleta ahumada sellada al grill servida con crujientes papas rústicas y ensalada fresca.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/8a64eceb-1125-4253-8ac8-572fb78c39ed.jpeg",
    available: true
  },
  {
    id: "livianitos-cotoletta-res-napoles",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Cotoletta de res y pasta Nápoles",
    description: "Milanesa de res empanizada crujiente acompañada de pasta al dente con salsa pomodoro Nápoles.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b3c4c985-fb8b-4783-87c5-36f02611937e.jpeg",
    available: true
  },
  {
    id: "livianitos-cotoletta-pollo-crema",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Cotoletta de Pollo y pasta a la crema",
    description: "Milanesa de pollo dorada servida con pasta con crema de leche y queso parmesano.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/d9e0358c-7284-4478-9625-590609cafdd8.jpeg",
    available: true
  },
  {
    id: "livianitos-strogonoff-lomito",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Strogonoff de lomito y puré de papas",
    description: "Lomito en tiras bañado en cremosa salsa blanca con cebolla blanca, toque de pimienta y champiñones frescos sobre puré de papa suave.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5c770b12-9d07-4b13-9588-bc9560cefa7d.png",
    badge: "Especial",
    available: true
  },
  {
    id: "livianitos-strogonoff-pollo",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Strogonoff de pollo y puré de papas",
    description: "Pollo en tiras bañado en nuestra cremosa salsa blanca con cebolla blanca, pimienta y champiñones sobre puré de papa.",
    price: 12.95,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "livianitos-gordon-bleu",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Cordon Bleu con ensalada césar",
    description: "Suprema de pollo empanizada rellena con bechamel cremosa y trozos de champiñón, servida con crujiente ensalada césar.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/d66d8164-5f23-4e40-a18c-abe121a81eb1.jpeg",
    badge: "Clásico",
    available: true
  },
  {
    id: "livianitos-lasana-bull",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Lasaña Bull",
    description: "Tradicional pasticho venezolano con capas de pasta, carne bologna, bechamel, pan al ajillo y ensalada césar.",
    price: 13.95,
    image: "https://assets.olaclick.app/companies/products/images/800/23176edc-2495-45cb-87a9-fe1ec97453a0.jpeg",
    badge: "Pasticho",
    available: true
  },
  {
    id: "livianitos-tiras-de-cerdo",
    categoryId: "livianitos",
    categoryName: "Livianitos & Bowls",
    name: "Tiras de cerdo en BBQ",
    description: "Panceta de cerdo glaseada en salsa BBQ casera, acompañada de papas rústicas doradas y ensalada de la casa.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/3148631a-05c4-464b-bb8b-f5b37f8429e1.jpeg",
    available: true
  },

  // ==================== PASTAS ITALIANAS ====================
  {
    id: "pastas-4-quesos",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta 4 Quesos",
    description: "Pasta al dente con cremosa combinación de queso mozzarella, parmesano, queso azul y emmental con crema de leche.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/48737484-47c2-4f81-9030-42cbde8c75b3.png",
    badge: "4 Quesos",
    available: true
  },
  {
    id: "pastas-alfredo",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Alfredo",
    description: "Salsa cremosa con queso parmesano, tocineta ahumada, maíz tierno y champiñones salteados.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/2daff98c-a1a7-4b69-9699-b352ef5a0aaa.png",
    available: true
  },
  {
    id: "pastas-carbonara",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Carbonara",
    description: "Tradicional salsa cremosa con tocineta crujiente, pimienta negra recién molida y abundante queso parmesano.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/d9ee00ac-3278-4ce5-8bae-09fae4b81c87.png",
    available: true
  },
  {
    id: "pastas-del-pruno",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta del Pruno",
    description: "200g de suprema de pollo salteado con champiñones, ajoporro dulce, crema de leche y queso parmesano.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/945d7375-3cff-4f45-9bcf-a177b7aa2d4f.png",
    badge: "Chef",
    available: true
  },
  {
    id: "pastas-sinatra",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Sinatra",
    description: "Pasta larga salteada con pollo, tocineta, toques de ajo y salsa a base de hierbas finas y pimienta.",
    price: 16.95,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "pastas-brava",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Brava",
    description: "Pasta con pimentón dulce, cebolla en juliana salteada, toque picante suave, sal, pimienta y queso pecorino.",
    price: 15.95,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "pastas-bologna",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Bologna",
    description: "Tradicional salsa pomodoro a base de carne molida de res de primera, cocinada a fuego lento con hierbas aromáticas.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c08bff54-bd5d-4f2f-a564-fca046250c99.png",
    available: true
  },
  {
    id: "pastas-napolitana",
    categoryId: "pastas",
    categoryName: "Pastas Italianas",
    name: "Pasta Napolitana",
    description: "Clásica salsa de tomates maduros, albahaca fresca, ajo y aceite de oliva virgen extra con parmesano.",
    price: 10.95,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    available: true
  },

  // ==================== ENSALADAS FRESCAS ====================
  {
    id: "ensaladas-mediterranea",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Ensalada Mediterránea",
    description: "Queso ovolín, bocconcini, lechuga crocante, espinaca, aceitunas negras, tomates cherry, aguacate y aderezo de yogurt.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/11c9931f-5c3b-4333-a6e8-9d20d3b3a692.jpeg",
    badge: "Fresca",
    available: true
  },
  {
    id: "ensaladas-salmon",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Ensalada de Salmón",
    description: "Mix de lechugas frescas, medallones de salmón rosado, gajos de naranja natural, tomates cherry, nueces y cebolla caramelizada.",
    price: 19.95,
    image: "https://assets.olaclick.app/companies/products/images/800/529ae456-f5f7-4b38-84bf-8f129872974b.jpeg",
    badge: "Premium",
    available: true
  },
  {
    id: "ensaladas-cesar-clasica",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Ensalada César clásica",
    description: "Lechuga romana fresca, crutones de pan tostado con ajo, queso pecorino laminado, tocineta crocante y aderezo César casero.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/54995c7f-aeca-42d2-a910-5826a4b5da02.png",
    available: true
  },
  {
    id: "ensaladas-cesar-pollo",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Ensalada César Con Pollo",
    description: "Lechuga romana, crutones de pan tostado, queso pecorino, tocineta y aderezo César servido con tiras de pollo al grill.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/8ba12af3-f624-4201-9fc3-2b7d56baecd7.png",
    badge: "Favorita",
    available: true
  },
  {
    id: "ensaladas-duquesa",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Ensalada Duquesa",
    description: "Pollo al grill en cuadritos, lechuga chifonada, melocotón dulce, manzana verde, céleri crujiente, aderezo Waldorf, pecorino y reducción balsámica.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1fc056f9-be11-4ba5-b59b-24910c1e511a.png",
    available: true
  },
  {
    id: "ensaladas-rusttys-lomito",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Rusttys salad lomito",
    description: "Lechuga fresca, salsa holandesa suave, tiras de lomito al término, tocineta, queso pecorino y toques dulces de piña.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/119d230d-98e5-49cf-87b3-3c0df30fd3e9.png",
    available: true
  },
  {
    id: "ensaladas-rusttys-camaron",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Rusttys salad camarón",
    description: "Lechuga fresca, salsa holandesa, camarones al grill, tocineta crocante, queso pecorino y piña asada.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/79177a7f-8e87-49f1-af56-4c776ac91ee5.png",
    available: true
  },
  {
    id: "ensaladas-rusttys-pollo",
    categoryId: "ensaladas",
    categoryName: "Ensaladas Frescas",
    name: "Rusttys salad pollo",
    description: "Cama de lechugas, salsa especial, pechuga de pollo marinada al grill, tocineta crocante, pecorino y piña.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/559fb923-f7be-42a2-9bd8-da7552edee89.png",
    available: true
  },

  // ==================== HAMBURGUESAS GOURMET ====================
  {
    id: "hamburguesas-bull-master",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Bull Master (Burger Master)",
    description: "Pan artesanal de cerveza de la casa, 150g de carne al grill en fusión Four Cheese (cheddar, parmesano, mozzarella, americano), 50g brisket ahumado, 40g baby pork belly y 30g de manjar de chorizo con mix de lechugas, mayo sriracha y mayo churri, coronado con un trozo de pork belly en su jugo.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/cdce3ce5-e90c-4ef5-8893-59b172191779.jpeg",
    badge: "Premio Master 2024",
    available: true
  },
  {
    id: "hamburguesas-bull-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Bull Burger (Ganadora As Burger)",
    description: "Ganadora del As Burger 2024: Pan de la casa, dos carnes de res y cerdo con BBQ, mix de lechuga, tomate, salsa tasty, queso amarillo con emmental y tocineta.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/278ab2af-12b3-424e-8abb-092576d6b1e0.jpeg",
    badge: "Ganadora As Burger",
    available: true
  },
  {
    id: "hamburguesas-clasica-carne",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Clásica de carne",
    description: "Pan de la casa, 100gr de carne de res jugosa, tomate, lechuga, cebolla, kétchup y mayonesa.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5921a278-42d3-4c63-b27b-cdb7b980865b.png",
    available: true
  },
  {
    id: "hamburguesas-crispy-clasica",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Crispy clásica",
    description: "Pechuga de pollo apanada ultra crujiente, vegetales frescos y aderezo especial en pan brioche.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/27b2de39-d5a8-4dfe-b2e2-08386cda2499.jpeg",
    available: true
  },
  {
    id: "hamburguesas-full-cheese",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Full Cheese",
    description: "Pan de la casa, 200gr de carne, queso americano facilista, queso amarillo, queso mozzarella derretido, salsa pepinillo sauce y tocineta.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/99feb86e-1f1e-4715-9758-0376e510774d.JPG",
    badge: "Triple Queso",
    available: true
  },
  {
    id: "hamburguesas-peggy-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Peggy Burger",
    description: "Pan de la casa, 200gr de carne de cerdo sazonada, queso facilista, lechuga chifonada, cebolla caramelizada y salsa BBQ.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/9a615486-798b-4520-ad10-ea910ad5caee.JPG",
    available: true
  },
  {
    id: "hamburguesas-chicken-king",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Chicken king",
    description: "Pan de la casa, 200gr de suprema de pollo tierna, queso fundido, lechuga, tomate, cebolla y crujiente tocineta.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/99f5baf0-1411-4398-a4b9-d4fa522930be.JPG",
    available: true
  },
  {
    id: "hamburguesas-pulled-pork",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Pulled Pork Burger",
    description: "Pan brioche, 150gr de cerdo deshebrado ahumado lentamente, pepinillos dulces, queso facilista, salsa BBQ y tocineta.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/8b94577d-6b2a-448a-a3b5-651569172182.JPG",
    badge: "Ahumada",
    available: true
  },
  {
    id: "hamburguesas-beasty-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Beasty Burger (La Bestia)",
    description: "Pan de la casa, 100g de carne de res, 100g de pollo crispy, 120g de chuleta de cerdo, huevo frito, lechuga, tomate, cebolla morada y tocineta.",
    price: 16.95,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    badge: "Gigante 3 Carnes",
    available: true
  },
  {
    id: "hamburguesas-cesar-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Cesar Burger",
    description: "Pan de la casa con suprema de pollo empanizada dorada, mix de lechugas, abundante tocineta y aderezo césar cremoso.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/f752e052-d9b7-4c7d-b933-481a866a7ea2.jpg",
    available: true
  },
  {
    id: "hamburguesas-llanera-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Llanera Burger",
    description: "Pan de la casa con solomo de res a la plancha, chorizo montserratino, mix de lechuga, guasacaca y queso blanco a la plancha.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/42b04333-fc4d-4f29-a20c-b96c92823921.JPG",
    badge: "Sabor Criollo",
    available: true
  },
  {
    id: "hamburguesas-new-york-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "New York Burger",
    description: "Doble carne de res, queso facilista, huevo frito, cebolla caramelizada, champiñones salteados y salsa ranch.",
    price: 13.95,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "hamburguesas-hamburguesa-doble",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Hamburguesa Doble Carne",
    description: "Doble carne de res a la plancha, doble queso facilista, cebolla, lechuga y salsas clásicas.",
    price: 8.95,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "hamburguesas-k-chicken",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "K-Chicken (Estilo Coreano)",
    description: "Churrasco de pollo crujiente, ensalada coleslaw con pepinillos agridulces, sésamo negro y aderezo coreano picante-dulce.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/edf4fc0e-d6bc-4d33-bea1-645eb2e490ee.JPG",
    badge: "Korean Style",
    available: true
  },
  {
    id: "hamburguesas-street-molly",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Street Molly",
    description: "Mezcla de carne de res con chistorra, queso blanco fundido, ensalada coleslaw, cebolla crispy, huevo, BBQ y guasacaca.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/28cb9023-63c0-4709-a0e3-a3a7a1c480b7.JPG",
    available: true
  },
  {
    id: "hamburguesas-sexy-molly",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Sexy Molly",
    description: "Carne de res con chistorra, queso crema y queso blanco, chuleta confitada, pimentón asado y mayochipotle.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5e65f09e-63f5-4d21-b970-bb3981f3773d.jpeg",
    available: true
  },
  {
    id: "hamburguesas-molly-brava",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Molly Brava",
    description: "Hamburguesa especial de la casa con toque picante brava, queso fundido y cebollas salteadas.",
    price: 8.95,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "hamburguesas-street-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Street Burger",
    description: "Carne de res, cebolla morada, huevo, tomate, lechuga, jamón ahumado, queso amarillo y salsas kétchup, mayonesa y mostaza.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7a3ca9db-7a9d-40bf-8899-5ec358ca4738.png",
    available: true
  },
  {
    id: "hamburguesas-parrillera-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Parrillera Burger",
    description: "Pechuga de pollo, solomo rebanado, chistorra montserratina, queso blanco a la plancha, lechuga y guasacaca artesanal.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/afe2b9a7-f4a0-46c6-83ea-c1c23235af8d.jpeg",
    badge: "Parrillera",
    available: true
  },
  {
    id: "hamburguesas-big-boss-burger",
    categoryId: "hamburguesas",
    categoryName: "Hamburguesas Gourmet",
    name: "Big Boss Burger",
    description: "Doble carne de res, confitado de chuleta, queso facilista, cebolla crispy, lechuga chifonada, mayochipotle y pepinillo sauce.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/82120dc8-6f55-44b0-bf5f-21e9777a292e.jpeg",
    badge: "Big Boss",
    available: true
  },

  // ==================== PANINIS TOSTADOS ====================
  {
    id: "paninis-italiano",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini Italiano",
    description: "Prosciutto italiano, queso Ovoline (mozzarella), tomates confitados y rúgula fresca con salsa pesto y queso en pan tostado prensado.",
    price: 16.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b556d28c-b696-4e79-a59b-f5b721029e92.jpeg",
    badge: "Prosciutto",
    available: true
  },
  {
    id: "paninis-bull",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini Bull",
    description: "Brisket ahumado con queso mozzarella fundido y queso pecorino en crujiente pan panini con salsa mayo churri casera.",
    price: 15.95,
    image: "https://assets.olaclick.app/companies/products/images/800/babc00c3-a724-4801-882e-0f5dc8cb3a4d.jpeg",
    badge: "Brisket",
    available: true
  },
  {
    id: "paninis-de-lomito",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini de Lomito",
    description: "Tiras de lomito tierno con doble queso (pecorino y amarillo), realzado con pimienta y pepinillo sauce en pan panini tostado.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/dfd6bfe2-98fb-4dd3-9189-36c1e8ac1b0a.png",
    available: true
  },
  {
    id: "paninis-argentino",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini Argentino",
    description: "Tres quesos fundidos (pecorino, mozzarella, amarillo) en pan prensado con un toque de salsa pepinillo sauce y facilista.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/95fbace8-ffb2-4a67-bc1e-2a7c26206c47.jpeg",
    available: true
  },
  {
    id: "paninis-chicken",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini Chicken",
    description: "Pan de la casa relleno de suprema de pollo, dedos de mozzarella fundidos, lechuga, salsa relish y cebolla caramelizada.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ee42dc67-ad48-4a77-b045-a48f2b1fa11d.jpg",
    available: true
  },
  {
    id: "paninis-roast-beef",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini Roast Beef",
    description: "Roast beef tierno en pan tostado, papas fritas adentro, mayonesa de alcaparras, cebolla morada, tomates confitados, queso bocconcini, rúgula y pesto.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/48a7d9e6-ad1d-4f74-a60c-288e5e8ed9e4.png",
    badge: "Roast Beef",
    available: true
  },
  {
    id: "paninis-de-atun",
    categoryId: "paninis",
    categoryName: "Paninis Tostados",
    name: "Panini de atún",
    description: "Pan de la casa con atún seleccionado, cebolla morada, lechuga, tomates frescos, maíz, pepinillos, queso cheddar y salsa tártara.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5cfa0e80-9d77-446c-af15-188ccebbeee5.jpg",
    available: true
  },

  // ==================== MENÚ INFANTIL ====================
  {
    id: "infantil-mac-cheese",
    categoryId: "infantil",
    categoryName: "Menú Infantil",
    name: "Mac & Cheese / Nápoles",
    description: "Macarrones tiernos con abundante queso cheddar derretido y crujiente topping de tocineta picadita.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1d7e0336-870b-41b7-9c3e-2dcc2cfddbc1.png",
    badge: "Kids Fav",
    available: true
  },
  {
    id: "infantil-papas-fritas-bacon-cheese",
    categoryId: "infantil",
    categoryName: "Menú Infantil",
    name: "Papas fritas bacon cheese",
    description: "Porción infantil de papas fritas bañadas en salsa de queso cheddar caliente y trocitos de tocineta.",
    price: 6.95,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "infantil-mini-burger",
    categoryId: "infantil",
    categoryName: "Menú Infantil",
    name: "Mini Burger + papas fritas",
    description: "Pan suave, jugosa carne de res 100%, queso cheddar, salsa kétchup, mayonesa, acompañadas de papas fritas doradas.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/6fd21f06-c524-467d-8109-8b2100a9dac6.jpg",
    badge: "Kids Combo",
    available: true
  },
  {
    id: "infantil-tequenos-infantil",
    categoryId: "infantil",
    categoryName: "Menú Infantil",
    name: "Tequeños Infantil",
    description: "Porción infantil de crujientes deditos de queso blanco venezolano.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/18de94b7-e8a8-4ca0-9658-a3d241d63bb5.jpeg",
    available: true
  },

  // ==================== POSTRES & REPOSTERÍA ====================
  {
    id: "postres-choco-master",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Choco Master (Ganador Sweet Master)",
    description: "Exquisito cheesecake triple chocolate con crujientes choco chips cookies sobre suave base de brownie. Cubierto con ganache de chocolate oscuro, ganache de chocolate blanco y brownie. Ganador Sweet Master 2024.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/60201a6a-9806-42fa-8b37-6843ea2c59bf.jpg",
    badge: "Sweet Master 2024",
    available: true
  },
  {
    id: "postres-cheesecake-de-cinnamon",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake de Cinnamon",
    description: "Tarta de queso horneada con infusión de canela y base especiada estilo cinnamon roll.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7229ac03-02e3-40d7-b72b-dbe289f9fbca.jpg",
    available: true
  },
  {
    id: "postres-golden-queen",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Golden Queen",
    description: "Triple cheesecake de vainilla, chocolate y caramelo con toffee de maní, cubierto de chocolate con topping de caramelo y praliné.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/b23475db-2654-4c9f-992d-90d96ae62eba.jpeg",
    badge: "Top Seller",
    available: true
  },
  {
    id: "postres-cheesecake-new-york-fresa",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake New York Fresa",
    description: "Clásica tarta de queso neoyorquina horneada con mermelada artesanal de fresa natural.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c80fbec2-1456-4756-b969-eeffd3653420.jpg",
    available: true
  },
  {
    id: "postres-cheesecake-chocoavellana",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake New York Chocoavellana",
    description: "Tarta de queso cremosa coronada con abundante crema de chocoavellana y avellanas troceadas.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/347fbdd6-2191-4f85-8c17-38a3c8be4a33.jpg",
    available: true
  },
  {
    id: "postres-cheesecake-oreo",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake New York de Oreo",
    description: "Tarta de queso mezclada con galletas oreo, topping de chocolate y galletas trituradas.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ad9946ff-87ff-4b2d-ac27-2aabd625d71c.jpg",
    available: true
  },
  {
    id: "postres-cheesecake-sugar-free-arandanos",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake sugar free arándanos",
    description: "Cheesecake ligero sin azúcar añadido con coulis fresco de arándanos silvestres.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/06174fa8-08a8-4478-b54b-83ea1b4128c1.jpeg",
    badge: "Sugar Free",
    available: true
  },
  {
    id: "postres-cheesecake-fresa-sugar-free",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cheesecake de fresa sugar free",
    description: "Tradicional cheesecake de fresas sin azúcar con todo el sabor cremoso gourmet.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/8e2a44ee-7a9d-4ff6-a950-32436b08179b.jpeg",
    badge: "Sugar Free",
    available: true
  },
  {
    id: "postres-torta-de-matilda",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Torta de Matilda",
    description: "La legendaria torta de chocolate con triple capa húmeda de fudge y chocolate oscuro.",
    price: 3.95,
    image: "https://assets.olaclick.app/companies/products/images/800/011649db-fc98-43f8-b94e-854f86ca6832.jpg",
    badge: "Favorito",
    available: true
  },
  {
    id: "postres-torta-de-zanahoria",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Torta de zanahoria",
    description: "Bizcocho especiado de zanahoria y nueces con frosting de queso crema aterciopelado.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/88679d1d-360d-471d-a3ff-9b5970ebb602.jpg",
    available: true
  },
  {
    id: "postres-red-velvet",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Red Velvet",
    description: "Pastel terciopelo rojo con suave toque de cacao y relleno de crema de queso dulce.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c9bd9a81-ee7d-4550-a740-920842ac66ba.jpg",
    available: true
  },
  {
    id: "postres-rosca-de-vainilla",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Rosca de Vainilla",
    description: "Rosca esponjosa horneada con aromas de vainilla natural y glaseado.",
    price: 12.99,
    image: "https://assets.olaclick.app/companies/products/images/800/4a3b8b79-ad61-4e49-851a-6b4fde41c660.jpg",
    available: true
  },
  {
    id: "postres-pie-de-limon",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Pie de limón",
    description: "Masa quebrada rellena de crema de limón cítrica y merengue tostado al soplete.",
    price: 4.50,
    image: "https://assets.olaclick.app/companies/products/images/800/3e32afb1-f0ff-445d-b897-16a0640d3b8a.jpg",
    available: true
  },
  {
    id: "postres-tres-leches",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tres leches",
    description: "Bizcochuelo bañado en salsa de tres leches decorado con canela y crema batida.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/58fc5d75-ccbe-4496-9c98-1da330268a05.jpg",
    available: true
  },
  {
    id: "postres-milhojas",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Milhojas",
    description: "Milhojas de crujiente masa de hojaldre con crema pastelera suave y topping de arequipe.",
    price: 3.90,
    image: "https://assets.olaclick.app/companies/products/images/800/c2b576b8-c85e-4337-9807-ff31e0e76049.jpeg",
    available: true
  },
  {
    id: "postres-tarta-de-manzana",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tarta de manzana",
    description: "Tarta clásica con láminas de manzana caramelizada, canela y masa crocante.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/df71d3e4-9ee6-437d-aaf2-72945ccd76ce.jpg",
    available: true
  },
  {
    id: "postres-galletas-new-york-topping",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Galletas New York topping variado",
    description: "Galletas estilo Levain Bakery NY con pistacho, pirulín, oreo y samba.",
    price: 8.95,
    image: "https://assets.olaclick.app/companies/products/images/800/4510def2-47ab-40df-9bad-1342d95e72a1.jpg",
    badge: "NY Cookies",
    available: true
  },
  {
    id: "postres-brookie-chocoavellana",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Brookie de Chocoavellana",
    description: "La fusión perfecta de brownie fudge y cookie rellena de crema de avellanas.",
    price: 3.95,
    image: "https://assets.olaclick.app/companies/products/images/800/132bc620-3cfd-41ce-a6a5-f808e7424c79.jpg",
    available: true
  },
  {
    id: "postres-brownie",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Brownie",
    description: "Cuadro de brownie húmedo y chocolatoso con costra brillante.",
    price: 2.50,
    image: "https://assets.olaclick.app/companies/products/images/800/66f31cd3-7943-4f5b-b6fd-67c4cb9080b5.jpg",
    available: true
  },
  {
    id: "postres-brownie-con-helado",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Brownie con helado",
    description: "Brownie tibio recién horneado servido con bola de helado de mantecado y sirope de chocolate.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/6d716ee2-5c2e-4c70-baf3-f38bfbae72fe.jpg",
    badge: "Delicia",
    available: true
  },
  {
    id: "postres-cake-pop",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Cake pop",
    description: "Chupeta de bizcocho de chocolate rellena de fudge con cobertura de chocolate crujiente.",
    price: 1.50,
    image: "https://assets.olaclick.app/companies/products/images/800/f8a698f0-7c42-48d2-90d7-06e3869f0eb1.jpg",
    available: true
  },
  {
    id: "postres-galletas-variadas-kg",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Galletas variadas por KG",
    description: "Surtido especial por kilogramo: mini alfajores, red velvet, choco chips, M&M y coquitos.",
    price: 24.00,
    image: "https://assets.olaclick.app/companies/products/images/800/72f1ac6c-034b-4176-832e-6a50e5973cf6.jpg",
    badge: "Por KG",
    available: true
  },
  {
    id: "postres-alfajores",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Alfajores (3 und)",
    description: "3 suaves y cremosos alfajores de maicena rellenos de dulce de leche con coco rallado.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/257553a0-a21d-44e2-8927-924e30872a2c.jpg",
    badge: "3 Und",
    available: true
  },
  {
    id: "postres-tejas-de-almendras-kg",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tejas de Almendras por KG",
    description: "Finas y crujientes tejas artesanales de almendras tostadas por kilo.",
    price: 60.00,
    image: "https://assets.olaclick.app/companies/products/images/800/cb650a73-aac3-43e1-91fa-07b61fd200e3.jpg",
    badge: "Gourmet KG",
    available: true
  },
  {
    id: "postres-palmeritas-kg",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Palmeritas por KG",
    description: "Palmeritas de hojaldre caramelizado ultra crujientes por kilo.",
    price: 22.00,
    image: "https://assets.olaclick.app/companies/products/images/800/8cf00bcc-ea24-4522-a838-fda5ae10eac2.jpg",
    badge: "Por KG",
    available: true
  },
  {
    id: "postres-tulipan-de-arandanos",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tulipán de arándanos",
    description: "Muffin estilo tulipán con arándanos enteros y masa tierna y perfumada.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/08d31914-72f4-4842-a329-3a684eafecfe.jpg",
    available: true
  },
  {
    id: "postres-tulipan-de-naranja",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tulipán de naranja",
    description: "Muffin de naranja natural con semillas de amapola.",
    price: 3.25,
    image: "https://assets.olaclick.app/companies/products/images/800/e1bbff82-b188-4815-810c-d41412f6688c.jpg",
    available: true
  },
  {
    id: "postres-tulipan-de-chocolate",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Tulipán de chocolate",
    description: "Muffin tulipán de chocolate intenso con chispas de chocolate oscuro.",
    price: 3.25,
    image: "https://assets.olaclick.app/companies/products/images/800/b8a9ade8-e17f-4e93-8861-a04b72f5711c.jpg",
    available: true
  },
  {
    id: "postres-muffin-saludable-manzana",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Muffin saludable de manzana",
    description: "Muffin horneado con manzana fresca y avena sin azúcares refinados.",
    price: 3.95,
    image: "https://assets.olaclick.app/companies/products/images/800/3b7b120d-25bc-464e-adea-ca011ca0addc.jpg",
    badge: "Healthy",
    available: true
  },
  {
    id: "postres-muffin-chocolate-vegano",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Muffin de chocolate vegano",
    description: "Muffin de cacao puro 100% de origen vegetal sin lácteos.",
    price: 3.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c45043a8-4d36-4a09-af22-b819c3e51e8c.jpg",
    badge: "Vegano",
    available: true
  },
  {
    id: "postres-ponque-tradicional",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Ponqué tradicional rectangular",
    description: "Ponqué húmedo artesanal rectangular. Disponible en sabores chocolate, vainilla o limón.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/ad7b8305-63c7-410b-bf5a-32ef43af6269.jpg",
    available: true
  },
  {
    id: "postres-ponque-vegano",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Ponqué de chocolate vegano",
    description: "Ponqué rectangular húmedo de chocolate oscuro de origen vegetal.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/3458b2a3-7570-43e0-9f5f-8a73d36c1f33.jpg",
    badge: "Vegano",
    available: true
  },
  {
    id: "postres-fresas-con-crema",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Fresas con crema y leche condensada",
    description: "Fresas frescas seleccionadas con crema batida chantilly y un toque de leche condensada.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/08e7b823-86ae-46a6-8a62-77e4af746f7d.png",
    available: true
  },
  {
    id: "postres-helado",
    categoryId: "postres",
    categoryName: "Postres & Repostería",
    name: "Helado artesanal",
    description: "Copa de helado cremoso de primera calidad en tus sabores favoritos.",
    price: 4.50,
    image: "https://assets.olaclick.app/companies/products/images/800/c63dd909-cc36-4197-b828-5164c295a011.jpg",
    available: true
  },

  // ==================== PANADERÍA DULCE ====================
  {
    id: "panaderia-roll-new-york-chocolate",
    categoryId: "panaderia",
    categoryName: "Panadería Dulce",
    name: "Roll New York Chocolate",
    description: "Roll de Croissant hojaldrado estilo New York roll relleno de cremosa crema de avellanas.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/f63ca3fc-fa2c-4217-b0ef-99a71e3daa47.jpg",
    badge: "NY Roll",
    available: true
  },
  {
    id: "panaderia-pastel-de-hojaldre",
    categoryId: "panaderia",
    categoryName: "Panadería Dulce",
    name: "Pastel de hojaldre",
    description: "Pastel horneado de hojaldre crujiente recién salido del horno.",
    price: 3.50,
    image: "https://assets.olaclick.app/companies/products/images/800/d06d5825-3b4b-4a49-bb74-3a42ae0f385a.jpg",
    available: true
  },
  {
    id: "panaderia-cachito",
    categoryId: "panaderia",
    categoryName: "Panadería Dulce",
    name: "Cachito de jamón",
    description: "El tradicional cachito venezolano con masa suave de mantequilla y abundante jamón.",
    price: 3.99,
    image: "https://assets.olaclick.app/companies/products/images/800/61e4e903-7de1-47f1-9817-f2151b25bd05.jpg",
    badge: "Tradicional",
    available: true
  },
  {
    id: "panaderia-pan-queso-tocineta",
    categoryId: "panaderia",
    categoryName: "Panadería Dulce",
    name: "Pan relleno de queso y tocineta",
    description: "Pan de masa tierna relleno con queso fundido y trocitos de tocineta ahumada.",
    price: 5.99,
    image: "https://assets.olaclick.app/companies/products/images/800/c0516b06-b651-4601-877d-ffef62ec6b94.jpeg",
    available: true
  },
  {
    id: "panaderia-pan-de-queso-rellenos",
    categoryId: "panaderia",
    categoryName: "Panadería Dulce",
    name: "Pan de queso rellenos",
    description: "Pan de queso artesanal horneado relleno.",
    price: 5.99,
    image: "https://assets.olaclick.app/companies/products/images/800/874bd20e-f0fe-46e7-b737-9fb3b2ed10da.jpeg",
    available: true
  },

  // ==================== CAFÉ DE ESPECIALIDAD ====================
  {
    id: "cafes-espresso",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Espresso",
    description: "Extracción pura de café en grano de especialidad con crema dorada y notas intensas.",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    badge: "Clásico",
    available: true
  },
  {
    id: "cafes-americano",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Americano",
    description: "Shot de café espresso servido con agua caliente a la temperatura perfecta.",
    price: 2.51,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-capuccino-grande",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Capuccino grande",
    description: "Espresso doble con leche texturizada y abundante espuma cremosa.",
    price: 3.50,
    image: "https://assets.olaclick.app/companies/products/images/800/5116de47-ab2f-490d-bd67-d23a1e9fd59b.jpg",
    badge: "Favorito",
    available: true
  },
  {
    id: "cafes-latte",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Café Latte",
    description: "Café espresso suave con abundante leche vaporizada y sutil capa de microespuma.",
    price: 3.50,
    image: "https://assets.olaclick.app/companies/products/images/800/be8e5f89-1803-4274-8cf8-7d9848cf8e0d.jpg",
    available: true
  },
  {
    id: "cafes-mocaccino",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Mocaccino",
    description: "Espresso de especialidad combinado con cacao venezolano, leche y sirope de chocolate oscuro.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-macchiato",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Macchiato",
    description: "Espresso 'manchado' con un toque de espuma de leche caliente.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-caramel-macchiato",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "CARAMEL MACCHIATO",
    description: "Espresso de especialidad con arequipe dulce, leche vaporizada y espuma marcada con caramelo.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",
    badge: "Caramelo",
    available: true
  },
  {
    id: "cafes-espresso-bombom",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Espresso Bombón",
    description: "Capas de espresso, leche condensada, toque de canela y leche cremosa.",
    price: 3.50,
    image: "https://assets.olaclick.app/companies/products/images/800/6cad8004-3471-422d-bd31-de2a57fa1a78.jpg",
    available: true
  },
  {
    id: "cafes-frappuccino",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Frappuccino",
    description: "Café batido con hielo frappé, leche y topping de crema chantilly.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    badge: "Frío",
    available: true
  },
  {
    id: "cafes-baileys-cream-coffee",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Baileys Cream Coffee",
    description: "Café espresso caliente con un toque de licor de crema irlandesa Baileys y crema.",
    price: 7.95,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    badge: "Con Licor",
    available: true
  },
  {
    id: "cafes-cafe-frio-minnesota",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "CAFÉ FRÍO MINNESOTA",
    description: "Café frío con hielo, notas especiadas y crema batida.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-espresso-carajillo",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Espresso Carajillo",
    description: "Espresso con toque de ron venezolano premium, leche y cáscara de naranja flambeada.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/feaa9c74-2ecd-47f8-a81e-e1a52d6be120.jpg",
    available: true
  },
  {
    id: "cafes-affogato-manhattan",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Affogato Manhattan",
    description: "Shot de espresso vertido sobre helado de vainilla, sirope de chocolate oscuro, galletas oreo y maní.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=800&q=80",
    badge: "Affogato",
    available: true
  },
  {
    id: "cafes-affogato-california",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Affogato California",
    description: "Espresso sobre helado de chocolate con sirope de naranja, leche condensada y un toque de amaretto.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-affogato-new-york",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Affogato New York",
    description: "Espresso sobre helado de vainilla con sirope de chocolate, sirope de fresa y lluvia de maní tostado.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-cafe-chocobombom",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Café Chocobombón",
    description: "Cremosa combinación de chocolate, espresso, leche condensada y espuma.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-cafe-dakota",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Café Dakota",
    description: "Receta exclusiva de café aromatizado con canela, vainilla y crema batida.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-cafe-choco-ron",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Café Choco Ron",
    description: "Espresso con notas de cacao, reducción de ron y leche montada.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-cafe-ferrero-king",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Café Ferrero King",
    description: "Espectacular café con crema de avellanas, bombón Ferrero Rocher, espresso y chantilly.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c5c5db7f-1488-4edc-99f9-5479e9d3df8d.png",
    badge: "Ferrero",
    available: true
  },
  {
    id: "cafes-toddy-caliente",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Toddy caliente",
    description: "El tradicional Toddy venezolano caliente, espeso y chocolatoso.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "cafes-chocolate-caliente",
    categoryId: "cafes",
    categoryName: "Café de Especialidad",
    name: "Chocolate caliente",
    description: "Cremoso chocolate oscuro caliente preparado con leche entera.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    available: true
  },

  // ==================== TÉ & INFUSIONES ====================
  {
    id: "te-cranberry-orange",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Cranberry Orange",
    description: "Refrescante infusión de arándanos rojos y naranja dulce con notas cítricas.",
    price: 3.95,
    image: "https://assets.olaclick.app/companies/products/images/800/c16aa084-eeb9-4ae3-b798-12658e4fbd03.jpeg",
    available: true
  },
  {
    id: "te-ginger-chai",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Ginger Chai",
    description: "(Té de hebras) Infusión: Té negro, jengibre, malojillo, raíz de regaliz, pimienta negra y menta fresca.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    badge: "Hebras",
    available: true
  },
  {
    id: "te-matcha-ceremonial",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Matcha ceremonial",
    description: "Té verde matcha ceremonial tradicional japonés batido al momento.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/cc680795-02ee-430e-b4e8-cdb176b7793e.jpeg",
    badge: "Ceremonial",
    available: true
  },
  {
    id: "te-spiced-chai-mix",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Spiced Chai mix",
    description: "Leche, té negro, jengibre, cardamomo, canela aromática, anís estrellado y clavito de olor.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/af167954-3081-4550-8d27-484ea6a00151.jpeg",
    available: true
  },
  {
    id: "te-taro-mix",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Taro mix",
    description: "Bebida cremosa a base de leche y polvo de taro natural con su característico tono lila.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/0d0b40ab-49c1-44d7-bf9c-eb0a58b10186.jpeg",
    available: true
  },
  {
    id: "te-matcha-limon-miel-bubble",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Matcha mix limón/miel bubble",
    description: "Matcha refrescante con toques cítricos de limón, miel y perlas 'bubble'.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/223f31d8-e798-4d68-a91b-17511853a981.jpeg",
    badge: "Bubble Tea",
    available: true
  },
  {
    id: "te-mango-mix",
    categoryId: "te",
    categoryName: "Té & Infusiones",
    name: "Mango mix",
    description: "Té refrescante con sabor a mango tropical y perlas de tapioca.",
    price: 6.95,
    image: "https://assets.olaclick.app/companies/products/images/800/91b90c7f-30b7-48ed-baf3-9f7afd638ca8.jpeg",
    available: true
  },

  // ==================== BATIDOS & MERENGADAS ====================
  {
    id: "batidos-batido-natural",
    categoryId: "batidos",
    categoryName: "Batidos & Merengadas",
    name: "Batido natural",
    description: "Bebida refrescante a base de agua y pulpa de fruta natural recién procesada.",
    price: 4.95,
    image: "https://assets.olaclick.app/companies/products/images/800/130f3916-4c56-4288-8a96-6086700bb56e.jpg",
    available: true
  },
  {
    id: "batidos-bullshake",
    categoryId: "batidos",
    categoryName: "Batidos & Merengadas",
    name: "Bullshake",
    description: "Exclusiva merengada espesa a base de helado cremoso con tu sabor favorito, crema y toppings.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/071494a2-0c31-4d56-b3e3-298f65b26022.jpg",
    badge: "Bullshake",
    available: true
  },
  {
    id: "batidos-merengadas",
    categoryId: "batidos",
    categoryName: "Batidos & Merengadas",
    name: "Merengadas tradicionales",
    description: "Batido clásico cremoso a base de leche y fruta o helado.",
    price: 5.95,
    image: "https://assets.olaclick.app/companies/products/images/800/9b412afd-ab34-4674-b18e-799746750ac3.jpg",
    available: true
  },

  // ==================== JUGOS & AGUAS ====================
  {
    id: "jugos-lipton-500ml",
    categoryId: "jugos",
    categoryName: "Jugos & Aguas",
    name: "Té Lipton 500ml",
    description: "Botella de té frío Lipton sabor durazno o limón de 500ml bien fría.",
    price: 2.14,
    image: "https://assets.olaclick.app/companies/products/images/800/0710936b-10e5-447b-a090-74e2ad7c5fcd.jpg",
    available: true
  },
  {
    id: "jugos-yukery-15l",
    categoryId: "jugos",
    categoryName: "Jugos & Aguas",
    name: "Jugo Yukery 1.5L",
    description: "Jugo de frutas Yukery presentación familiar de 1.5 litros.",
    price: 3.88,
    image: "https://assets.olaclick.app/companies/products/images/800/c4aba03f-7abf-4aa0-8292-bc4134bf1614.jpg",
    badge: "1.5 Litros",
    available: true
  },
  {
    id: "jugos-agua",
    categoryId: "jugos",
    categoryName: "Jugos & Aguas",
    name: "Agua Mineral",
    description: "Botella de agua mineral purificada bien fría.",
    price: 1.40,
    image: "https://assets.olaclick.app/companies/products/images/800/eb831a01-153c-4423-8dbd-782fc105483b.jpg",
    available: true
  },

  // ==================== REFRESCOS & GASEOSAS ====================
  {
    id: "refrescos-pepsi",
    categoryId: "refrescos",
    categoryName: "Refrescos",
    name: "Pepsi Cola",
    description: "Refresco Pepsi frío servido con hielo o en lata.",
    price: 1.20,
    image: "https://assets.olaclick.app/companies/products/images/800/28e3a596-a68a-4f74-9f67-2baf8e91f9d8.jpg",
    available: true
  },
  {
    id: "refrescos-coca-cola",
    categoryId: "refrescos",
    categoryName: "Refrescos",
    name: "Coca-Cola",
    description: "Refresco Coca-Cola original bien frío.",
    price: 1.12,
    image: "https://assets.olaclick.app/companies/products/images/800/7cc20659-0f3e-400a-8e6d-285345f6a0a9.jpeg",
    available: true
  },
  {
    id: "refrescos-chinotto",
    categoryId: "refrescos",
    categoryName: "Refrescos",
    name: "Chinotto",
    description: "Refrescante gaseosa lima-limón Chinotto bien fría.",
    price: 1.07,
    image: "https://assets.olaclick.app/companies/products/images/800/e44d1915-9251-466c-80cd-a91d43ff5845.jpg",
    available: true
  },
  {
    id: "refrescos-golden",
    categoryId: "refrescos",
    categoryName: "Refrescos",
    name: "Golden Kolita",
    description: "Tradicional refresco Golden sabor kolita o naranja.",
    price: 1.54,
    image: "https://assets.olaclick.app/companies/products/images/800/2ac2eb2d-5952-4ed4-a799-1b87b78fe90a.png",
    available: true
  },
  {
    id: "refrescos-7up",
    categoryId: "refrescos",
    categoryName: "Refrescos",
    name: "7UP",
    description: "Refresco 7UP lima limón burbujeante y frío.",
    price: 1.54,
    image: "https://assets.olaclick.app/companies/products/images/800/d7d89c05-15a0-4d8f-acc7-fb07edecb79d.jpg",
    available: true
  }
];
