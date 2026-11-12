// src/components/FormularioActividad.jsx
import { useState, useCallback } from 'react';
import { actividadSchema } from '../validations/actividadSchema';

function FormularioActividad({ onAgregar }) {
    const [formData, setFormData] = useState({
        tipo: '',
        duracion: '',
        distancia: '',
        fecha: new Date().toISOString().split('T')[0],
        notas: '',
    });

    const [errores, setErrores] = useState({});
    const [mensajeError, setMensajeError] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [enviando, setEnviando] = useState(false);

    // Optimización: useCallback para handleChange
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errores[name]) {
            setErrores((prev) => ({ ...prev, [name]: '' }));
        }
        setMensajeError('');
        setMensajeExito('');
    }, [errores]); // Dependencia: errores (porque lo usa dentro)

    // Optimización: useCallback para handleSubmit
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setErrores({});
        setMensajeError('');
        setMensajeExito('');

        const datosParaValidar = {
            tipo: formData.tipo,
            duracion: Number(formData.duracion),
            distancia: formData.distancia ? Number(formData.distancia) : 0,
            fecha: formData.fecha,
            notas: formData.notas,
        };

        const resultado = actividadSchema.safeParse(datosParaValidar);

        if (!resultado.success) {
            const erroresPorCampo = {};
            resultado.error.issues.forEach((issue) => {
                const campo = issue.path[0];
                if (!erroresPorCampo[campo]) {
                    erroresPorCampo[campo] = issue.message;
                }
            });
            setErrores(erroresPorCampo);
            return;
        }

        setEnviando(true);
        const respuesta = await onAgregar(resultado.data);
        setEnviando(false);

        if (respuesta.success) {
            setMensajeExito('✅ Actividad agregada correctamente');
            setFormData({
                tipo: '',
                duracion: '',
                distancia: '',
                fecha: new Date().toISOString().split('T')[0],
                notas: '',
            });
            setTimeout(() => setMensajeExito(''), 3000);
        } else {
            setMensajeError(`⚠️ ${respuesta.error}`);
        }
    }, [formData, onAgregar]); // Dependencias: formData y onAgregar

    return (
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">➕ Nueva Actividad</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <input
                        type="text"
                        name="tipo"
                        placeholder="Tipo de actividad (Correr, Ciclismo...)"
                        value={formData.tipo}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-gray-700 border ${
                            errores.tipo ? 'border-red-500' : 'border-gray-600'
                        } text-white`}
                    />
                    {errores.tipo && <p className="text-red-400 text-xs mt-1">{errores.tipo}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <input
                            type="number"
                            name="duracion"
                            placeholder="Duración (min)"
                            value={formData.duracion}
                            onChange={handleChange}
                            className={`w-full p-2 rounded bg-gray-700 border ${
                                errores.duracion ? 'border-red-500' : 'border-gray-600'
                            } text-white`}
                        />
                        {errores.duracion && <p className="text-red-400 text-xs mt-1">{errores.duracion}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            name="distancia"
                            placeholder="Distancia (km)"
                            value={formData.distancia}
                            onChange={handleChange}
                            className={`w-full p-2 rounded bg-gray-700 border ${
                                errores.distancia ? 'border-red-500' : 'border-gray-600'
                            } text-white`}
                        />
                        {errores.distancia && <p className="text-red-400 text-xs mt-1">{errores.distancia}</p>}
                    </div>
                </div>

                <div>
                    <input
                        type="date"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-gray-700 border ${
                            errores.fecha ? 'border-red-500' : 'border-gray-600'
                        } text-white`}
                    />
                    {errores.fecha && <p className="text-red-400 text-xs mt-1">{errores.fecha}</p>}
                </div>

                <div>
                    <textarea
                        name="notas"
                        placeholder="Notas (opcional)"
                        value={formData.notas}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-gray-700 border ${
                            errores.notas ? 'border-red-500' : 'border-gray-600'
                        } text-white`}
                        rows="2"
                    />
                    {errores.notas && <p className="text-red-400 text-xs mt-1">{errores.notas}</p>}
                </div>

                {mensajeError && <p className="text-red-400 text-sm">{mensajeError}</p>}
                {mensajeExito && <p className="text-emerald-400 text-sm">{mensajeExito}</p>}

                <button
                    type="submit"
                    disabled={enviando}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded font-semibold transition-colors disabled:opacity-50"
                >
                    {enviando ? 'Guardando...' : 'Guardar Actividad'}
                </button>
            </form>
        </div>
    );
}

export default FormularioActividad;