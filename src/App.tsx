import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import Data from './pages/Data'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/c' element={<Data/>} />
       
      </Routes>
    </>
  )
}

export default App
