import axios from 'axios';
import React, { use, useState } from 'react'

function Register() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[message,setMessage]=useState('');
    const[isRegister,setIsRegister]=useState(false);
    const handleRegister = async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('http://127.0.0.1:8000/api/register',{
                username,
                password
            });
            setIsRegister(true)
            setMessage('Successfully registered')
            alert(`${message}`)
        } catch (err) {
            setIsRegister(false)
            setMessage(`Registration Failed ${err}`)
            alert(`${message}`)
        }
    }
  return (
      <div>
        {console.log('Rendering')}
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Register
