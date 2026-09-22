// src/components/Header.jsx
import { useUIStore } from "../store/useUIStore"
import { useAuthStore, useIsLoggedIn } from "../store/useAuthStore";

import { CircleUserRound, UserRoundPlus } from 'lucide-react';

import CartIcon from "./CartIcon";




export default function Header() {

    const theme = useUIStore((state) => state.theme)
    const toggleTema = useUIStore((state) => state.toggleTheme)
    const toggleSidebar = useUIStore((state) => state.toggleSidebar)

    const isLoggedIn = useIsLoggedIn()

    const logout = useAuthStore((state) => state.logout)

    return (
        <header id="_header_breadcrumb_nav_h12_001" className={`relative bg-white dark:bg-neutral-950`}>
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
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Documentation
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                API Reference
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Guides
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Examples
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Community
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
                                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                {
                                    isLoggedIn ? (

                                        <button
                                            data-motion="button"
                                            onClick={logout}
                                            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                        >
                                            <CircleUserRound className="w-5 h-5 text-slate-600 dark:text-neutral-400" />
                                        </button>


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