// src/hooks/useActividades.js
// ============================================
// CUSTOM HOOK: useActividades
// Consume la API del backend con fetch
// ============================================

import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001/api/actividades';

function useActividades() {
    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar actividades al montar el componente
    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error('Error al cargar actividades');
                const data = await res.json();
                setActividades(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchActividades();
    }, []);

    // Función para agregar una actividad (POST)
    const agregarActividad = async (nuevaActividad) => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaActividad),
            });

            if (!res.ok) throw new Error('Error al agregar actividad');
            const actividadCreada = await res.json();
            setActividades((prev) => [...prev, actividadCreada]);
            return actividadCreada;
        } catch (err) {
            setError(err.message);
        }
    };

    // Función para eliminar una actividad (DELETE)
    const eliminarActividad = async (id) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Error al eliminar actividad');
            setActividades((prev) => prev.filter((a) => a.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return { actividades, loading, error, agregarActividad, eliminarActividad };
}

export default useActividades;