import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login.jsx'
import { NavLink, Route, Routes } from 'react-router-dom'
import Register from './register.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {console.log('App Rendering')}
    
    <div>
      <NavLink to='api/login'>Login</NavLink>
    </div>
    <div>
      <NavLink to='api/register'>Registration</NavLink>
    </div>
    <Routes>
      <Route path='/api/login' element={<Login></Login>}></Route>
      <Route path='/api/register' element={<Register></Register>}></Route>
    </Routes>
    </div>
  )
}

export default App
