import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './Pages/ForgotPassword'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import EnterCode from './Pages/EnterCode'
import ResetPassword from './Pages/ResetPassword'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/code" element={<EnterCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
