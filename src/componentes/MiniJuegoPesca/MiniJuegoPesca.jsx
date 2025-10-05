// src/componentes/MiniJuegoPesca/MiniJuegoPesca.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ESTADOS_MINI_JUEGO, DURACION_LANZAMIENTO_MINI, TIEMPO_ESPERA_MINI_MAX } from '../../data/constantesJuego';
import './MiniJuegoPesca.css';

const MiniJuegoPesca = ({ pecesDisponibles = [], nombreParque = "el Parque" }) => {
    const [estadoJuego, setEstadoJuego] = useState(ESTADOS_MINI_JUEGO.INICIO);
    const [pezActual, setPezActual] = useState(null);
    const [tension, setTension] = useState(0); // Simplificada, solo para feedback
    const [mensaje, setMensaje] = useState(`¡A pescar en ${nombreParque}!`);
    const [capturas, setCapturas] = useState([]); // Peces capturados en este mini-juego

    const tensionIntervalRef = useRef(null);

    // Función para obtener un pez aleatorio de los disponibles
    const obtenerPezAleatorio = () => {
        if (pecesDisponibles.length === 0) return null;
        const indice = Math.floor(Math.random() * pecesDisponibles.length);
        return pecesDisponibles[indice];
    };

    const lanzarSenuelo = () => {
        setEstadoJuego(ESTADOS_MINI_JUEGO.LANZANDO);
        setMensaje("Lanzando señuelo...");
        setPezActual(null);
        setTension(0);

        setTimeout(() => {
            setEstadoJuego(ESTADOS_MINI_JUEGO.ESPERANDO);
            setMensaje("Esperando que pique un pez... 🎣");
            const tiempoHastaPicada = Math.random() * TIEMPO_ESPERA_MINI_MAX + 1000; // 1 a 4 segundos
            setTimeout(() => {
                const pezQuePica = obtenerPezAleatorio();
                if (pezQuePica) {
                    setPezActual(pezQuePica);
                    setEstadoJuego(ESTADOS_MINI_JUEGO.PICADA);
                    setMensaje(`¡${pezQuePica.nombre} ha picado! ¡Recoge!`);
                    iniciarLucha();
                } else {
                    setMensaje("Nada picó esta vez. ¡Intenta de nuevo!");
                    setEstadoJuego(ESTADOS_MINI_JUEGO.INICIO);
                }
            }, tiempoHastaPicada);
        }, DURACION_LANZAMIENTO_MINI);
    };

    const iniciarLucha = () => {
        setEstadoJuego(ESTADOS_MINI_JUEGO.LUCHANDO);
        let luchaTiempoRestante = 4; // Un poco más de tiempo para la lucha
        setMensaje(`¡Luchando con el ${pezActual.nombre}! ¡No lo dejes escapar!`);

        tensionIntervalRef.current = setInterval(() => {
            luchaTiempoRestante--;
            setTension(prev => {
                const nuevaTension = prev + Math.random() * 40 - 20; // Más variación en la tensión
                return Math.max(0, Math.min(100, nuevaTension)); // Asegura que esté entre 0 y 100
            });
            
            if (luchaTiempoRestante <= 0) {
                clearInterval(tensionIntervalRef.current);
                const exito = Math.random() * 10 > pezActual.dificultad; // El éxito depende de la dificultad del pez

                if (exito) {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.CAPTURADO);
                    setMensaje(`¡Felicidades! Has capturado un majestuoso ${pezActual.nombre}! 🎉`);
                    setCapturas(prev => [...prev, pezActual]);
                } else {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.PERDIDO);
                    setMensaje(`¡Oh no! El ${pezActual.nombre} era demasiado escurridizo y se escapó. 💔`);
                }
                setTimeout(() => setEstadoJuego(ESTADOS_MINI_JUEGO.INICIO), 3000); // Volver al inicio después de 3 segundos
            }
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (tensionIntervalRef.current) {
                clearInterval(tensionIntervalRef.current);
            }
        };
    }, []);

    const renderContenido = () => {
        return (
            <>
                {estadoJuego === ESTADOS_MINI_JUEGO.INICIO && (
                    <button className="mini-btn-action" onClick={lanzarSenuelo}>
                        Lanzar Señuelo
                    </button>
                )}
                {(estadoJuego === ESTADOS_MINI_JUEGO.LANZANDO || estadoJuego === ESTADOS_MINI_JUEGO.ESPERANDO) && (
                    <p>{mensaje}</p> // Muestra el mensaje de estado directamente
                )}
                {(estadoJuego === ESTADOS_MINI_JUEGO.PICADA || estadoJuego === ESTADOS_MINI_JUEGO.LUCHANDO) && (
                    <>
                        <img src={pezActual?.imagen} alt={pezActual?.nombre} className="mini-pez-luchando" />
                        <div className="tension-bar-container">
                            <div className="tension-bar" style={{ width: `${tension}%` }}></div>
                        </div>
                        <p>¡Tensión: {tension.toFixed(0)}%! ¡Mantenlo con fuerza!</p>
                    </>
                )}
                {estadoJuego === ESTADOS_MINI_JUEGO.CAPTURADO && (
                    <>
                        <img src={pezActual?.imagen} alt={pezActual?.nombre} className="mini-pez-capturado" />
                        <p>¡Capturado: {pezActual?.nombre}!</p>
                    </>
                )}
                {estadoJuego === ESTADOS_MINI_JUEGO.PERDIDO && (
                    <>
                        <img 
                            src="/assets/images/pez_escapado.png" // Intenta usar esta imagen si la tienes
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/100x100?text=Fish+Escaped" }} // Fallback
                            alt="Pez Escapado" 
                            className="mini-pez-escapado" 
                        />
                        <p>¡El pez se escapó!</p>
                    </>
                )}
            </>
        );
    };

    return (
        <div className="mini-juego-pesca-container">
            <h2>¡Aventúrate en {nombreParque}!</h2>
            <div className="mini-game-area">
                <p className="mini-game-message">{mensaje}</p> {/* Mantengo este p para mensajes generales */}
                {renderContenido()}
            </div>
            <div className="mini-capturas">
                <h3>Capturas ({capturas.length}):</h3>
                <div className="mini-capturas-grid">
                    {capturas.map((pez, index) => (
                        <img key={index} src={pez.imagen} alt={pez.nombre} className="mini-captura-pez" title={pez.nombre} />
                    ))}
                    {capturas.length === 0 && <p className="no-capturas">Aún no has capturado nada aquí. ¡Demuestra tus habilidades!</p>}
                </div>
            </div>
        </div>
    );
};

export default MiniJuegoPesca;