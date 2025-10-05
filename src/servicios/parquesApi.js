// src/servicios/parquesApi.js

const parquesData = [
    {
        id: 'tayrona',
        nombre: 'Parque Nacional Natural Tayrona',
        ubicacion: 'Magdalena',
        descripcion: 'Famoso por sus playas de arena blanca, manglares y arrecifes de coral. Hogar de comunidades indígenas, ofrece una mezcla de selva tropical, playas paradisíacas y senderos ancestrales. Sus aguas cristalinas albergan una rica vida marina.',
        portada: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Parque_Nacional_Natural_Tayrona_2017.jpg/1280px-Parque_Nacional_Natural_Tayrona_2017.jpg',
        galeria: [
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Playa_de_Cabo_San_Juan_en_el_Parque_Nacional_Natural_Tayrona.jpg',
            'https://viajes.nationalgeographic.com.es/medio/2019/06/19/tayrona_468f742f_800x800.jpg',
            'https://cloudfront-us-east-1.images.arcpublishing.com/eltiempo/PULXAKV375DDHK26C74D7K3XSM.jpg'
        ],
        peces: [
            { id: '1', nombre: 'Mojarra Plateada', imagen: '/assets/images/Bocachico.png', dificultad: 3 }, // Usando Bocachico por ahora para un pez disponible
            { id: '2', nombre: 'Corroncho de Río', imagen: '/assets/images/Corroncho.jpg', dificultad: 5 }, // Usando Corroncho
            { id: '3', nombre: 'Barracuda', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sphyraena_barracuda_at_night.jpg/1280px-Sphyraena_barracuda_at_night.jpg', dificultad: 8 } // Manteniendo un pez marino externo
        ]
    },
    {
        id: 'los-nevados',
        nombre: 'Parque Nacional Natural Los Nevados',
        ubicacion: 'Caldas, Risaralda, Quindío, Tolima',
        descripcion: 'Zona de alta montaña con picos nevados, páramos y bosques andinos. Sus lagunas y ríos de deshielo son el hogar de especies adaptadas a las bajas temperaturas, ofreciendo paisajes únicos de frailejones y valles glaciares.',
        portada: 'https://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Los_Nevados_PNN.jpg',
        galeria: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nevado_del_Ruiz%2C_Colombia.jpg/1280px-Nevado_del_Ruiz%2C_Colombia.jpg',
            'https://img.goraymi.com/2018/09/25/df97cfb0429f6350d75a4d0413009772_xl.jpg',
            'https://c.pxhere.com/photos/54/1b/colombia_los_nevados_mountain_nature_landscape_valley-876115.jpg!d'
        ],
        peces: [
            { id: '4', nombre: 'Trucha Andina', imagen: '/assets/images/trucha_andina (1).png', dificultad: 7 }, // Usando Sábalo (1)
            { id: '5', nombre: 'Bagre de Montaña', imagen: '/assets/images/Bagre_rayado.png', dificultad: 5 } // Usando Bagre rayado
        ]
    },
    {
        id: 'corales-rosario',
        nombre: 'Parque Nacional Natural Corales del Rosario y de San Bernardo',
        ubicacion: 'Bolívar, Sucre',
        descripcion: 'Archipiélago coralino en el Caribe, con gran diversidad marina y playas paradisíacas. Sus arrecifes de coral son ecosistemas vitales para cientos de especies de peces tropicales, moluscos y tortugas marinas.',
        portada: 'https://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Corales_del_Rosario_y_de_San_Bernardo_PNN.jpg',
        galeria: [
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Playa_en_Islas_del_Rosario%2C_Colombia.jpg',
            'https://cdn.colombia.com/images/v2/turismo/destinos-turisticos/parques-naturales/parque-corales-del-rosario-y-san-bernardo-bolivar-1200.webp',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Corales_Isla_Arena_%283437299042%29.jpg/1280px-Corales_Isla_Arena_%283437299042%29.jpg'
        ],
        peces: [
            { id: '6', nombre: 'Pez Loro', imagen: '/assets/images/pez_loro.png', dificultad: 4 }, // Reutilizando Bocachico
            { id: '7', nombre: 'Cirujano Azul', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Paracanthurus_hepatus_aquarium_1.jpg/1280px-Paracanthurus_hepatus_aquarium_1.jpg', dificultad: 5 },
            { id: '8', nombre: 'Pez Payaso', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Clownfish_at_Koh_Phi_Phi.jpg/1280px-Clownfish_at_Koh_Phi_Phi.jpg', dificultad: 3 }
        ]
    },
    {
        id: 'amacayacu',
        nombre: 'Parque Nacional Natural Amacayacu',
        ubicacion: 'Amazonas',
        descripcion: 'Parque amazónico dedicado a la conservación de la selva tropical y sus comunidades indígenas. Atraviesado por el río Amazonas, es un santuario de delfines rosados, pirañas y una inmensa variedad de peces de agua dulce.',
        portada: 'https://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Amacayacu_PNN.jpg',
        galeria: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Laguna_de_Tarapoto_Amazonas.jpg/1280px-Laguna_de_Tarapoto_Amazonas.jpg',
            'https://www.colombia.travel/sites/default/files/styles/magical_place_carousel_x1/public/2021-08/amaz_delfines_0.jpg?itok=f4z2VzR3',
            'https://www.colombia.travel/sites/default/files/styles/magical_place_banner_x1/public/2021-08/amaz_tarapoto_0.jpg?itok=qYp7iO3m'
        ],
        peces: [
            { id: '9', nombre: 'Piraña', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Piranha_%28Serrasalmus_nattereri%29.JPG/1280px-Piranha_%28Serrasalmus_nattereri%29.JPG', dificultad: 6 },
            { id: '10', nombre: 'Pavón', imagen: '/assets/images/Pavon.png', dificultad: 8 }, // Usando Pavón
            { id: '11', nombre: 'Arapaima (Pirarucú)', imagen: '/assets/images/Arapaima.png', dificultad: 9 } // Usando Arapaima
        ]
    },
    {
        id: 'chiribiquete',
        nombre: 'Parque Nacional Natural Serranía de Chiribiquete',
        ubicacion: 'Caquetá, Guaviare',
        descripcion: 'Patrimonio de la Humanidad, es un santuario de arte rupestre y biodiversidad. Aunque es de difícil acceso, sus ríos prístinos albergan especies únicas de la Amazonía, muchas aún por descubrir.',
        portada: 'https://www.parquesnacionales.gov.co/portal/wp-content/uploads/2018/07/CHIRIBIQUETE_PORTADA.jpg',
        galeria: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Serran%C3%ADa_de_Chiribiquete.jpg/1280px-Serran%C3%ADa_de_Chiribiquete.jpg',
            'https://www.worldwildlife.org/ecoregions/nt0160',
            'https://cdnb.artstation.com/p/assets/images/images/011/493/177/large/cristian-d-larez-mesa-tepuy.jpg?1529949667'
        ],
        peces: [
            { id: '12', nombre: 'Sabalo', imagen: '/assets/images/Sabalo (1).png', dificultad: 9 }, // Reutilizando Sábalo
            { id: '13', nombre: 'Bocachico', imagen: '/assets/images/Bocachico.png', dificultad: 7 }, // Reutilizando Bocachico
            { id: '14', nombre: 'Payara (Pez Vampiro)', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hydrolycus_scomberoides.jpg/1280px-Hydrolycus_scomberoides.jpg', dificultad: 9 }
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