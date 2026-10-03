import { useState } from 'react'
import { useProduct } from '../hooks/useProduct';

export default function FiltersBar() {
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('')
    const { productos } = useProduct({ search, min: minPrice })

    return (
        <div className=''>
            <form className='mx-auto w-1/2  flex justify-center gap-2'  >
                <input type="text" placeholder="Titulo..." className='p-2 w-full rounded border border-amber-50 text-amber-50' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <input placeholder="Precio Min..." className='p-2 w-full rounded border border-amber-50 text-amber-50' type="number"
                    value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
                />
                <button className='rounded px-6 py-2 hover:bg-indigo-900 transition-colors bg-indigo-500 text-white cursor-pointer ' >Buscar</button>
            </form>
        </div>
    )
}
