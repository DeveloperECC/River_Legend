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
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Playa_de_Cabo_San_Juan_en_el_Parque_Nacional_Natural_Tayrona.jpg',
            'https://viajes.nationalgeographic.com.es/medio/2019/06/19/tayrona_468f742f_800x800.jpg',
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
        portada: '/assets/images/losNevados-portada.png', // Usando tu imagen de portada de Los Nevados
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
        portada: '/assets/images/corelesDelRosario-portada.png', // Usando tu imagen de portada de Corales del Rosario
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
        portada: '/assets/images/amacayacu-portada.png', // Usando tu imagen de portada de Amacayacu
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
        portada: '/assets/images/chiribiquete-portada.png', // Usando tu imagen de portada de Chiribiquete
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