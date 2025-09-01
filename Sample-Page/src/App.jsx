import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='App-header'>
        <div><h2>Sample-Page</h2></div>
        <div className='App-header-link'><NavLink to='/home'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink></div>
      </header>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
