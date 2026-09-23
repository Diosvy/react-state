import { ShoppingCart } from 'lucide-react';

import { NavLink } from "react-router"

import { useCartStore, useTotalItems } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';

export default function CartIcon() {

    const user = useAuthStore((state) => state.user)
    const count = useTotalItems(user?.name);


    return (
        <NavLink
            to={'/checkout'}
            aria-label={`Carrito de compras, ${count} productos`}
            className={`relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors`}
        >
            <ShoppingCart className="w-5 h-5 text-slate-600 dark:text-neutral-400" />

            {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 flex items-center justify-center text-[10px] font-bold text-white bg-indigo-500 rounded-full leading-none">
                    {count > 99 ? '99+' : count}
                </span>
            )}
        </NavLink>
    );
}