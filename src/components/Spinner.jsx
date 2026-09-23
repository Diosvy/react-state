export default function Spinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
                <p className="text-slate-500 dark:text-neutral-400 text-sm">
                    Cargando productos...
                </p>
            </div>
        </div>
    );
}