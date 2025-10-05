// src/componentes/ParqueCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ParqueCard.css';

const ParqueCard = ({ parque }) => {
    return (
        <Link to={`/parque/${parque.id}`} className="parque-card-link">
            <div className="parque-card">
                <img src={parque.portada} alt={parque.nombre} className="parque-card-img" />
                <div className="parque-card-content">
                    <h3 className="parque-card-title">{parque.nombre}</h3>
                    <p className="parque-card-location">Ubicación: {parque.ubicacion}</p>
                    <p className="parque-card-description">{parque.descripcion.substring(0, 100)}...</p>
                </div>
            </div>
        </Link>
    );
};

export default ParqueCard;