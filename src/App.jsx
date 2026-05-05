import React from 'react'
import Login from './content/Login'
import './content/Login.css'
import './content/Register.css'
import Register from './content/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}> </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  )
}
export default App