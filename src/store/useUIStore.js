import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUIStore = create(
    persist(
        (set)=>({
            theme: 'light', 
            sidebarOpen: false, 

            toggleTheme: ()=>
                set((state)=>({
                    theme: state.theme === 'light' ? 'dark' : 'light'
                })),
            
            toggleSidebar: ()=>set((state)=>({
                sidebarOpen: !state.sidebarOpen
            })),

            setSidebar: ()=>{
                set((open)=>({sidebarOpen: open}))
            }

        })
        , 
        {
            name: 'ui-store'
        }
    )
    
)