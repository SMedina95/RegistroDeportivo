// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = username.trim();

        if (!trimmed) {
            setError('Por favor, ingresa un nombre de usuario.');
            return;
        }
        if (trimmed.length < 3) {
            setError('El nombre de usuario debe tener al menos 3 caracteres.');
            return;
        }

        login(trimmed);
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
                <h1 className="text-3xl font-bold text-center text-emerald-400 mb-6">
                    🏃 Registro Deportivo
                </h1>
                <p className="text-center text-gray-400 mb-6">Inicia sesión para continuar</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            if (error) setError('');
                        }}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                        autoFocus
                    />
                    {error && <p className="text-red-400 text-sm">⚠️ {error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                    💡 Autenticación simulada. Cualquier nombre de usuario funciona.
                </p>
            </div>
        </div>
    );
}

export default Login;