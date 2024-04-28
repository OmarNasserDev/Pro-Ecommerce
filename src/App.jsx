import React, { useState, createContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



//PAGES
import Home from './pages/Home.jsx'
import Wishlist from './pages/Wishlist.jsx'
import ProductView from './pages/ProductView.jsx'
import CartView from './pages/CartView.jsx'
import Page404 from './pages/Page404.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Checkout from './pages/Checkout.jsx'
//Auth pages
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

export const WishList = createContext([])
export const Cart = createContext([])
function App() {

  const [wisharray, setWisharray] = useState(() => { return JSON.parse(localStorage.getItem('wishlist')) || [] })
  const PASS_DATA_TO_LOCALSTORAGE = () => { localStorage.setItem('wishlist', JSON.stringify(wisharray)) }

  const [cart, setCart] = useState(() => { return JSON.parse(localStorage.getItem('cart')) || [] })
  const PASS_Cart_TO_LOCALSTORAGE = () => { localStorage.setItem('cart', JSON.stringify(cart)) }

  useEffect(() => {
    PASS_DATA_TO_LOCALSTORAGE()
    PASS_Cart_TO_LOCALSTORAGE()
  }, [wisharray, cart])

  return (
    <>
      <WishList.Provider value={{ wisharray, setWisharray }}>
        <Cart.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Routes>
              <Route path='*' element={<Page404 />} />
              <Route path='/' element={<Home />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/cart' element={<CartView />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/product/:id' element={<ProductView />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </BrowserRouter>

        </Cart.Provider>
      </WishList.Provider>
    </>
  )
}

export default App
