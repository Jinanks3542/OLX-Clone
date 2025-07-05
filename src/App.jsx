import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details/Details'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details' element={<Details/>} />
    </Routes>
    </>
  )
}

export default App
