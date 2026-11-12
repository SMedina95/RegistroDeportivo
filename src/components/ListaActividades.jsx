// src/components/ListaActividades.jsx
// ============================================
// COMPONENTE: ListaActividades
// Optimizado con React.memo
// ============================================

import React from 'react';

const ListaActividades = React.memo(({ actividades, onEliminar }) => {
    console.log('🔄 ListaActividades renderizada');

    if (actividades.length === 0) {
        return (
            <p className="text-gray-400 text-center p-4">
                No hay actividades registradas. ¡Agrega una nueva!
            </p>
        );
    }

    return (
        <ul className="space-y-3">
            {actividades.map((act) => (
                <li
                    key={act.id}
                    className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex justify-between items-start"
                >
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
                        onClick={() => onEliminar(act.id)}
                        className="text-red-400 hover:text-red-300 text-sm ml-4"
                    >
                        🗑️
                    </button>
                </li>
            ))}
        </ul>
    );
});

export default ListaActividades;