import { useState } from 'react'
import HomePage from './pages/home'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { ItemsPage } from './pages/items'



function App() {


  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/items' element={<ItemsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
