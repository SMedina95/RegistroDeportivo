// src/pages/Profile.jsx
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-emerald-400">Mi Perfil</h1>
                    <Link to="/" className="text-emerald-400 hover:underline">
                        ← Volver al inicio
                    </Link>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-2xl font-bold">
                            {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">@{user.username}</h2>
                            <p className="text-sm text-gray-400">
                                Miembro desde: {new Date(user.loginAt).toLocaleDateString('es-MX')}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-300">
                        Aquí podrás ver tus estadísticas y configurar tu perfil en futuras versiones.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;