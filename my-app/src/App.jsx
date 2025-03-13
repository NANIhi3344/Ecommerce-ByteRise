import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Signup } from './Component/signup'
import { Home } from './page/Home'
import { ProductForm } from './Component/Productform'
import { Productcardseller } from './Component/productcardforseller'
import Singlecard from './Component/Singlecard'
import { Login } from './Component/Login'
import CreateAddress from './Component/Address'
import SelectAddress from './page/Selectaddress'
import OrderConfirmation from './page/Orderconformation'
import MyOrdersPage from './page/Orderhistory'


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
   <Route path='/Address' element={<CreateAddress/>}/>
   <Route path='/selectaddress' element={<SelectAddress/>} />
   <Route path='order' element={<OrderConfirmation/>}/>
   <Route path='/orderhistory' element={<MyOrdersPage/>}/>
    </Routes>
    </>
    
  )
}

export default App;

