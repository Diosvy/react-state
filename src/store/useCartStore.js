import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow';

export const useCartStore = create(
    persist(
        (set, get)=>({
            items: [],

            favoritesItems: [],

            toggleFavoriteItem: (idF) => {
                const state = get()

                console.log("Viendo el id q llega", idF)

                if(state.favoritesItems.lenght === 0){

                    console.log('entro al if')

                    const product = state.items.find((i) => i.id === idF)
                
                    return set({
                        favoritesItems: [...state.favoritesItems, product]
                    })
   
                }
                 console.log('salio del if')

                const productFavorite = state.favoritesItems.find((i) => i.id === idF)

                if(productFavorite){
                    set({
                        favoritesItems: state.favoritesItems.filter((i) => i.id != productFavorite.id)
                    })
                    return null
                }

                const product = state.items.find((i) => (i.id === idF))
                
                set({
                    favoritesItems: [...state.favoritesItems, product]
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

export const useTotalItems = (name) => useItemUser(name).reduce((acc, i)=>acc + i.stock, 0)