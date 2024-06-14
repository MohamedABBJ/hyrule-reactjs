
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemsPage } from './pages/items'
import ItemsBtn from './components/anims/itemsBtn'
import HomePage from './pages/home.tsx'



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
