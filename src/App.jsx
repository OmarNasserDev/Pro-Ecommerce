import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
//PAGES
import Home from './pages/Home.jsx'
import Wishlist from './pages/Wishlist.jsx'
import ProductView from './pages/ProductView.jsx'
import Page404 from './pages/Page404.jsx'
//Auth pages
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

export const WishList = createContext([])
function App() {

  const [wisharray, setWisharray] = useState(() => { return JSON.parse(localStorage.getItem('wishlist')) || [] })
  const PASS_DATA_TO_LOCALSTORAGE = () => { localStorage.setItem('wishlist', JSON.stringify(wisharray)) }
  PASS_DATA_TO_LOCALSTORAGE()
  useEffect(() => {
    PASS_DATA_TO_LOCALSTORAGE()
  }, [wisharray])
  return (
    <>
      <WishList.Provider value={{ wisharray, setWisharray }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Page404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/product/:id' element={<ProductView />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </WishList.Provider>
    </>
  )
}

export default App
