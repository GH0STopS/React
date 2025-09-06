import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Login() {
    const [username, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage]=useState('');
    const [isLoggenIn, setIsLoggedIn]=useState(false);

    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token){
            setIsLoggedIn(true);
            setMessage("Already In!");
        }
    },[])
    const handlelogin=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://127.0.0.1:8000/api/login/",{
                username,
                password,
            });
            localStorage.setItem('token',res.data.access);
            setIsLoggedIn(true);
            setMessage('Login Successful!');
            alert({message})
            console.log(username+" "+password)
        } catch (err) {
            setMessage(`${err} Invalid Credentials`);
            alert({message})
        }
    }
  return (
    <div style={{ maxWidth: "300px", margin: "auto", marginTop: "100px" }}>
      {console.log('Login Rendering')}
      <h2>{isLoggenIn ? "Welcome!" : "Login"}</h2>

      
        {!isLoggenIn && (<form onSubmit={handlelogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          /><br/><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br/><br/>
          <button type="submit">Login</button>
        </form>)}
      
      <p>{message}</p>
    </div>
  )
}

export default Login
