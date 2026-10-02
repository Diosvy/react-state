import {useState, useMemo, useEffect, useCallback } from "react"
import { useLoaderData, useSearchParams} from "react-router";

import {useAuthStore} from '../store/useAuthStore'
import {useFavoritesUserItems} from '../store/useCartStore'

export function useProduct({search}){
    const { productos } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQ = searchParams.get('q') ?? '';

        if (search === currentQ) return;

        const id = setTimeout(() => {
            setSearchParams(search ? { q: search } : {}, { replace: true })
        }, 300);

        return () => clearTimeout(id);

    }, [search, searchParams, setSearchParams])

    return {
        productos,
    }
}


export function usefilteredFavoriteProducts (){
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

