// src/components/Layout.jsx
import { useUIStore } from '../store/useUIStore'
import Header from './Header'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router';

export default function Layout({ children }) {

    const theme = useUIStore((state) => state.theme)
    const sidebarOpen = useUIStore((state) => state.sidebarOpen)

    return (
        <div className={`app tema-${theme} ${theme}`}>
            <Header />
            <div className="cuerpo">
                {sidebarOpen && <Sidebar />}
                <main className="contenido bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-neutral-950 "><Outlet /></main>
            </div>
        </div>
    )
}