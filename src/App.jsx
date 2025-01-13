import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}

export default App
