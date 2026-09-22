// src/components/Sidebar.jsx
import { useUIStore } from "../store/useUIStore"

export default function Sidebar() {
    const setSidebar = useUIStore((state) => state.setSidebar)

    return (
        <aside className="sidebar">
            <nav>
                <a href="#" onClick={() => setSidebar(false)}>Inicio</a>
                <a href="#" onClick={() => setSidebar(false)}>Productos</a>
                <a href="#" onClick={() => setSidebar(false)}>Carrito</a>
                <a href="#" onClick={() => setSidebar(false)}>Crear producto</a>
            </nav>
        </aside>
    )
}