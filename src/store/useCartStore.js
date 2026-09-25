import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow';

export const useCartStore = create(
    persist(
        (set, get)=>({
            items: [],

            favoritesItems: [],

            toggleFavoriteItem: (newProduct, userName) => {
                const state = get()

                if(!userName){
                    console.log('falta usuario', userName)
                    return null
                }

                console.log('viendo el userName', userName)

                const userItems = state.favoritesItems[userName] || []

                const contain = userItems.includes(newProduct)

                if(contain){
                    return set({
                        favoritesItems: {
                            ...state.favoritesItems,
                            [userName]: userItems.filter((product) => product !== newProduct)
                        }
                    })
                    
                }
                return set({
                    favoritesItems: {
                        ...state.favoritesItems,
                        [userName]: [
                            ...userItems,
                                newProduct
                        ]
                    }
                })
                
            },

            add: (product, userName)=>set((state)=>{
                if(!userName) return state

                const userItems = state.items[userName] || []
                const existing = userItems.find((p) => p.id === product.id)

                if(existing){
                    return{
                        items: {
                            ...state.items,
                            [userName]: userItems.map(( p ) => p.id === product.id ? {...p, stock: p.stock + 1} : p )
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
                                    stock: 1
                                }
                            
                        ]                         
                    }       
                }
            }),

            delete: (id, userName)=>set((state)=>({
                items: {
                    ...state.items,
                        [userName]: state.items[userName].filter((p)=>p.id !== id)
                }
            })),

            setItems: (userName)=> set((state)=>({items: {...state.items, [userName]: []}})),

            disminuir: (id, userName)=> set((state)=>(
                {
                    items: { 
                        ...state.items,
                        [userName]: state.items[userName].map((p)=>p.id === id ? {...p, stock: p.stock - 1 } : p).filter((p)=>p.stock > 0)
                    } 
                }
            )),


        }),
        {
            name: "cart-store"
        }
))



export const useUserItems = (userName) => useCartStore(useShallow((state)=> state.items[userName] || []))

export const useFavoritesUserItems = (userName) => useCartStore(useShallow((state)=> state.favoritesItems[userName] || []))

export const useTotalPrice = (userName) => useUserItems(userName).reduce((acc, i)=> acc + i.stock * i.price, 0)

export const useTotalItems = (userName) => useUserItems(userName).reduce((acc, i)=> acc + i.stock, 0) || []



