// backend/server.js
// ============================================
// SERVIDOR EXPRESS: API de Actividades Deportivas
// ============================================

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors()); // Permitir peticiones desde el frontend
app.use(express.json()); // Parsear JSON en las peticiones

// Datos de ejemplo (en memoria)
let actividades = [
    {
        id: 1,
        tipo: 'Correr',
        duracion: 45,
        distancia: 5.2,
        fecha: '2025-11-01',
        notas: 'Trote matutino por el parque.',
    },
    {
        id: 2,
        tipo: 'Ciclismo',
        duracion: 90,
        distancia: 25.0,
        fecha: '2025-11-03',
        notas: 'Ruta por la carretera.',
    },
    {
        id: 3,
        tipo: 'Natación',
        duracion: 30,
        distancia: 1.0,
        fecha: '2025-11-05',
        notas: 'Entrenamiento en la alberca.',
    },
];
// Middleware de autenticación simulado
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader !== 'Bearer devfseek-token-secreto') {
        return res.status(401).json({ error: 'No autorizado. Token inválido o ausente.' });
    }

    next();
};
// ========== RUTAS ==========

// Ruta de prueba (Hola Mundo)
app.get('/', (req, res) => {
    res.json({ mensaje: '¡Bienvenido a la API de Registro Deportivo! 🏃' });
});

// GET: Obtener todas las actividades
app.get('/api/actividades', (req, res) => {
    res.json(actividades);
});

// GET: Obtener una actividad por ID
app.get('/api/actividades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const actividad = actividades.find((a) => a.id === id);

    if (!actividad) {
        return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    res.json(actividad);
});

// POST: Crear una nueva actividad
app.post('/api/actividades',  (req, res) => {
    const { tipo, duracion, distancia, fecha, notas } = req.body;

    if (!tipo || !duracion || !fecha) {
        return res.status(400).json({
            error: 'Los campos tipo, duración y fecha son obligatorios.',
        });
    }

    const nuevaActividad = {
        id: actividades.length + 1,
        tipo,
        duracion: parseInt(duracion),
        distancia: parseFloat(distancia) || 0,
        fecha,
        notas: notas || '',
    };

    actividades.push(nuevaActividad);
    res.status(201).json(nuevaActividad);
});

// DELETE: Eliminar una actividad por ID
app.delete('/api/actividades/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = actividades.findIndex((a) => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Actividad no encontrada' });
    }

    actividades.splice(index, 1);
    res.json({ mensaje: 'Actividad eliminada correctamente' });
});

// Iniciar el servidor
//app.listen(PORT, () => {
//  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
//});

module.exports = app;