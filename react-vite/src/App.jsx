import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CardContent from './Components/Cards/CardContent'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardContent2 from './Components/Cards/CardContent2'

function App() {
  const [carrito, setCarrito] = useState(0)
  const agregarAlCarrito = () => {
    setCarrito(carrito + 1)
  };
  const totalCarrito = setCarrito

  return (
    <BrowserRouter>
      <Navbar carrito={totalCarrito} />
      
      <Routes>
      <Route path='/' element={<CardContent className="card-container" agregarAlCarrito={agregarAlCarrito} />}/>
      <Route path='/pagerandom' element={<CardContent2 className="card-container" agregarAlCarrito={agregarAlCarrito} />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
