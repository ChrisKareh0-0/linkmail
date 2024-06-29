import React, { useEffect } from 'react';
import './Login.css';



function Login() {

    useEffect(() => {
        console.log("Am I in login screen ?")
    }, [])
  return (
    <div className="ring">
    <i style={{ '--clr': '#0d0928' }}></i>
    <i style={{ '--clr': '#2d2766' }}></i>
    <i style={{ '--clr': '#5652ab' }}></i>
    <i style={{ '--clr': '#5e8ab5' }}></i>
    <i style={{ '--clr': '#61bdac' }}></i>
    <div className="login">
      <h2>Login</h2>
      <div className="inputBx">
        <input type="text" placeholder="Username" />
      </div>
      <div className="inputBx">
        <input type="password" placeholder="Password" />
      </div>
      <button className='animatedButton'>Sign In</button>
      <div className="links">
        <a href="#">Forget Password</a>
        <a href="#">Signup</a>
      </div>
    </div>
  </div>
  );
}

export default Login;
