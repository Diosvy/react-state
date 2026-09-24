import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow';

export const useCartStore = create(
    persist(
        (set, get)=>({
            items: [],

            favoritesItems: [],

            toggleFavoriteItem: (newProduct) => {
                const state = get()

                if(state.favoritesItems.length === 0){
                    return set({
                        favoritesItems: [newProduct]
                    })
                }

                const contain = state.favoritesItems.includes(newProduct)

                if(contain){
                    return set({
                        favoritesItems: state.favoritesItems.filter((product) => product !== newProduct)
                    })
                    
                }
                return set({
                    favoritesItems: [...state.favoritesItems, newProduct]
                })
                
            },

            add: (product, userName)=>set((state)=>{
                const existing = state.items.find((i)=>i.id === product.id && i.userName === userName )

                if(existing){
                    return{
                        items: state.items.map((i)=>i.id === product.id && i.userName === userName ? {...i, stock: i.stock + 1} : i )
                    }
                }
                
                return{
                    items: [
                        ...state.items,
                        {
                            userName,
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            img: product.img,
                            delivery: product.delivery,
                            stock: 1
                        }
                    ]
                }
            }),

            delete: (id, userName)=>set((state)=>({
                items: state.items.filter((i)=>i.id != id || i.userName !== userName)
            })),

            setItems: (userName)=> set((state)=>({items: state.items.filter((i)=>i.userName!=userName)})),

            disminuir: (id, userName)=>set((state)=>{
                return{
                    items: state.items.map((i)=> i.id === id && i.userName === userName ? {...i, stock: i.stock - 1} : i).filter((i)=>i.stock > 0)
                }
            }),


        }),
        {
            name: "cart-store"
        }
))



export const useTotalPrice = () => useCartStore((state)=> state.items.reduce((acc, i)=> acc + i.stock * i.price, 0))

export const useItemUser = (name) => useCartStore(useShallow((state)=> state.items.filter((i)=>i.userName === name)))

export const useTotalItems = (name) => useItemUser(name).reduce((acc, i)=> acc + i.stock, 0)

export const useGetItemsByIds = (ids) => useCartStore(useShallow((state) => ids.map(( id ) => state.items.find(( item ) => item.id === id))))