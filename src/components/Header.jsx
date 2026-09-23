// src/components/Header.jsx
import { LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router"
import { useNavigate } from 'react-router';


import { useUIStore } from "../store/useUIStore"
import { useAuthStore, useIsLoggedIn } from "../store/useAuthStore";

import { CircleUserRound, UserRoundPlus } from 'lucide-react';

import CartIcon from "./CartIcon";




export default function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const theme = useUIStore((state) => state.theme)
    const toggleTema = useUIStore((state) => state.toggleTheme)
    const toggleSidebar = useUIStore((state) => state.toggleSidebar)

    const isLoggedIn = useIsLoggedIn()

    const logout = useAuthStore((state) => state.logout)
    const user = useAuthStore((state) => state.user)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setOpen(false);
        navigate('/login');  // 👈 redirige al login
    };

    return (
        <header id="_header_breadcrumb_nav_h12_001" className={`relative bg-white dark:bg-transparent`}>
            {/* Main Header */}
            <div className="border-b border-slate-100 dark:border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a
                            data-motion="logo"
                            href="#"
                            className="flex items-center"
                            style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
                        >
                            <img
                                src="https://cdn.ln-cdn.com/image/placeholder-logo-full.png"
                                className="h-8"
                                alt="Logo"
                            />
                        </a>

                        {/* Navigation */}
                        <nav
                            data-motion="nav"
                            className="hidden lg:flex items-center gap-6"
                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                        >
                            <NavLink
                                to={'/'}
                                className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Tienda
                            </NavLink>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Mi Perfil
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Favoritos
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Mis Pedidos
                            </a>

                        </nav>

                        {/* Right Actions */}
                        <div
                            data-motion="actions"
                            className="flex items-center gap-2"
                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                        >
                            <CartIcon />
                            <button
                                data-motion="button"
                                onClick={toggleTema}
                                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                                style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                            >
                                <svg
                                    className="w-5 h-5 text-slate-600 dark:text-neutral-400 hidden dark:block"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                                <svg
                                    className="w-5 h-5 text-slate-600 dark:text-neutral-400 block dark:hidden"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            </button>

                            <div
                                className="w-9 h-9 flex items-center justify-center rounded-lg"
                            >
                                {
                                    isLoggedIn ? (

                                        <div
                                            ref={menuRef}
                                            className="relative"
                                            onMouseEnter={() => setOpen(true)}
                                            onMouseLeave={() => setOpen(false)}
                                        >
                                            {/* Botón del avatar */}
                                            <button
                                                data-motion="button"
                                                onClick={() => setOpen((prev) => !prev)}
                                                aria-label="Menú de usuario"
                                                aria-expanded={open}
                                                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800"
                                                style={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                                            >
                                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-semibold uppercase">
                                                    {user.name[0]}
                                                </span>
                                            </button>

                                            {/* Menú desplegable */}
                                            <div
                                                className={`absolute right-0 top-full  w-56 origin-top-right rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-lg transition-all duration-200 ${open
                                                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                                                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                                                    }`}
                                            >
                                                {/* Nombre completo */}
                                                <div className="px-4 py-3 border-b border-slate-100 dark:border-neutral-800">
                                                    <p className="text-xs text-slate-500 dark:text-neutral-500 mb-0.5">
                                                        Sesión iniciada como
                                                    </p>
                                                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                                        {user.name}
                                                    </p>
                                                </div>

                                                {/* Botón cerrar sesión */}
                                                <button
                                                    type="button"
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-b-xl"
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    Cerrar sesión
                                                </button>
                                            </div>
                                        </div>


                                    ) : (
                                        <UserRoundPlus className="w-5 h-5 text-slate-600 dark:text-neutral-400" />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}