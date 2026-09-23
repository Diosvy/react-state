import { redirect } from 'react-router'

import { useAuthStore } from '../store/useAuthStore'

export const requireAuth = () => {
    const user = useAuthStore.getState().user

    if(!user){
        return redirect('/login')
    }
    return null
}

