// src/hooks/useActividades.js
import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:3001/api/actividades';

function useActividades() {
    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar actividades (sin cambios)
    useEffect(() => {
        const fetchActividades = async () => {
            try {
                setLoading(true);
                setError(null);
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

    // Optimización: useCallback para agregarActividad
    const agregarActividad = useCallback(async (nuevaActividad) => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaActividad),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || 'Error al agregar la actividad');
            }

            const actividadCreada = await res.json();
            setActividades((prev) => [...prev, actividadCreada]);
            return { success: true, actividad: actividadCreada };
        } catch (err) {
            return { success: false, error: err.message };
        }
    }, []); // Sin dependencias, porque solo usa setActividades (que es estable)

    // Optimización: useCallback para eliminarActividad
    const eliminarActividad = useCallback(async (id) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Error al eliminar la actividad');
            setActividades((prev) => prev.filter((a) => a.id !== id));
            return { success: true };
        } catch (err) {
            return { success: false, error: err.message };
        }
    }, []);

    return { actividades, loading, error, agregarActividad, eliminarActividad };
}

export default useActividades;