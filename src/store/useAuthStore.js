import {create} from 'zustand'
import { persist } from 'zustand/middleware'

import { hashPassword, verifyPassword } from '../utils/crypto'

export const useAuthStore = create(persist(
    (set, get)=>({
        user: null,
        token: null,
        isAuthenticated: false,

        users: [],

        register: async (name, password) => {
            // verificar si el usuario existe
            const users = get().users

            const exist = users.some((i) => i.name === name)

            console.log('existe el usuario a crear', exist)

            // si existe notificar y establecer datos a null
            if(exist) {
                set({user: null, token: null, isAuthenticated: false})
                return { error: "Error al registrarse, pruebe con otro nombre"} 
            }
            //si no existe , hashear password para agregar a la lista y hacer login
            const hashedPassword = await hashPassword(password)
            set(
                {
                    user: { name },
                    token: crypto.randomUUID(),
                    isAuthenticated: true,
                    users: [...users, {name, hashedPassword}],
                }
            )

            return {error: null}  
        },

        login: async (name, password)=> {
            const users = get().users
            const user = users.find((i) => i.name === name)
            
            if(!user){
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false
                })
                
                return {error: 'Error al iniciar sesion, por favor pruebe mas tarde'}
            }

            //verficar contrasenia
            const correctPassword = await verifyPassword(password, user.hashedPassword)

            if(!correctPassword){
                return {error: 'Error al iniciar sesion, contrasenia incorrecta'}
            }
            
            //establecer user token y isAuthenticated
            set({
                user: { name },
                token: crypto.randomUUID(),
                isAuthenticated: true
            })

            return {error: null}

        },

        logout: () => set({
            user: null,
            token: null,
            isAuthenticated: null
        }),


    })
    ,{
        name: 'auth-store'
    }
))

export const useIsLoggedIn = () => useAuthStore((state)=> state.user != null)

