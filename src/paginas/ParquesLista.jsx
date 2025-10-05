// src/paginas/ParquesLista.jsx
import React from 'react';
import { useParquesApi } from '../hooks/useParquesApi';
import ParqueCard from '../componentes/ParqueCard';
import './ParquesLista.css';

const ParquesLista = () => {
    const { parques, loading, error } = useParquesApi();

    if (loading) {
        return <div className="loading-message">Cargando la leyenda de los ríos y sus parques... 🛶</div>;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div className="parques-lista-container">
            <h1 className="main-title">River Legend: Parques de Colombia</h1>
            <p className="subtitle">Explora la biodiversidad y la vida acuática de nuestros tesoros naturales.</p>
            <div className="parques-grid">
                {parques.map(parque => (
                    <ParqueCard key={parque.id} parque={parque} />
                ))}
            </div>
        </div>
    );
};

export default ParquesLista;