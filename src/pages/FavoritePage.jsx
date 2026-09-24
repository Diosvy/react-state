import { ShoppingBag, ArrowLeft, PlusCircle, Heart } from 'lucide-react'
import { Link } from 'react-router'

import { useCartStore, useGetItemsByIds } from '../store/useCartStore'

export default function FavoritePage() {

    const favoritesItems = useCartStore((state) => (state.favoritesItems))
    const toggleFavorite = useCartStore((state) => state.toggleFavoriteItem)

    return (
        <section
            id="_productlist_bordered_cards_delivery_001"
            className="py-2 h-full "
        >
            <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full  ">
                <h2 className="font-semibold text-3xl text-slate-900 dark:text-white  text-center ">
                    <span data-animate="heading" style={{ opacity: 1 }} className='block' >
                        {["Tus ", "Favoritos"].map((word, i) => (
                            <span
                                key={i}
                                className="motion-word"
                                style={{
                                    display: "inline-block",
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                    filter: "blur(0px)",
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </span>

                </h2>
                {
                    favoritesItems.length !== 0 && (
                        <p className="font-normal text-center text-slate-500 dark:text-neutral-400  text-md mb-3">
                            {favoritesItems.length} {favoritesItems.length === 1 ? 'producto' : 'productos'} en tus favoritos
                        </p>
                    )
                }


                {favoritesItems.length === 0 && (
                    <div className="flex-1 flex items-center justify-center  ">
                        <div className="text-center max-w-md">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-neutral-800 mb-6">
                                <ShoppingBag className="w-10 h-10 text-slate-400 dark:text-neutral-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                No tienes productos favoritos
                            </h2>
                            <p className="text-slate-500 dark:text-neutral-400 mb-6">
                                Márcalos para encontrarlos más rápidos.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver a la tienda
                            </Link>
                        </div>
                    </div>)
                }
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8">
                    {
                        favoritesItems.map((product, i) => (
                            <div
                                key={i}
                                className="card mx-auto w-full max-w-sm md:mr-0 group"
                                data-motion="card"
                                style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                            >
                                <div className="img-box rounded-t-3xl w-full overflow-hidden">
                                    <img
                                        data-motion="image"
                                        src={product.img}
                                        alt={product.alt}
                                        className="w-full h-64 transition-all duration-700 group-hover:scale-[1.05] rounded-t-2xl object-cover"
                                        style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
                                    />
                                </div>
                                <div className="body border border-t-0 border-slate-200 dark:border-neutral-700 w-full rounded-b-3xl p-5 shadow-xs shadow-transparent cursor-pointer transition-all duration-500 group-hover:shadow-slate-300 dark:group-hover:shadow-neutral-700 group-hover:bg-slate-50 dark:group-hover:bg-neutral-800/50 group-hover:border-slate-300 dark:group-hover:border-neutral-600">
                                    <div className='flex gap-2 justify-end' >
                                        <button
                                            type="button"
                                            onClick={() => toggleFavorite(product)}
                                            aria-label="Agregar a favoritos"
                                            className="p-1 bg-transparent cursor-pointer rounded transition-colors"
                                        >
                                            <Heart className="font-bold text-2xl text-red-600 hover:text-indigo-500 dark:hover:text-white  hover:scale-115 transition-all delay-150  " />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => add(product, user.name)}
                                            aria-label="Agregar al carrito"
                                            className="p-1 bg-indigo-500 hover:bg-indigo-900 cursor-pointer text-white rounded transition-colors"
                                        >
                                            <PlusCircle className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <h5 className="font-medium text-xl text-slate-900 dark:text-white mb-2">
                                        {product.name}
                                    </h5>
                                    <div className="flex min-[400px]:items-center justify-between gap-2 flex-col min-[400px]:flex-row">
                                        <div className="flex items-center gap-2">
                                            <h6 className="font-semibold text-xl text-slate-900 dark:text-white">
                                                ${product.price}
                                            </h6>
                                            <p className="py-1.5 px-3 rounded-full font-medium text-sm text-slate-700 dark:text-neutral-300 bg-slate-100 dark:bg-neutral-800">
                                                {product.delivery}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium text-sm text-slate-900 dark:text-white">
                                                {product.reviews}
                                            </p>
                                            <span className="flex items-center gap-1 py-1 px-2 rounded-3xl text-white font-medium text-sm bg-indigo-500">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="currentColor">
                                                    <path d="M7 1L8.5 4.5L12 5L9.5 7.5L10 11L7 9.5L4 11L4.5 7.5L2 5L5.5 4.5L7 1Z" />
                                                </svg>
                                                {product.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}