// src/App.jsx
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <nav className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-emerald-400 font-bold text-lg">
                🏃 Registro Deportivo
            </Link>
            <div className="flex items-center gap-4">
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-white')}>
                    Inicio
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-white')}>
                    Mi Perfil
                </NavLink>
                <button onClick={handleLogout} className="text-red-400 hover:text-red-300 text-sm">
                    Cerrar sesión
                </button>
            </div>
        </nav>
    );
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;