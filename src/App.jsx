import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {
  return (
   <BrowserRouter> <Routes>
      <Route path='/' element={<Layout/> }>
      <Route index element={<Dashboard/> }/>
      <Route path='/products' element={<Product/>  }/>
      
      </Route>
  
    </Routes></BrowserRouter>
  )
}

export default App
