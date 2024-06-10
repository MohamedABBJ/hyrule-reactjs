import { useState } from 'react'
import HomePage from './pages/home'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { ItemsPage } from './pages/items'
import EnemiesBtn from './components/anims/enemiesBtn'
import ItemsBtn from './components/anims/itemsBtn'



function App() {


  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='Anims' element={<ItemsBtn/>}/>
      <Route path='/items/:id' element={<ItemsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
