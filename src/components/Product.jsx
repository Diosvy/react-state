export default function Product() {
    return (
        <section
            id="_product_360_view_v10_001"
            className="py-20 sm:py-24 bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-neutral-950"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        data-motion="viewer"
                        className="relative"
                        style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                    >
                        <div className="aspect-square rounded-3xl bg-white dark:bg-neutral-900 shadow-xl overflow-hidden relative">
                            <img
                                data-motion="image"
                                id="productImage"
                                src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Drone"
                                className="w-full h-full object-contain p-8"
                                style={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-slate-900/80 dark:bg-white/80 rounded-full">
                                <svg
                                    className="w-4 h-4 text-white dark:text-neutral-900"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-white dark:text-neutral-900">
                                    Drag to rotate
                                </span>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                            <div className="text-center">
                                <span className="text-xl">360°</span>
                                <span className="text-xs block">VIEW</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span
                            data-motion="badge"
                            className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4"
                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                        >
                            Pro Series
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                            <span data-animate="heading" style={{ opacity: 1 }}>
                                <span
                                    className="motion-word"
                                    style={{ display: "inline-block", opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                >
                                    SkyMaster
                                </span>{" "}
                                <span
                                    className="motion-word"
                                    style={{ display: "inline-block", opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                >
                                    Pro
                                </span>{" "}
                                <span
                                    className="motion-word"
                                    style={{ display: "inline-block", opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                >
                                    Drone
                                </span>
                            </span>
                        </h1>
                        <p className="text-slate-600 dark:text-neutral-400 mb-6">
                            <span data-animate="text" style={{ opacity: 1 }}>
                                {[
                                    "Professional-grade",
                                    "aerial",
                                    "photography",
                                    "drone",
                                    "with",
                                    "4K",
                                    "camera,",
                                    "45-minute",
                                    "flight",
                                    "time,",
                                    "and",
                                    "intelligent",
                                    "obstacle",
                                    "avoidance.",
                                ].map((word, i) => (
                                    <span
                                        key={i}
                                        className="motion-word"
                                        style={{ display: "inline-block", opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                    >
                                        {word}{" "}
                                    </span>
                                ))}
                            </span>
                        </p>
                        <div className="flex items-baseline gap-3 mb-8">
                            <span
                                data-motion="price"
                                className="text-3xl font-bold text-slate-900 dark:text-white"
                                style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                            >
                                $1,299
                            </span>
                            <span className="text-slate-400 line-through">$1,499</span>
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                Save $200
                            </span>
                        </div>
                        <div
                            data-motion="specs"
                            className="grid grid-cols-2 gap-4 mb-8"
                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                        >
                            <div className="bg-slate-100 dark:bg-neutral-800 rounded-xl p-4">
                                <p className="text-sm text-slate-500 dark:text-neutral-400 mb-1">Flight Time</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">45 min</p>
                            </div>
                            <div className="bg-slate-100 dark:bg-neutral-800 rounded-xl p-4">
                                <p className="text-sm text-slate-500 dark:text-neutral-400 mb-1">Camera</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">4K 60fps</p>
                            </div>
                            <div className="bg-slate-100 dark:bg-neutral-800 rounded-xl p-4">
                                <p className="text-sm text-slate-500 dark:text-neutral-400 mb-1">Range</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">10 km</p>
                            </div>
                            <div className="bg-slate-100 dark:bg-neutral-800 rounded-xl p-4">
                                <p className="text-sm text-slate-500 dark:text-neutral-400 mb-1">Weight</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">895g</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-6">
                            <a
                                data-motion="button"
                                href="#"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
                                style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Add to Cart
                            </a>
                            <button
                                data-motion="button"
                                type="button"
                                aria-label="Add to wishlist"
                                className="p-4 border border-slate-300 dark:border-neutral-700 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                                style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                            >
                                <svg
                                    className="w-6 h-6 text-slate-600 dark:text-neutral-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            data-motion="features"
                            className="flex flex-wrap gap-3"
                            style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                        >
                            {[
                                "Obstacle Avoidance",
                                "GPS Return Home",
                                "Follow Me Mode",
                                "3-Axis Gimbal",
                            ].map((feature, i) => (
                                <span
                                    key={i}
                                    data-motion="badge"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-neutral-800 rounded-full text-sm text-slate-600 dark:text-neutral-400"
                                    style={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
                                >
                                    <svg
                                        className="w-4 h-4 text-indigo-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}