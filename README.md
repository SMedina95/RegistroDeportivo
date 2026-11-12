# 🏃 Registro Deportivo

## 📌 Descripción

Aplicación web para registrar y hacer seguimiento de actividades deportivas. Permite agregar, visualizar y eliminar actividades (correr, ciclismo, natación, etc.), con autenticación simulada y persistencia en el backend.

## 🌐 Demo en Vivo

Puedes probar la aplicación en:

**https://registro-deportivo.vercel.app**



## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 18, Vite, React Router, Tailwind CSS, React Hook Form, Zod.
- **Backend:** Node.js, Express (desplegado en Vercel Services / Railway / o simulado).
- **Autenticación:** Simulada con Context API y localStorage.
- **Despliegue:** Vercel.

## 📂 Estructura del Proyecto
RegistroDeportivo/
├── backend/ → Servidor Express (API REST)
├── public/
├── src/
│ ├── components/ → Componentes reutilizables (FormularioActividad, ListaActividades)
│ ├── context/ → AuthContext
│ ├── data/ → Datos de ejemplo
│ ├── hooks/ → useActividades
│ ├── pages/ → Home, Profile, Login
│ ├── validations/ → actividadSchema (Zod)
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── vercel.json
└── README.md

