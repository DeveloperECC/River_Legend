// src/data/constantesJuego.js

export const ESTADOS_MINI_JUEGO = {
    INICIO: 'INICIO',
    LANZANDO: 'LANZANDO',
    ESPERANDO: 'ESPERANDO',
    PICADA: 'PICADA',
    LUCHANDO: 'LUCHANDO',
    CAPTURADO: 'CAPTURADO',
    PERDIDO: 'PERDIDO',
};

// Puedes añadir más constantes aquí si las necesitas para el juego principal o el mini-juego
export const DURACION_LANZAMIENTO_MINI = 1000; // 1 segundo para el lanzamiento del mini-juego
export const TIEMPO_ESPERA_MINI_MAX = 3000; // Max 3 segundos para picada