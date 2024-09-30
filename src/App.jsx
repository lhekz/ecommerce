import { useState } from 'react'
// import React from 'react'

import Shop from './components/shop/Shop'

import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Singleproduct from './components/singleproduct/Singleproduct'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    
      <div>
         


          <Routes>
         
     
        <Route path='/shop' element={<Shop />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/blog' element={<Blog />} /> 
        <Route path='/singleProduct' element={<Singleproduct />} /> 
      

        </Routes> 
    </div>
  )
}

export default App
