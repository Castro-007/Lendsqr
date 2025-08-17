import { useState } from 'react'
import Login from './pages/Auth/Login/login'
import Forgetpassword from './pages/Forget-password/Forget-password'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Forgetpassword' element={<Forgetpassword />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App