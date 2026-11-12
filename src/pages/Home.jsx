// src/pages/Home.jsx
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useActividades from '../hooks/useActividades';
import { useAuth } from '../context/AuthContext';
import FormularioActividad from '../components/FormularioActividad';
import ListaActividades from '../components/ListaActividades';

function Home() {
    const { actividades, loading, error, agregarActividad, eliminarActividad } = useActividades();
    const { user } = useAuth();

    // Optimización: useMemo para calcular el total de kilómetros
    const totalKilometros = useMemo(() => {
        console.log('🔄 Calculando total de kilómetros...');
        return actividades.reduce((total, act) => total + (act.distancia || 0), 0);
    }, [actividades]);

    // Optimización: useCallback para handleAgregar
    const handleAgregar = useCallback(async (nuevaActividad) => {
        return await agregarActividad(nuevaActividad);
    }, [agregarActividad]);

    // Optimización: useCallback para handleEliminar
    const handleEliminar = useCallback(async (id) => {
        if (confirm('¿Eliminar esta actividad?')) {
            await eliminarActividad(id);
        }
    }, [eliminarActividad]);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-emerald-400">🏃 Registro Deportivo</h1>
                    <Link to="/profile" className="text-emerald-400 hover:underline">
                        Mi Perfil
                    </Link>
                </div>

                <p className="text-gray-400 mb-6">Hola, <strong>@{user.username}</strong>. Aquí están tus actividades:</p>

                <FormularioActividad onAgregar={handleAgregar} />

                {loading && <p className="text-emerald-300">Cargando actividades...</p>}
                {error && <p className="text-red-400">⚠️ {error}</p>}

                {!loading && !error && (
                    <>
                        <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700 text-center">
                            <p className="text-sm text-gray-400">
                                Total de kilómetros recorridos: <strong className="text-emerald-400">{totalKilometros.toFixed(2)} km</strong>
                            </p>
                        </div>
                        <ListaActividades actividades={actividades} onEliminar={handleEliminar} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;