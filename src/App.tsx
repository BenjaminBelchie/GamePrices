import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Platform from './pages/Platform'

function App() {

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/platform" element={<Platform />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
