import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow';

export const useCartStore = create(
    persist(
        (set, get)=>({
            items: {},

            favoritesItems: {},

            toggleFavoriteItem: (newProduct, userName) => (
                set((state)=>{
                    if(!userName ) return state
                        
                    const userItems = state.favoritesItems[userName] || []

                    const exist = userItems.some((p) => p.id === newProduct.id)

                    return {
                        favoritesItems:{
                            ...state.favoritesItems,
                            [userName]: exist ? userItems.filter((p) => p.id !== newProduct.id) : [...userItems, {...newProduct}]
                        }
                    }
                })
            ),

            add: (product, userName)=>set((state)=>{
                if(!userName) return state

                const userItems = state.items[userName] || []
                const existing = userItems.find((p) => p.id === product.id)

                if(existing){
                    return{
                        items: {
                            ...state.items,
                            [userName]: userItems.map(( p ) => p.id === product.id ? {...p, quantity: p.quantity + 1} : p )
                        }
                    }
                }

                return {
                    items: {
                        ...state.items,
                            [userName] : [
                                ...userItems,
                                {
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img,
                                    delivery: product.delivery,
                                    quantity: 1
                                }
                            
                        ]                         
                    }       
                }
            }),

            delete: (id, userName)=>set((state)=>{
                if(!userName) return state
                const userItems = state.items[userName] || []

                return{
                    items:{
                        ...state.items,
                        [userName]: userItems.filter((p) => p.id !== id)
                    },
                };
            }),

            clearCart: (userName) => set((state)=>{
                if(!userName) return state

        
                return {
                    items:{
                        ...state.items,
                        [userName]: []
                    }
                }  
            }),

            decrease: (id, userName)=> set((state)=>{
                
                if(!userName) return state
                const userItems = state.items[userName] || []

                return {
                    items: { 
                        ...state.items,
                        [userName]: userItems.map((p)=> p.id === id ? {...p, quantity: p.quantity - 1 } : p).filter((p) => p.quantity > 0)
                    } 
                }
            }),


        }),
        {
            name: "cart-store"
        }
))



export const useUserItems = (userName) => useCartStore(useShallow((state)=> state.items[userName] || []))

export const useFavoritesUserItems = (userName) => useCartStore(useShallow((state)=> state.favoritesItems[userName] || [] ))

export const useTotalPrice = (userName) => useUserItems(userName).reduce((acc, i)=> acc + i.quantity * parseFloat(String(i.price).replace('$', '')), 0)

export const useTotalItems = (userName) => useUserItems(userName).reduce((acc, i)=> acc + i.quantity, 0)



