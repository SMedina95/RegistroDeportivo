// src/App.jsx
import useActividades from './hooks/useActividades';

function App() {
    const { actividades, loading, error } = useActividades();

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold text-center text-emerald-400 mb-8">
                🏃 Registro Deportivo
            </h1>

            {loading && <p className="text-center text-emerald-300">Cargando actividades...</p>}
            {error && <p className="text-center text-red-400">⚠️ {error}</p>}

            {!loading && !error && (
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Mis Actividades</h2>
                    <ul className="space-y-3">
                        {actividades.map((act) => (
                            <li key={act.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <p className="text-lg font-bold text-emerald-400">
                                    {act.tipo} - {act.duracion} min
                                </p>
                                <p className="text-sm text-gray-300">
                                    📅 {act.fecha} | 📏 {act.distancia} km
                                </p>
                                {act.notas && <p className="text-xs text-gray-400 mt-1">{act.notas}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;