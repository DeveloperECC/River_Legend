// src/paginas/ParqueDetalle.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchParqueById } from '../servicios/parquesApi.js';
import MiniJuegoPesca from '../componentes/MiniJuegoPesca/MiniJuegoPesca.jsx'; // Nuevo componente
import './ParqueDetalle.css'; // Asegúrate de crear este CSS

const ParqueDetalle = () => {
    const { id } = useParams();
    const [parque, setParque] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mostrarJuego, setMostrarJuego] = useState(false); // Para mostrar/ocultar el mini-juego

    useEffect(() => {
        const getParque = async () => {
            try {
                setLoading(true);
                const data = await fetchParqueById(id);
                if (data) {
                    setParque(data);
                } else {
                    setError('Parque no encontrado.');
                }
                setError(null);
            } catch (err) {
                setError('No se pudo cargar la información del parque.');
                console.error("Error en ParqueDetalle:", err);
            } finally {
                setLoading(false);
            }
        };

        getParque();
    }, [id]);

    if (loading) {
        return <div className="detalle-loading">Cargando detalles del parque...</div>;
    }

    if (error) {
        return <div className="detalle-error">Error: {error}</div>;
    }

    if (!parque) {
        return <div className="detalle-no-encontrado">Parque no encontrado.</div>;
    }

    // Si el mini-juego está activo, lo mostramos en lugar de los detalles
    if (mostrarJuego) {
        return (
            <div className="mini-juego-wrapper">
                <button className="back-to-detail-btn" onClick={() => setMostrarJuego(false)}>
                    &larr; Volver al Parque
                </button>
                <MiniJuegoPesca pecesDisponibles={parque.peces} nombreParque={parque.nombre} />
            </div>
        );
    }

    return (
        <div className="parque-detalle-container">
            <Link to="/" className="back-button">&larr; Volver a la lista</Link>
            
            <h1 className="parque-detalle-title">{parque.nombre}</h1>
            <p className="parque-detalle-ubicacion">Ubicación: {parque.ubicacion}</p>
            
            <img src={parque.portada} alt={parque.nombre} className="parque-detalle-portada" />
            
            <div className="parque-detalle-descripcion">
                <h3>Acerca de este parque:</h3>
                <p>{parque.descripcion}</p>
            </div>

            <div className="parque-detalle-galeria">
                <h3>Galería de Imágenes:</h3>
                <div className="galeria-grid">
                    {parque.galeria.map((imgUrl, index) => (
                        <img key={index} src={imgUrl} alt={`${parque.nombre} - ${index}`} className="galeria-img" />
                    ))}
                </div>
            </div>

            <div className="parque-detalle-fauna">
                <h3>Fauna Acuática Común:</h3>
                <div className="fauna-grid">
                    {parque.peces.map(pez => (
                        <div key={pez.id} className="pez-item">
                            <img src={pez.imagen} alt={pez.nombre} className="pez-img" />
                            <p className="pez-nombre">{pez.nombre}</p>
                            <p className="pez-dificultad">Dificultad de pesca: {pez.dificultad}/10</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className="jugar-pesca-btn" onClick={() => setMostrarJuego(true)}>
                ¡A Pescar en {parque.nombre}! 🎣
            </button>
        </div>
    );
};

export default ParqueDetalle;