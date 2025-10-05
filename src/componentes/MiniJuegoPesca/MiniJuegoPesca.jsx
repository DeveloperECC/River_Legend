// src/componentes/MiniJuegoPesca/MiniJuegoPesca.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ESTADOS_MINI_JUEGO, DURACION_LANZAMIENTO_MINI, TIEMPO_ESPERA_MINI_MAX } from '../../data/constantesJuego.js';
import './MiniJuegoPesca.css';

const MiniJuegoPesca = ({ pecesDisponibles = [], nombreParque = "el Parque" }) => {
    const [estadoJuego, setEstadoJuego] = useState(ESTADOS_MINI_JUEGO.INICIO);
    const [pezActual, setPezActual] = useState(null);
    const [tension, setTension] = useState(0);
    const [mensaje, setMensaje] = useState(`¡A pescar en ${nombreParque}!`);
    const [capturas, setCapturas] = useState([]);

    const tensionIntervalRef = useRef(null);

    const obtenerPezAleatorio = () => {
        if (pecesDisponibles.length === 0) return null;
        const indice = Math.floor(Math.random() * pecesDisponibles.length);
        return pecesDisponibles[indice];
    };

    const lanzarSenuelo = () => {
        if (estadoJuego !== ESTADOS_MINI_JUEGO.INICIO) return; // Prevenir múltiples lanzamientos
        
        setEstadoJuego(ESTADOS_MINI_JUEGO.LANZANDO);
        setMensaje("Lanzando señuelo a las profundidades...");
        setPezActual(null);
        setTension(0);

        setTimeout(() => {
            setEstadoJuego(ESTADOS_MINI_JUEGO.ESPERANDO);
            setMensaje("El agua murmura... esperando una picada... 🎣");
            const tiempoHastaPicada = Math.random() * TIEMPO_ESPERA_MINI_MAX + 1000;
            
            setTimeout(() => {
                // Asegurarse de que el juego no se haya reiniciado mientras esperaba
                if (estadoJuego === ESTADOS_MINI_JUEGO.ESPERANDO) {
                    const pezQuePica = obtenerPezAleatorio();
                    if (pezQuePica) {
                        setPezActual(pezQuePica); // El pez se establece aquí, ANTES de la lucha
                        setEstadoJuego(ESTADOS_MINI_JUEGO.PICADA);
                        setMensaje(`¡Una poderosa picada! ¡Es un ${pezQuePica.nombre}!`);
                        iniciarLucha(pezQuePica);
                    } else {
                        setMensaje("Parece que hoy no quieren picar. ¡Intenta de nuevo!");
                        setEstadoJuego(ESTADOS_MINI_JUEGO.INICIO);
                    }
                }
            }, tiempoHastaPicada);
        }, DURACION_LANZAMIENTO_MINI);
    };

    const iniciarLucha = (pez) => {
        setEstadoJuego(ESTADOS_MINI_JUEGO.LUCHANDO);
        let luchaTiempoRestante = 4;
        setMensaje(`¡Luchando con el ${pez.nombre}! ¡No lo dejes escapar!`);

        tensionIntervalRef.current = setInterval(() => {
            luchaTiempoRestante--;
            setTension(prev => {
                const nuevaTension = prev + Math.random() * 40 - 20;
                return Math.max(0, Math.min(100, nuevaTension));
            });
            
            if (luchaTiempoRestante <= 0) {
                clearInterval(tensionIntervalRef.current);
                const exito = (Math.random() * 10) > pez.dificultad;

                if (exito) {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.CAPTURADO);
                    setMensaje(`¡Felicidades! Has capturado un majestuoso ${pez.nombre}! 🎉`);
                    setCapturas(prev => [...prev, pez]);
                } else {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.PERDIDO);
                    setMensaje(`¡Oh no! El ${pez.nombre} era demasiado escurridizo y se escapó. 💔`);
                }
            }
        }, 1000);
    };

    // Función para reiniciar el mini-juego y volver a pescar
    const reiniciarMiniJuego = () => {
        setEstadoJuego(ESTADOS_MINI_JUEGO.INICIO);
        setPezActual(null);
        setTension(0);
        setMensaje(`¡Listo para otro intento en ${nombreParque}!`);
    };

    useEffect(() => {
        return () => {
            if (tensionIntervalRef.current) {
                clearInterval(tensionIntervalRef.current);
            }
        };
    }, []);

    const renderContenido = () => {
        switch (estadoJuego) {
            case ESTADOS_MINI_JUEGO.INICIO:
                return (
                    <button className="mini-btn-action" onClick={lanzarSenuelo}>
                        Lanzar Señuelo
                    </button>
                );
            case ESTADOS_MINI_JUEGO.LANZANDO:
                return <p>Lanzando tu línea a las misteriosas aguas...</p>;
            case ESTADOS_MINI_JUEGO.ESPERANDO:
                return <p>El susurro del río te acompaña... ¿un pez a la vista?</p>;
            case ESTADOS_MINI_JUEGO.PICADA:
            case ESTADOS_MINI_JUEGO.LUCHANDO:
                return (
                    <>
                        {pezActual && <img src={pezActual.imagen} alt={pezActual.nombre} className="mini-pez-luchando" />}
                        <div className="tension-bar-container">
                            <div className="tension-bar" style={{ width: `${tension}%` }}></div>
                        </div>
                        <p>¡Tensión: {tension.toFixed(0)}%! ¡Mantenlo con fuerza!</p>
                    </>
                );
            case ESTADOS_MINI_JUEGO.CAPTURADO:
                return (
                    <>
                        {pezActual && <img src={pezActual.imagen} alt={pezActual.nombre} className="mini-pez-capturado" />}
                        <button className="mini-btn-action restart" onClick={reiniciarMiniJuego}>
                            ¡Volver a Pescar!
                        </button>
                    </>
                );
            case ESTADOS_MINI_JUEGO.PERDIDO:
                return (
                    <>
                        <img 
                            src="/assets/images/pez-escapado.png"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://i.imgur.com/ORCqS2c.png" }}
                            alt="Pez Escapado" 
                            className="mini-pez-escapado" 
                        />
                        <button className="mini-btn-action restart" onClick={reiniciarMiniJuego}>
                            Intentar de Nuevo
                        </button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mini-juego-pesca-container">
            <h2>¡Aventúrate en {nombreParque}!</h2>
            <div className="mini-game-area">
                <p className="mini-game-message">{mensaje}</p>
                {renderContenido()}
            </div>
            <div className="mini-capturas">
                <h3>Capturas en este Parque ({capturas.length}):</h3>
                <div className="mini-capturas-grid">
                    {capturas.length > 0 ? (
                        capturas.map((pez, index) => (
                            <img key={`${pez.id}-${index}`} src={pez.imagen} alt={pez.nombre} className="mini-captura-pez" title={pez.nombre} />
                        ))
                    ) : (
                        <p className="no-capturas">Aún no has capturado nada aquí. ¡Demuestra tus habilidades!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MiniJuegoPesca;