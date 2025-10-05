// src/servicios/parquesApi.js

const parquesData = [
    {
        id: 'tayrona',
        nombre: 'Parque Nacional Natural Tayrona',
        ubicacion: 'Magdalena',
        descripcion: 'Famoso por sus playas de arena blanca, manglares y arrecifes de coral. Hogar de comunidades indígenas, ofrece una mezcla de selva tropical, playas paradisíacas y senderos ancestrales. Sus aguas cristalinas albergan una rica vida marina.',
        portada: '/assets/images/tayrona-portada.jpg', // Usando tu imagen de portada de Tayrona
        galeria: [
            // Puedes añadir más imágenes de tu galería si tienes. Por ahora, mezclo tuyas y externas.
            '/assets/images/barracuda.png', // Usando una imagen de pez para la galería (ejemplo)
            'https://www.google.com/imgres?q=parque%20nacional%20tayrona&imgurl=https%3A%2F%2Fcolombia.travel%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fimagen_650x450_escala_y_recorte%2Fpublic%2Factividades%2FParque%2520Nacional%2520Natural%2520Tayrona%25205%252C%2520Foto%2520Charly%2520Boillot%2520%25281%2529%2520%25281%2529.jpg%3Fitok%3DRHA-BCVe&imgrefurl=https%3A%2F%2Fcolombia.travel%2Fes%2Fsanta-marta%2Fel-parque-tayrona&docid=yxETf6XWl27r1M&tbnid=_E25AYjeASnNuM&vet=12ahUKEwiu2NLbx42QAxVvSjABHWtFFaQQM3oECBoQAA..i&w=650&h=450&hcb=2&ved=2ahUKEwiu2NLbx42QAxVvSjABHWtFFaQQM3oECBoQAA',
            'https://www.google.com/imgres?q=parque%20nacional%20tayrona&imgurl=https%3A%2F%2Fhotelparquetayrona.com%2Fwp-content%2Fuploads%2F2025%2F06%2Fcomo-llegar-al-parque-tayrona.jpg&imgrefurl=https%3A%2F%2Fhotelparquetayrona.com%2Fguia-completa-para-visitar-el-parque-tayrona%2F%3Fsrsltid%3DAfmBOopK3-nubW7ku4QqYfgcYLtAdRxK8raPaptK9eKhmdbDfYpwTNW6&docid=Zs3_4LfDfR1S8M&tbnid=IUlF1TTIPiBvdM&vet=12ahUKEwiu2NLbx42QAxVvSjABHWtFFaQQM3oFCIQBEAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiu2NLbx42QAxVvSjABHWtFFaQQM3oFCIQBEAA',
        ],
        peces: [
            { id: '1', nombre: 'Barracuda', imagen: '/assets/images/barracuda.png', dificultad: 6 },
            { id: '2', nombre: 'Pez Payaso', imagen: '/assets/images/payaso.png', dificultad: 3 },
            { id: '3', nombre: 'Cirujano Azul', imagen: '/assets/images/cirujano_azul.png', dificultad: 5 }
        ]
    },
    {
        id: 'los-nevados',
        nombre: 'Parque Nacional Natural Los Nevados',
        ubicacion: 'Caldas, Risaralda, Quindío, Tolima',
        descripcion: 'Zona de alta montaña con picos nevados, páramos y bosques andinos. Sus lagunas y ríos de deshielo son el hogar de especies adaptadas a las bajas temperaturas, ofreciendo paisajes únicos de frailejones y valles glaciares.',
        portada: '/assets/images/losNevados-portada.jpg', // Usando tu imagen de portada de Los Nevados
        galeria: [
            '/assets/images/trucha_andina.png', // Usando una imagen de pez para la galería (ejemplo)
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nevado_del_Ruiz%2C_Colombia.jpg/1280px-Nevado_del_Ruiz%2C_Colombia.jpg',
            'https://img.goraymi.com/2018/09/25/df97cfb0429f6350d75a4d0413009772_xl.jpg',
        ],
        peces: [
            { id: '4', nombre: 'Trucha Andina', imagen: '/assets/images/trucha_andina.png', dificultad: 7 },
            { id: '5', nombre: 'Corroncho', imagen: '/assets/images/Corroncho.jpg', dificultad: 5 }
        ]
    },
    {
        id: 'corales-rosario',
        nombre: 'Parque Nacional Natural Corales del Rosario y de San Bernardo',
        ubicacion: 'Bolívar, Sucre',
        descripcion: 'Archipiélago coralino en el Caribe, con gran diversidad marina y playas paradisíacas. Sus arrecifes de coral son ecosistemas vitales para cientos de especies de peces tropicales, moluscos y tortugas marinas.',
        portada: '/assets/images/coralesDelRosario-portada.jpg', // Usando tu imagen de portada de Corales del Rosario
        galeria: [
            '/assets/images/cirujano_azul.png', // Usando una imagen de pez para la galería (ejemplo)
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Playa_en_Islas_del_Rosario%2C_Colombia.jpg',
            'https://cdn.colombia.com/images/v2/turismo/destinos-turisticos/parques-naturales/parque-corales-del-rosario-y-san-bernardo-bolivar-1200.webp',
        ],
        peces: [
            { id: '6', nombre: 'Pez Payaso', imagen: '/assets/images/payaso.png', dificultad: 3 }, // Reutilizado
            { id: '7', nombre: 'Barracuda Costera', imagen: '/assets/images/barracuda.png', dificultad: 7 }, // Reutilizado
            { id: '8', nombre: 'Cirujano Azul Caribeño', imagen: '/assets/images/cirujano_azul.png', dificultad: 5 } // Reutilizado
        ]
    },
    {
        id: 'amacayacu',
        nombre: 'Parque Nacional Natural Amacayacu',
        ubicacion: 'Amazonas',
        descripcion: 'Parque amazónico dedicado a la conservación de la selva tropical y sus comunidades indígenas. Atraviesado por el río Amazonas, es un santuario de delfines rosados, pirañas y una inmensa variedad de peces de agua dulce.',
        portada: '/assets/images/amacayacu-portada.jpg', // Usando tu imagen de portada de Amacayacu
        galeria: [
            '/assets/images/piraña_roja.png', // Usando una imagen de pez para la galería (ejemplo)
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Laguna_de_Tarapoto_Amazonas.jpg/1280px-Laguna_de_Tarapoto_Amazonas.jpg',
            'https://www.colombia.travel/sites/default/files/styles/magical_place_carousel_x1/public/2021-08/amaz_delfines_0.jpg?itok=f4z2VzR3',
        ],
        peces: [
            { id: '9', nombre: 'Piraña Roja', imagen: '/assets/images/piraña_roja.png', dificultad: 6 },
            { id: '10', nombre: 'Pavón', imagen: '/assets/images/Pavon.png', dificultad: 8 },
            { id: '11', nombre: 'Bagre Rayado', imagen: '/assets/images/Bagre_rayado.png', dificultad: 5 }
        ]
    },
    {
        id: 'chiribiquete',
        nombre: 'Parque Nacional Natural Serranía de Chiribiquete',
        ubicacion: 'Caquetá, Guaviare',
        descripcion: 'Patrimonio de la Humanidad, es un santuario de arte rupestre y biodiversidad. Aunque es de difícil acceso, sus ríos prístinos albergan especies únicas de la Amazonía, muchas aún por descubrir.',
        portada: '/assets/images/chiribiquete-portada.jpg', // Usando tu imagen de portada de Chiribiquete
        galeria: [
            '/assets/images/Arapaima.png', // Usando una imagen de pez para la galería (ejemplo)
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Serran%C3%ADa_de_Chiribiquete.jpg/1280px-Serran%C3%ADa_de_Chiribiquete.jpg',
            'https://cdnb.artstation.com/p/assets/images/images/011/493/177/large/cristian-d-larez-mesa-tepuy.jpg?1529949667'
        ],
        peces: [
            { id: '12', nombre: 'Arapaima (Pirarucú)', imagen: '/assets/images/Arapaima.png', dificultad: 9 },
            { id: '13', nombre: 'Bocachico', imagen: '/assets/images/Bocachico.png', dificultad: 7 },
            { id: '14', nombre: 'Sábalo', imagen: '/assets/images/Sabalo (1).png', dificultad: 7 },
            { id: '15', nombre: 'Payara (Pez Vampiro)', imagen: '/assets/images/payara.png', dificultad: 9 }
        ]
    }
];

export const fetchParques = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(parquesData);
        }, 800);
    });
};

export const fetchParqueById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const parque = parquesData.find(p => p.id === id);
            resolve(parque);
        }, 400);
    });
};