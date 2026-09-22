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
                    return {user: {name, password}, users: [...state.users, {name, password }]}
                }
                return {
                    ...state, user: null
                }               
            })


        ),

        login: (name, password)=> set((state)=>{
            const exist = state.users.findIndex((i) => i.name === name)
            if( exist!= -1){
                if(state.users[exist].password != password){
                    return {
                        ...state, 
                        user: null
                    }
                }
                return {
                    ...state,
                    user: {name, password}
                }
            }

            return {
                ...state, 
                user: null
            }
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