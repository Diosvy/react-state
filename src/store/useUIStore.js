import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUIStore = create(
    persist(
        (set, get)=>({
             
            defaultTheme: 'light',
            publicTheme: 'light',
            userThemeList: {},

            togglePublicTheme: () => {
                set((state)=>({
                    publicTheme: state.publicTheme === 'light' ? 'dark' : 'light'
                }))
            },
            
            toggleUserTheme: (userName) => set((state)=>{
                if(!userName) return state 

                const current = state.userThemeList[userName] || 'light'

                const next = current === 'light' ? 'dark' : 'light'
                
                
                return {
                    userThemeList: {
                        ...state.userThemeList,
                        [userName]: next
                    }
                }
            })
                

        })
        , 
        {
            name: 'ui-store'
        }
    )
    
)

export const useUserTheme = ( userName ) => useUIStore((state) => state.userThemeList[userName])