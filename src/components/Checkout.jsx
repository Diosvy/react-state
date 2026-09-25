import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore, useTotalPrice, useTotalItems, useUserItems } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';

import { Link } from "react-router"

export default function Checkout() {

    const user = useAuthStore((state) => state.user)


    const items = useUserItems(user.name) || []

    const setItems = useCartStore((state) => state.setItems)

    const add = useCartStore((state) => state.add);
    const del = useCartStore((state) => state.delete);

    const disminuir = useCartStore((state) => state.disminuir);

    const subtotal = useTotalPrice(user.name);

    const envio = subtotal > 0 ? 5 : 0;
    const total = subtotal + envio;

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-neutral-950 px-4">
                <div className="text-center max-w-md">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-neutral-800 mb-6">
                        <ShoppingBag className="w-10 h-10 text-slate-400 dark:text-neutral-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Tu carrito está vacío
                    </h2>
                    <p className="text-slate-500 dark:text-neutral-400 mb-6">
                        Agrega algunos productos para continuar con tu compra.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Seguir comprando
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                        Tu carrito
                    </h1>
                    <p className="text-slate-500 dark:text-neutral-400 mt-2">
                        {items.length} {items.length === 1 ? 'producto' : 'productos'} en tu carrito
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Lista de productos */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => {
                            const precio = parseFloat(String(item.price).replace('$', '')) || 0;
                            const subtotalItem = precio * item.stock;

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white dark:bg-neutral-900 rounded-2xl border border-slate-200 dark:border-neutral-800 p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
                                >
                                    {/* Imagen */}
                                    <div className="w-full sm:w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-neutral-800">
                                        <img
                                            src={item.img}
                                            alt={item.alt || item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">

                                        <div className="flex justify-between gap-4 mb-2">

                                            <h3 className="font-semibold text-lg text-slate-900 dark:text-white truncate">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => del(item.id, user.name)}
                                                aria-label={`Eliminar ${item.name}`}
                                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors shrink-0"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-neutral-400 mb-4">
                                            ${item.price} c/u
                                        </p>

                                        <div className="flex items-center justify-between gap-4">
                                            {/* Contador */}
                                            <div className="flex items-center gap-1 bg-slate-100 dark:bg-neutral-800 rounded-xl p-1">
                                                <button
                                                    onClick={() => disminuir(item.id, user.name)}
                                                    aria-label="Disminuir cantidad"
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-neutral-700 text-slate-600 dark:text-neutral-300 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 text-center font-medium text-slate-900 dark:text-white">
                                                    {item.stock}
                                                </span>
                                                <button
                                                    onClick={() => add(item, user.name)}
                                                    aria-label="Aumentar cantidad"
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-neutral-700 text-slate-600 dark:text-neutral-300 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Subtotal item */}
                                            <p className="font-bold text-lg text-slate-900 dark:text-white">
                                                ${subtotalItem.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Resumen */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-slate-200 dark:border-neutral-800 p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                Resumen del pedido
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-neutral-400">Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        ${subtotal}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 dark:text-neutral-400">Envío</span>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        ${envio.toFixed(2)}
                                    </span>
                                </div>
                                <div className="border-t border-slate-200 dark:border-neutral-800 pt-3 flex justify-between">
                                    <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                                    <span className="font-bold text-xl text-slate-900 dark:text-white">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors mb-3"
                            >
                                Finalizar compra
                            </button>
                            <button
                                type="button"
                                onClick={() => setItems(user.name)}
                                className="w-full py-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium rounded-xl transition-colors mb-3 inline-flex items-center justify-center gap-2"
                            >
                                <Trash2 className="w-5 h-5" />
                                Limpiar carrito
                            </button>

                            <p className="text-xs text-center text-slate-500 dark:text-neutral-400">
                                Impuestos calculados al finalizar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}