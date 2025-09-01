import React from 'react'
import './App.css'

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
      </form>
    </div>
  )
}

export default Login
