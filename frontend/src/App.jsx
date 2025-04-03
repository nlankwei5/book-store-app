import React from 'react'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:productId' element={<ProductDetails/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/checkout' element={<Checkout/>} />
     
    </Routes>
   
  </>
  )
}

export default App