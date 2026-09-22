import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { useAuthStore, useIsLoggedIn } from './store/useAuthStore'

import Layout from './components/Layout'

import Product from './components/product'

import ProductList from './components/ProductList'

import Login from './components/Login'

import Checkout from './components/Checkout'

function App() {
  const isLoggedIn = useIsLoggedIn();


  return (
    <>
      {
        isLoggedIn ? (
          <Layout>
            {/* <Product /> */}
            <ProductList />
            <Checkout />

          </Layout>
        ) : (
          <Layout>
            <Login />
          </Layout>

        )
      }

    </>
  )
}

export default App
