import React from 'react'
import './App.css'
import { Home } from './Components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Create from './Components/Create'
import Edit from './Components/Edit'
import ChartsMap from './Components/ChartsMap'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/charts' element={<ChartsMap/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
