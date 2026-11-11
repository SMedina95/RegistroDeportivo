# 🚴 Aplicación de Registro de Actividades Deportivas

## 📌 Descripción del Proyecto

Esta aplicación web permitirá a los usuarios registrar y hacer seguimiento de sus actividades deportivas (correr, nadar, ciclismo, etc.). El objetivo es ofrecer una interfaz intuitiva para:

- **Registrar actividades:** Añadir una nueva actividad con tipo, duración, distancia y fecha.
- **Visualizar historial:** Ver una lista de todas las actividades registradas.
- **Filtrar y ordenar:** Buscar actividades por tipo o fecha.
- **Estadísticas:** Ver un resumen del total de kilómetros recorridos y tiempo invertido.

Este proyecto se desarrollará como parte del módulo final del curso, aplicando los conocimientos de React, React Router, manejo de estado y consumo de APIs.

## 🎯 Objetivos

- Aplicar los conceptos de React (componentes, hooks, context, rutas).
- Implementar un CRUD completo (Crear, Leer, Actualizar, Eliminar).
- Utilizar `localStorage` o un backend (Express) para persistir los datos.
- Desplegar la aplicación en Vercel.

## 👥 Equipo de Trabajo

Stephanie Elizabeth Medina Ponce

## 📋 Acuerdos de Trabajo

### Metodología

Se utilizará una adaptación de **SCRUM** para organizar el trabajo:

- **Sprints semanales:** Cada semana se define un conjunto de tareas a completar.
- **Reuniones diarias (Daily Stand-up):** Breve actualización del progreso (si es en equipo).
- **Revisión al final de cada sprint:** Se revisa lo completado y se ajustan las prioridades.

### Herramientas

- **Control de versiones:** Git y GitHub.
- **Gestión de tareas:** Trello o GitHub Projects.
- **Comunicación:** WhatsApp o Discord (si es en equipo).
- **Editor de código:** VS Code.

### Ramas de Git

- `main`: Rama principal (versión estable).
- `parte-1`, `parte-2`, etc.: Ramas para cada entrega.
- `feature/nombre-funcionalidad`: Ramas para funcionalidades específicas (si es necesario).

### Convención de Commits

- `feat: descripción` → Nueva funcionalidad.
- `fix: descripción` → Corrección de errores.
- `docs: descripción` → Cambios en documentación.
- `refactor: descripción` → Refactorización de código.

## 📂 Estructura del Proyecto
RegistroDeportivo/
├── public/
├── src/
│ ├── components/ → Componentes reutilizables (botones, tarjetas, etc.)
│ ├── pages/ → Páginas principales (Inicio, Registro, Historial)
│ ├── context/ → Contextos globales (estado de actividades)
│ ├── hooks/ → Custom hooks (useLocalStorage, useActividades)
│ ├── data/ → Datos de ejemplo y constantes
│ ├── App.jsx → Componente principal
│ ├── main.jsx → Punto de entrada
│ └── index.css → Estilos globales
├── index.html
├── package.json
├── README.md
└── vite.config.js