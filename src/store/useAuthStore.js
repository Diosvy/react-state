import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(persist(
    (set)=>({
        user: null,

        login: (name, password)=> set({
            user: {name, password, rol: 'admin'}
        }),

        logout: ()=> set({
            user: null
        }),

        changeName: (newName)=> set((state)=>({
            user: state.user ? {...state.user, name: newName} : null
        }))

    })
    ,{
        name: 'auth-store'
    }
))

export const useIsLoggedIn = () => useAuthStore((state)=> state.user != null)