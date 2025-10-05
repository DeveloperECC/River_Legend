// src/hooks/useParquesApi.js

import { useState, useEffect } from 'react';
import { fetchParques } from '../servicios/parquesApi.js'; // Asegúrate de que la ruta y la extensión sean correctas

export const useParquesApi = () => { // Exportación nombrada
    const [parques, setParques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getParques = async () => {
            try {
                setLoading(true);
                const data = await fetchParques();
                setParques(data);
                setError(null); // Limpiar cualquier error anterior en caso de éxito
            } catch (err) {
                setError(err.message || 'Error al cargar los parques');
                console.error("Error en useParquesApi:", err);
            } finally {
                setLoading(false);
            }
        };

        getParques();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

    return { parques, loading, error };
};