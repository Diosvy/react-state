import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(persist(
    (set)=>({
        user: null,

        users: [],

        logup: (name, password)=> (
            
            set((state)=>{
                const exist = state.users.find((i) => i.name === name)
                if(!exist){
                    return {user: {name, password}, users: [...state.users, {name, password }], error: null,}
                }
                return {
                    user: null,
                    error: 'El usuario ya existe' 
                }               
            })


        ),

        login: (name, password)=> set((state)=>{
            if (state.user) return { user: state.user };

            const user = state.users.find((i) => i.name === name)
            if(!user){
                return { user: null, error: 'Usuario no encontrado' }
            }
            if (user.password !== password) return { user: null, error: 'Contraseña incorrecta' };

            return {
                user: {name, password},
                error: null
            }
        }),

        logout: ()=> set({
            user: null
        }),


    })
    ,{
        name: 'auth-store'
    }
))

export const useIsLoggedIn = () => useAuthStore((state)=> state.user != null)

