import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Projects from './pages/Project'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/project" element={<Projects />} />
    </Routes>
  )
}

export default App
