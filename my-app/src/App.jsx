import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Signup } from './Component/signup'
import { Home } from './page/Home'
import { ProductForm } from './Component/Productform'
import { Productcardseller } from './Component/productcardforseller'
import Singlecard from './Component/Singlecard'
import { Login } from './Component/Login'


function App() {
 
 return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
   <Route path='/productform' element={<ProductForm/>}/>
   <Route path='/my-product' element={<Productcardseller/>}/>
   <Route path='/product/:id' element={<Singlecard/>}/>
    </Routes>
    </>
    
  )
}

export default App