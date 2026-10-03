import {useState, useMemo, useEffect, useCallback } from "react"
import { useLoaderData, useSearchParams} from "react-router";

import {useAuthStore} from '../store/useAuthStore'
import {useFavoritesUserItems} from '../store/useCartStore'

export function useProduct({search, min}){
    
    const [searchParams, setSearchParams] = useSearchParams();

    const urlQ = searchParams.get('q') ?? '';
    const urlMin = searchParams.get('min') ?? '';

    const setParams = useCallback((updates)=>{

    setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        Object.entries(updates).forEach(([key, value]) =>{
            if(value === "" || value === null || value === false || value <= 0){
                next.delete(key)
            }else{
                next.set(key, String(value))
            }
        });
        return next;
    }, {replace: true})}, [setSearchParams]);

    

    
    

    // ✅ Input de búsqueda.
    useDebunceParam(search, urlQ, 'q', setParams);

    // ⬜ Input de precio mínimo (min).
    useDebunceParam(min, urlMin, 'min', setParams);

    // ⬜ Input de precio máximo (max).

    // ⬜ Checkbox de envío gratis (freeDelivery).

    // ⬜ Select de ordenación (sort).
}


export function usefilteredFavoriteProducts(){
    const user = useAuthStore((state) => state.user)
    const favoritesItems = useFavoritesUserItems(user?.name)

    const filterBy = useCallback((search) => {
        return search
                ? favoritesItems.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
                : favoritesItems;   
    }, [favoritesItems])  

    return {
        filterBy
    }
}


export function useDebunceParam(value, urlValue, key, setParams, delay = 300){
    useEffect(() => {
        if(value === urlValue) return

        const id = setTimeout(() => setParams({[key]: value}, delay) )

        return () => clearTimeout(id)

    }, [value, urlValue, key, setParams, delay])
}


