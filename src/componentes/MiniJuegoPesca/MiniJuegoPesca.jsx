// src/componentes/MiniJuegoPesca/MiniJuegoPesca.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ESTADOS_MINI_JUEGO, DURACION_LANZAMIENTO_MINI, TIEMPO_ESPERA_MINI_MAX } from '../../data/constantesJuego';
import './MiniJuegoPesca.css'; // Asegúrate de crear este CSS

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
                    // Iniciar un temporizador o una lógica de tensión para la lucha
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
        let luchaTiempoRestante = 3; // 3 segundos de lucha simplificada
        setMensaje(`¡Luchando con el ${pezActual.nombre}!`);

        tensionIntervalRef.current = setInterval(() => {
            luchaTiempoRestante--;
            setTension(prev => Math.min(100, prev + Math.random() * 30 - 10)); // Tensión aleatoria
            
            if (luchaTiempoRestante <= 0) {
                clearInterval(tensionIntervalRef.current);
                const exito = Math.random() > 0.3; // 70% de éxito en la pesca simplificada

                if (exito) {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.CAPTURADO);
                    setMensaje(`¡Has capturado un ${pezActual.nombre}! 🎉`);
                    setCapturas(prev => [...prev, pezActual]);
                } else {
                    setEstadoJuego(ESTADOS_MINI_JUEGO.PERDIDO);
                    setMensaje(`¡El ${pezActual.nombre} se escapó! 💔`);
                }
                setTimeout(() => setEstadoJuego(ESTADOS_MINI_JUEGO.INICIO), 2000); // Volver al inicio
            }
        }, 1000); // Cada segundo
    };

    useEffect(() => {
        return () => { // Limpia el intervalo al desmontar el componente
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
                return <p>Lanzando...</p>;
            case ESTADOS_MINI_JUEGO.ESPERANDO:
                return <p>Esperando picada...</p>;
            case ESTADOS_MINI_JUEGO.PICADA:
            case ESTADOS_MINI_JUEGO.LUCHANDO:
                return (
                    <>
                        <img src={pezActual?.imagen} alt={pezActual?.nombre} className="mini-pez-luchando" />
                        <p>¡Tensión: {tension.toFixed(0)}%!</p>
                        {/* Aquí podrías añadir un botón "Recoger" / "Soltar" si quieres más interactividad */}
                    </>
                );
            case ESTADOS_MINI_JUEGO.CAPTURADO:
                return (
                    <>
                        <img src={pezActual?.imagen} alt={pezActual?.nombre} className="mini-pez-capturado" />
                        <p>¡Capturado: {pezActual?.nombre}!</p>
                    </>
                );
            case ESTADOS_MINI_JUEGO.PERDIDO:
                return (
                    <>
                        <img src="https://via.placeholder.com/100x100?text=Fish+Escaped" alt="Pez Escapado" className="mini-pez-escapado" />
                        <p>¡El pez se escapó!</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mini-juego-pesca-container">
            <h2>Mini Juego de Pesca en {nombreParque}</h2>
            <div className="mini-game-area">
                <p className="mini-game-message">{mensaje}</p>
                {renderContenido()}
            </div>
            <div className="mini-capturas">
                <h3>Capturas ({capturas.length}):</h3>
                <div className="mini-capturas-grid">
                    {capturas.map((pez, index) => (
                        <img key={index} src={pez.imagen} alt={pez.nombre} className="mini-captura-pez" title={pez.nombre} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiniJuegoPesca;