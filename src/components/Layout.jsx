// src/components/Layout.jsx
import { useUIStore, useUserTheme } from '../store/useUIStore'
import { useAuthStore } from '../store/useAuthStore';

import Header from './Header'

import Spinner from './Spinner';

import { Outlet, useNavigation } from 'react-router';

export default function Layout({ children }) {

    const user = useAuthStore((state) => state.user)

    const navigation = useNavigation()

    const userTheme = useUserTheme(user?.name)

    const publicTheme = useUIStore((state) => state.publicTheme)


    const theme = userTheme ? userTheme : publicTheme




    return (
        <div className={`app tema-${theme} ${theme}`}>
            <Header />
            <div className="cuerpo ">
                <main className="min-h-full contenido bg-linear-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-neutral-950 ">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}