import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(persist(
    (set, get)=>({
        user: null,

        users: [],

        error: null,

        logup: (name, password)=> {
            const state = get() //obtener el estado actual
            
            const exist = state.users.find((i)=>i.name === name)

            if(exist){
                set({error: 'El usuario ya existe'})
                return {error: 'El usuario ya existe'}
            }

            set((state) => ({
                user: { name, password },
                users: [...state.users, { name, password }],
                error: null,
            }));


            return {error: null}
        },

        login: (name, password)=> {

            const state = get()

            if (state.user) set({ user: state.user });

            const user = state.users.find((i) => i.name === name)
            
            if(!user){
                set({ user: null, error: 'Usuario no encontrado' })
                return { user: null, error: 'Usuario no encontrado' }
            }

            if (user.password !== password) return { user: null, error: 'Contraseña incorrecta' };

            set({
                user: {name, password},
                error: null
            })

            return {error: null}
        },

        logout: ()=> set({
            user: null
        }),


    })
    ,{
        name: 'auth-store'
    }
))

export const useIsLoggedIn = () => useAuthStore((state)=> state.user != null)

