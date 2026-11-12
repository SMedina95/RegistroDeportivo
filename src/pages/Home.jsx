// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import useActividades from '../hooks/useActividades';
import { useAuth } from '../context/AuthContext';
import FormularioActividad from '../components/FormularioActividad';

function Home() {
    const { actividades, loading, error, agregarActividad, eliminarActividad } = useActividades();
    const { user } = useAuth();

    const handleAgregar = async (nuevaActividad) => {
        return await agregarActividad(nuevaActividad);
    };

    const handleEliminar = async (id) => {
        if (confirm('¿Eliminar esta actividad?')) {
            await eliminarActividad(id);
        }
    };

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
                    <ul className="space-y-3">
                        {actividades.map((act) => (
                            <li key={act.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex justify-between items-start">
                                <div>
                                    <p className="text-lg font-bold text-emerald-400">
                                        {act.tipo} - {act.duracion} min
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        📅 {act.fecha} | 📏 {act.distancia} km
                                    </p>
                                    {act.notas && <p className="text-xs text-gray-400 mt-1">{act.notas}</p>}
                                </div>
                                <button
                                    onClick={() => handleEliminar(act.id)}
                                    className="text-red-400 hover:text-red-300 text-sm ml-4"
                                >
                                    🗑️
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Home;