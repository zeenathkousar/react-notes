import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Products from './Products'

function Navigation() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/products/:num" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
