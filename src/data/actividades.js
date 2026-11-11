// src/data/actividades.js
// ============================================
// DATOS DE EJEMPLO: Actividades Deportivas
// ============================================

export const actividadesIniciales = [
    {
        id: 1,
        tipo: "Correr",
        duracion: 45, // minutos
        distancia: 5.2, // km
        fecha: "2025-11-01",
        notas: "Trote matutino por el parque.",
    },
    {
        id: 2,
        tipo: "Ciclismo",
        duracion: 90,
        distancia: 25.0,
        fecha: "2025-11-03",
        notas: "Ruta por la carretera.",
    },
    {
        id: 3,
        tipo: "Natación",
        duracion: 30,
        distancia: 1.0,
        fecha: "2025-11-05",
        notas: "Entrenamiento en la alberca.",
    },
    {
        id: 4,
        tipo: "Correr",
        duracion: 60,
        distancia: 8.0,
        fecha: "2025-11-07",
        notas: "Carrera continua.",
    },
];

export const tiposActividad = [
    { valor: "Correr", icono: "🏃" },
    { valor: "Ciclismo", icono: "🚴" },
    { valor: "Natación", icono: "🏊" },
    { valor: "Caminar", icono: "🚶" },
    { valor: "Yoga", icono: "🧘" },
    { valor: "Pesas", icono: "🏋️" },
];