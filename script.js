/* ==========================================================================
   RESTAURANT EL PALADAR — SABOR CASERO
   Vanilla JavaScript (Hero Banner Slider, Menu Tabs, Live Search & UI)
   ========================================================================== */

const MENU_ITEMS = [
  // ================= DESAYUNOS =================
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Huevos al gusto',
    desc: 'Preparados con jamón, chorizo, salchicha, estrellados o tocino.',
    price: '$60.00',
    image: '_assets/media/a6d872ca5c92e8a8cd1e7d82b153b5ed.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Omelette',
    desc: 'Relleno de queso manchego y jamón, o manchego y champiñones.',
    price: '$60.00',
    image: '_assets/media/079c139817610cb3c307ee8af15aa127.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Huevos motuleños',
    desc: 'Receta tradicional con plátano macho, jamón, chícharos y salsa casera.',
    price: '$75.00',
    image: '_assets/media/34bf99e167a3538d07c68731f0028f33.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Huevos rancheros',
    desc: 'Bañados en nuestra salsa ranchera casera sobre tortilla recién hecha.',
    price: '$63.00',
    image: '_assets/media/efb7c9820b2c404c36ada130413c3061.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Huevos divorciados',
    desc: 'Servidos con salsa roja y salsa verde, acompañados de frijoles.',
    price: '$63.00',
    image: '_assets/media/bee34a216da7d9690a0d29a845e09cc5.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Hot cakes',
    desc: 'Esponjosos y doraditos, servidos calientes al momento.',
    price: '$65.00',
    image: '_assets/media/37d0139942d38b4cb71432f48f69ef49.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Cóctel de fruta',
    desc: 'Combinación fresca de frutas de temporada.',
    price: '$57.00',
    image: '_assets/media/7ffe6d165270fb2e5f6c9c64e4b93e42.png'
  },
  {
    category: 'desayunos',
    categoryLabel: 'Desayunos',
    title: 'Plato de fruta',
    desc: 'Porción fresca a elegir: Melón o Papaya.',
    price: '$37.00',
    image: '_assets/media/5b43ebb6b61bfd2020ced3973771131b.png'
  },

  // ================= COMAL =================
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Picaditas',
    desc: 'Tradicionales de maíz recién salidas del comal con salsa, cebolla y queso.',
    price: '$15.00',
    image: '_assets/media/7430e063b4561a67263839516e50d1dd.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Picaditas preparadas',
    desc: 'Con ingrediente a elegir: bistec o pollo.',
    price: '$22.00',
    image: '_assets/media/7dab4e1af2881ad62c29ecaeb2abd7b3.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Picada 4 estaciones',
    desc: 'Con jamón, queso de hebra, aguacate, crema y bistec.',
    price: '$75.00',
    image: '_assets/media/5e49f8d9a82e7cc30dff70b915bea1fb.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Quesadilla',
    desc: 'Tortilla recién hecha al comal con queso fundido.',
    price: '$22.00',
    image: '_assets/media/4be50e715e340bf595edbc776ddd0677.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Tacos',
    desc: 'A elegir: bistec, champiñones o flor de calabaza.',
    price: '$22.00',
    image: '_assets/media/dd2e6fc31348b69feb56237d7d45bd54.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Empanadas',
    desc: 'Rellenas de pollo, picadillo, queso, champiñones o choriqueso.',
    price: '$22.00',
    image: '_assets/media/b61f4d5266881bac3f5199886c5f363f.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Huarache tradicional',
    desc: 'Preparado con queso, flor de calabaza y tlalitos.',
    price: '$48.00',
    image: '_assets/media/5da04eba2a3d7cdf8d560a81f3c51eba.png'
  },
  {
    category: 'comal',
    categoryLabel: 'Comal',
    title: 'Huaraches preparados',
    desc: 'Con queso y a elegir: bistec o champiñones.',
    price: '$62.00',
    image: '_assets/media/c095c136209e93dec097d0cb32c0da5b.png'
  },

  // ================= ESPECIALES =================
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Ensalada de pollo',
    desc: 'Con arándano, manzana, aderezo y queso de hebra.',
    price: '$110.00',
    image: '_assets/media/a85a7165b3d818bc77e712dced203905.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Ensalada de atún',
    desc: 'Pepino, jitomate, aguacate, aderezo, cebolla y queso.',
    price: '$110.00',
    image: '_assets/media/e5ab70d939c958165259646a7dd38210.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Queso fundido natural',
    desc: 'Servido caliente y gratinado al momento.',
    price: '$75.00',
    image: '_assets/media/fed8ff5dc8a3771cb487806a10a4ff63.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Queso fundido especial',
    desc: 'Combinado a elegir con chorizo o champiñones.',
    price: '$90.00',
    image: '_assets/media/b87caf223d3eb81d5029c160387d2098.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Orden de papas a la francesa',
    desc: 'Crujientes y recién hechas.',
    price: '$65.00',
    image: '_assets/media/4a86c1f1394f878b22a21c9be70b114c.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Orden de papas gratinadas',
    desc: 'Papas a la francesa bañadas con queso gratinado.',
    price: '$95.00',
    image: '_assets/media/36fcc51507c56932dd6ce4eacdd15eed.png'
  },
  {
    category: 'especiales',
    categoryLabel: 'Especiales',
    title: 'Guacamole',
    desc: 'Fresco y preparado al momento.',
    price: '$32.00',
    image: '_assets/media/101d6645811f564c6f652ab004bfc46e.png'
  },

  // ================= ANTOJITOS =================
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Enfrijoladas',
    desc: 'Bañadas en salsa cremosa de frijol con crema y queso.',
    price: 'Desde $50.00',
    variants: [
      { name: 'Sencillas', price: '$50.00' },
      { name: 'Con pollo, huevo o jamón', price: '$63.00' }
    ],
    image: '_assets/media/e0087a3de1280aa0a23abd6590745d7b.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Chilaquiles',
    desc: 'Totopos crujientes bañados en salsa casera con crema, queso y cebolla.',
    price: 'Desde $68.00',
    variants: [
      { name: 'Sencillos', price: '$68.00' },
      { name: 'Con pollo, bistec o huevo', price: '$85.00' }
    ],
    image: '_assets/media/2b97dc6dea50578d298b0a0914bbb7d7.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Enchiladas',
    desc: 'Tradicionales o gratinadas con queso.',
    price: 'Desde $75.00',
    variants: [
      { name: 'Rojas o verdes', price: '$75.00' },
      { name: 'Suizas', price: '$90.00' }
    ],
    image: '_assets/media/aa87b4174add8342c586c6ae6003b5e1.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Enmoladas',
    desc: 'Rellenas de pollo o queso y bañadas en mole tradicional.',
    price: '$75.00',
    image: '_assets/media/d3afd2d38cf033f8211d45afb52b50bf.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Flautas de pollo o queso',
    desc: 'Doraditas con lechuga, crema, queso y salsa.',
    price: '$83.00',
    image: '_assets/media/af3b41129d395e53d253a9a56b895907.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Tostadas',
    desc: 'Crujientes con frijoles, lechuga, crema y queso.',
    price: 'Desde $22.00',
    variants: [
      { name: 'Sencillas', price: '$22.00' },
      { name: 'Con jamón o pollo', price: '$33.00' }
    ],
    image: '_assets/media/072b6f754e9e1d4ed10e0319818ab963.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Sándwich',
    desc: 'Preparado con vegetales frescos.',
    price: 'Desde $45.00',
    variants: [
      { name: 'Pollo, jamón o queso', price: '$45.00' },
      { name: 'Pechuga a la plancha', price: '$50.00' }
    ],
    image: '_assets/media/0f7a33496e8c93f47c886a00a899836d.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Club sándwich',
    desc: 'Acompañado de papas a la francesa.',
    price: 'Desde $85.00',
    variants: [
      { name: 'Con papas a la francesa', price: '$85.00' },
      { name: 'Gratinado', price: '$120.00' }
    ],
    image: '_assets/media/16de063f1b08b8f32e97bc3c3b04c312.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Hamburguesas',
    desc: 'Preparadas al momento con ingredientes frescos.',
    price: 'Desde $88.00',
    variants: [
      { name: 'Sencilla', price: '$88.00' },
      { name: 'Hawaiana', price: '$105.00' },
      { name: 'Especial', price: '$125.00' }
    ],
    image: '_assets/media/15b3cd54d0b2e3e3d07b4f117f552085.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Tortas',
    desc: 'Pan calientito con frijoles, aguacate y vegetales.',
    price: 'Desde $45.00',
    variants: [
      { name: 'Pollo, queso o jamón', price: '$45.00' },
      { name: 'Milanesa de pollo', price: '$53.00' },
      { name: 'Milanesa de res', price: '$56.00' }
    ],
    image: '_assets/media/61408b54dfee50e02cdbc481467c6051.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Molletes',
    desc: 'Con frijoles refritos y queso gratinado.',
    price: 'Desde $66.00',
    variants: [
      { name: 'Sencillos', price: '$66.00' },
      { name: 'Con tocino o chorizo', price: '$85.00' }
    ],
    image: '_assets/media/f2a64cac798d9af5f38072a0f2e35d39.png'
  },
  {
    category: 'antojitos',
    categoryLabel: 'Antojitos',
    title: 'Pepito con papas a la francesa',
    desc: 'Crujiente y acompañado de papas a la francesa.',
    price: '$33.00',
    image: '_assets/media/fcb44bd75bce39ffa86ec84f78470cce.png'
  },

  // ================= CALDOS =================
  {
    category: 'caldos',
    categoryLabel: 'Caldos',
    title: 'Consomé con pechuga desmenuzada',
    desc: 'Caldo de pollo casero servido caliente con pechuga desmenuzada.',
    price: '$55.00',
    image: '_assets/media/98b08f20fe1ca51e8859ab07e196968c.png'
  },
  {
    category: 'caldos',
    categoryLabel: 'Caldos',
    title: 'Consomé con muslo de pollo',
    desc: 'Caldo casero tradicional con pieza de muslo de pollo.',
    price: '$60.00',
    image: '_assets/media/952b07c13b75929919910a595d0122dc.png'
  },
  {
    category: 'caldos',
    categoryLabel: 'Caldos',
    title: 'Sopa del día',
    desc: 'Preparada diariamente con receta casera.',
    price: '$40.00',
    image: '_assets/media/fdba9bc0760ed5d40bd82540318c7e3e.png'
  },
  {
    category: 'caldos',
    categoryLabel: 'Caldos',
    title: 'Orden de arroz',
    desc: 'Porción de arroz casero del día.',
    price: '$40.00',
    image: '_assets/media/712ff4f3b95fc03289d480f92228ff74.png'
  },
  {
    category: 'caldos',
    categoryLabel: 'Caldos',
    title: 'Orden de frijoles refritos',
    desc: 'Sazonados en casa y acompañados con queso y totopos.',
    price: '$95.00',
    image: '_assets/media/b7e53fe92d22b69e8ec9de9585aaa021.png'
  },

  // ================= CARNES =================
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Tampiqueñas',
    desc: 'Nuestro plato estrella completo con guarniciones tradicionales.',
    price: 'Desde $160.00',
    variants: [
      { name: 'De res o pechuga asada', price: '$160.00' },
      { name: 'De milanesa de pollo o res', price: '$170.00' },
      { name: 'De arrachera', price: '$190.00' }
    ],
    note: 'Incluyen: Ensalada, frijoles, enchiladas, plátanos fritos y papas a la francesa.',
    image: '_assets/media/e6f661604b62d51677c6b7925c64a63e.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Guisados con Res',
    desc: 'Preparados al momento con sazón casero.',
    price: '$110.00',
    variants: [
      { name: 'Bistec a la mexicana', price: '$110.00' },
      { name: 'Bistec ranchero', price: '$110.00' },
      { name: 'Bistec encebollado', price: '$110.00' },
      { name: 'Fajitas con chile jalapeño', price: '$110.00' }
    ],
    note: 'Todos incluyen: Frijoles y totopos.',
    image: '_assets/media/fa4896c1b64cd10b39ee6b60ec8c3093.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Bistec de arrachera',
    desc: 'Jugoso corte de arrachera asada.',
    price: '$165.00',
    note: 'Incluye: Guacamole, frijoles y papas a la francesa.',
    image: '_assets/media/eac0e19a6218c40ff81f15541ec1dc7d.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Milanesa de pollo',
    desc: 'Empanizada y dorada al momento.',
    price: '$125.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/882da195185e8c3fb06fca0c182c232b.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Bistec de res a la plancha',
    desc: 'Suave bistec de res asado a la plancha.',
    price: '$120.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/d9b7fa95b31956c6d1f5796b622a9fce.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Carne enchilada',
    desc: 'Adobada tradicionalmente y asada a la plancha.',
    price: '$120.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/aeb4b5f3fd9b72da154a99707e1a6457.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Fajitas de pollo',
    desc: 'Tiras de pechuga de pollo salteadas al momento.',
    price: '$110.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/24da9e5157a1797d85529d61164a4223.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Pechuga a la plancha',
    desc: 'Filete de pechuga de pollo jugoso a la plancha.',
    price: '$110.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/a24885a2dc8e9399a98443e19e36bef5.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Nuggets de pollo',
    desc: 'Ideales para niños y toda la familia.',
    price: '$105.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/98ac412e5bd6c4690ccf5f74c46c3437.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Pechuga gratinada',
    desc: 'Pechuga a la plancha cubierta con queso fundido.',
    price: '$145.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/de727b4e9e0708ca1bdb6d048b3e3fad.png'
  },
  {
    category: 'carnes',
    categoryLabel: 'Carnes',
    title: 'Chuleta ahumada',
    desc: 'Dorada a la plancha con todo el sabor casero.',
    price: '$110.00',
    note: 'Incluye: Ensalada, frijoles y papas a la francesa.',
    image: '_assets/media/467d14238255c2d5dd5602bc9b5ca2c0.png'
  },

  // ================= POSTRES =================
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Gelatina',
    desc: 'Pregunta por los varios sabores disponibles.',
    price: '$30.00',
    image: '_assets/media/44d4192c5fdc26eaeafd333512136759.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Carlota de limón',
    desc: 'Postre cremoso casero de galleta y limón.',
    price: '$28.00',
    image: '_assets/media/460f509252e3b63dab558101ee5d6345.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Waffles sencillos',
    desc: 'Recién hechos y doraditos.',
    price: '$55.00',
    image: '_assets/media/a585077b80dcf227ac41c5eb081b9d35.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Waffles con helado',
    desc: 'Servidos calientes con bola de helado.',
    price: '$70.00',
    image: '_assets/media/597e486c3e8b6e5db477153de0e673a1.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Plátanos fritos',
    desc: 'Con crema y queso o lechera.',
    price: '$50.00',
    image: '_assets/media/938c1bb0812f96ace78c822792e03135.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Helado',
    desc: 'Sabor a elegir: Napolitano o vainilla.',
    price: '$95.00',
    image: '_assets/media/90f6663ca451c41dc78a0efc21c274e1.png'
  },
  {
    category: 'postres',
    categoryLabel: 'Postres',
    title: 'Flan napolitano',
    desc: 'Rebanada de flan casero con caramelo.',
    price: '$32.00',
    image: '_assets/media/37f76c53add6d669912536a19e1e070d.png'
  },

  // ================= BEBIDAS =================
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Café de la casa',
    desc: 'Caliente y aromático de la región.',
    price: '$35.00',
    variants: [
      { name: 'Café americano', price: '$35.00' },
      { name: 'Café con leche', price: '$35.00' }
    ],
    image: '_assets/media/a98ac447ffa52f4c273eaa5edffafa19.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Té caliente',
    desc: 'Manzanilla, hierbabuena, té verde, manzana-canela o limón.',
    price: '$35.00',
    image: '_assets/media/cf4f623fe2d692212905beed57488c6b.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Nescafé',
    desc: 'Preparado con agua o con leche caliente.',
    price: 'Desde $40.00',
    variants: [
      { name: 'Leche para Nescafé', price: '$40.00' },
      { name: 'Agua para Nescafé', price: '$45.00' }
    ],
    image: '_assets/media/a70b219f6bdb6e71f82a2a2d7bac1fb0.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Licuado tradicional',
    desc: 'Sabor a elegir: fresa, plátano o avena.',
    price: '$50.00',
    image: '_assets/media/28662a3833c63b8847c49f0e4c85dfa6.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Licuados combinados',
    desc: 'Choco-fresa, avena-manzana o fresa-avena.',
    price: '$65.00',
    image: '_assets/media/29bd963fd0919a7f319f48c94310e076.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Malteadas',
    desc: 'Cremosas, sabor fresa o vainilla.',
    price: '$83.00',
    image: '_assets/media/b949aa452f0d5cf4192989abe6f4260b.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Jugos naturales',
    desc: 'Recién exprimidos al momento.',
    price: 'Desde $48.00',
    variants: [
      { name: 'Jugo de naranja', price: '$48.00' },
      { name: 'Jugo especial nutritivo', price: '$60.00' }
    ],
    image: '_assets/media/eb39dd40697702b10ad415f3b0580de4.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Jarra de agua de fruta',
    desc: 'Preparada con fruta fresca de temporada.',
    price: 'Desde $70.00',
    variants: [
      { name: 'Jarra chica', price: '$70.00' },
      { name: 'Jarra grande', price: '$85.00' }
    ],
    image: '_assets/media/6b9c936b7c9eada1d2493303600304ac.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Copa de agua de sabor',
    desc: 'Agua fresca de fruta de temporada.',
    price: '$40.00',
    image: '_assets/media/4eef7bc4993ff2705bcd8dc57963a922.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Limonada o naranjada mineral',
    desc: 'Refrescante jarra preparada al momento.',
    price: 'Desde $140.00',
    variants: [
      { name: 'Jarra chica', price: '$140.00' },
      { name: 'Jarra grande', price: '$160.00' }
    ],
    image: '_assets/media/28a4574e71b5bdcdf38633484a4bded1.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Botella de agua natural',
    desc: 'Agua purificada embotellada.',
    price: '$25.00',
    image: '_assets/media/ea3d7dd2e5ae083e34697f99e1755f7e.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Refrescos (varios sabores)',
    desc: 'Familia Coca-Cola y sabores variados.',
    price: '$38.00',
    image: '_assets/media/5413d19279b026145d3ecf0ca9404ca5.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Refrescos de cristal',
    desc: 'Presentación en botella de vidrio.',
    price: '$33.00',
    image: '_assets/media/172e1e6ea010c581a4bbcdc8719a64c2.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Jumex o Suero',
    desc: 'Jugo Jumex o bebida hidratante.',
    price: '$33.00',
    image: '_assets/media/209ec0b229d7912f83a291bb8f93cf51.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Valle Frut',
    desc: 'Bebida refrescante de cítricos.',
    price: '$30.00',
    image: '_assets/media/4390a0680c24634e5cbd0779b5d0a453.png'
  },
  {
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    title: 'Boing',
    desc: 'Sabores disponibles: manzana, uva o mango.',
    price: '$30.00',
    image: '_assets/media/6a3606c2275cb0983b68849bef876c88.png'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. HERO ROTATING BANNER SLIDER (ON INICIO)
  // =========================================================================
  const heroSlider = document.getElementById('heroSlider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const sliderTabs = heroSlider.querySelectorAll('.slider-tab');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
      sliderTabs.forEach((t, i) => t.classList.toggle('active', i === currentSlide));
    }

    function startAutoPlay() {
      stopAutoPlay();
      slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 4500);
    }

    function stopAutoPlay() {
      if (slideInterval) clearInterval(slideInterval);
    }

    sliderTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        goToSlide(index);
        startAutoPlay();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startAutoPlay();
      });
    }

    heroSlider.addEventListener('mouseenter', stopAutoPlay);
    heroSlider.addEventListener('mouseleave', startAutoPlay);

    // Touch swipe support for mobile phones and tablets
    let touchStartX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 45) {
          goToSlide(diff < 0 ? currentSlide + 1 : currentSlide - 1);
          startAutoPlay();
        }
      }
    }, { passive: true });

    startAutoPlay();
  }

  // =========================================================================
  // 2. MENU TABS, URL PARAM & LIVE SEARCH (ON MENU PAGE)
  // =========================================================================
  const menuGrid = document.getElementById('menuGrid');
  if (menuGrid) {
    const menuEmpty = document.getElementById('menuEmpty');
    const categoryBanner = document.getElementById('categoryBanner');
    const tabButtons = document.querySelectorAll('.menu-tab');
    const searchInput = document.getElementById('menuSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const resetMenuBtn = document.getElementById('resetMenuBtn');

    // Check URL query parameter ?cat=...
    const params = new URLSearchParams(window.location.search);
    const requestedCat = params.get('cat');
    const validCategories = ['desayunos', 'comal', 'especiales', 'antojitos', 'caldos', 'carnes', 'postres', 'bebidas', 'todos'];
    let activeCategory = validCategories.includes(requestedCat) ? requestedCat : 'desayunos';
    let searchQuery = '';

    // Set initial active tab button
    tabButtons.forEach((b) => {
      const isMatch = b.dataset.category === activeCategory;
      b.classList.toggle('active', isMatch);
      b.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    function updateTabCounts() {
      tabButtons.forEach((btn) => {
        const cat = btn.dataset.category;
        const countEl = btn.querySelector('.tab-count');
        if (!countEl) return;
        if (cat === 'todos') {
          countEl.textContent = MENU_ITEMS.length;
        } else {
          const count = MENU_ITEMS.filter((item) => item.category === cat).length;
          countEl.textContent = count;
        }
      });
    }

    function renderMenu() {
      const q = searchQuery.trim().toLowerCase();

      const filtered = MENU_ITEMS.filter((item) => {
        const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
        if (!q) return matchesCategory;

        const variantText = (item.variants || [])
          .map((v) => `${v.name} ${v.price}`)
          .join(' ')
          .toLowerCase();

        const searchable = `${item.title} ${item.desc} ${item.categoryLabel} ${item.note || ''} ${variantText}`.toLowerCase();
        return matchesCategory && searchable.includes(q);
      });

      if (categoryBanner) {
        categoryBanner.classList.toggle('visible', activeCategory === 'carnes');
      }

      if (filtered.length === 0) {
        menuGrid.innerHTML = '';
        if (menuEmpty) menuEmpty.classList.add('visible');
        return;
      }

      if (menuEmpty) menuEmpty.classList.remove('visible');

      menuGrid.innerHTML = filtered
        .map((item) => {
          const variantsHtml = item.variants
            ? `<div class="menu-card-variants">
                ${item.variants
                  .map(
                    (v) => `
                  <div class="variant-row">
                    <span class="variant-name">${v.name}</span>
                    <span class="variant-price">${v.price}</span>
                  </div>`
                  )
                  .join('')}
              </div>`
            : '';

          const noteHtml = item.note ? `<div class="menu-card-note">${item.note}</div>` : '';

          return `
            <article class="menu-card">
              <div class="menu-card-img">
                <span class="menu-card-cat">${item.categoryLabel}</span>
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
              </div>
              <div class="menu-card-body">
                <div class="menu-card-header">
                  <h3 class="menu-card-title">${item.title}</h3>
                  <span class="menu-card-price">${item.price}</span>
                </div>
                <p class="menu-card-desc">${item.desc}</p>
                ${variantsHtml}
                ${noteHtml}
              </div>
            </article>
          `;
        })
        .join('');
    }

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeCategory = btn.dataset.category;
        renderMenu();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim().length > 0) {
          clearSearchBtn.classList.add('visible');
          if (activeCategory !== 'todos') {
            activeCategory = 'todos';
            tabButtons.forEach((b) => {
              const isTodos = b.dataset.category === 'todos';
              b.classList.toggle('active', isTodos);
              b.setAttribute('aria-selected', isTodos ? 'true' : 'false');
            });
          }
        } else {
          clearSearchBtn.classList.remove('visible');
        }
        renderMenu();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.remove('visible');
        renderMenu();
        searchInput.focus();
      });
    }

    if (resetMenuBtn) {
      resetMenuBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.remove('visible');
        activeCategory = 'todos';
        tabButtons.forEach((b) => {
          const isTodos = b.dataset.category === 'todos';
          b.classList.toggle('active', isTodos);
          b.setAttribute('aria-selected', isTodos ? 'true' : 'false');
        });
        renderMenu();
      });
    }

    updateTabCounts();
    renderMenu();
  }

  // =========================================================================
  // 3. NAVBAR SCROLL & MOBILE MENU TOGGLE
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
