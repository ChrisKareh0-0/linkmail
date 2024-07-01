import React, { useState } from 'react';
import logo from '../public/linkmail_logo.jpg';
import './Login.css';

function Login() {
  const [scaleRings, setScaleRings] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleSignUpClick = () => {
    setScaleRings(!scaleRings);
    setShowLogin(!showLogin);
  };

  return (
    <>
      <img style={{width: 150, height: 30, position: 'absolute', top: 25, left: 25}} src={logo} alt="logo"/>
      <div className={`ring ${scaleRings ? 'scale' : ''}`}>
        <i style={{ '--clr': '#0d0928' }}></i>
        <i style={{ '--clr': '#2d2766' }}></i>
        <i style={{ '--clr': '#5652ab' }}></i>
        <i style={{ '--clr': '#5e8ab5' }}></i>
        <i style={{ '--clr': '#61bdac' }}></i>
        {showLogin && (
          <div className="login">
            <h2 style={{fontFamily: 'Exo', fontWeight: 'normal'}}>login</h2>
            <div className="inputBx">
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Password" />
            </div>
            <button className='animatedButton'><a style={{fontFamily: 'Exo', color: '#fff'}}>Sign In</a></button>
            <div className="links">
              <a style={{fontFamily:'Exo' , fontWeight:'normal'}} href="#">forget password</a>
              <a style={{fontFamily: 'Exo', fontWeight:'normal'}} href="#" onClick={handleSignUpClick}>sign up</a>
            </div>
          </div>
        )}
        {!showLogin && (
          <div className='login'>
            <h2 style={{fontFamily: 'Exo', fontWeight: 'normal', fontSize: 20}}>sign up</h2>
            <div className='row'>
              <div className='inputBx'>
                <input style={{height: 1,fontSize: 10, borderWidth: 0.5}} type="text" placeholder='first name'/>
              </div>
              <div className='inputBx'>
                <input style={{height: 1, fontSize: 10, borderWidth: 0.5}} type="text" placeholder='last name'/>
              </div>
            </div>
            <div className='inputBx'>
              <input style={{height: 1, fontSize: 10, borderWidth: 0.5}} type="text" placeholder='username'/>
            </div>
            <div className='inputBx'>
              <input style={{height: 1, fontSize: 10, borderWidth: 0.5}} type="text" placeholder='email'/>
            </div>
            <div className='row'>
              <div className='inputBx'>
                <input style={{height: 1, fontSize: 10, borderWidth: 0.5}} type="text" placeholder='password'/>
              </div>
              <div className='inputBx'>
                <input style={{height: 1, fontSize: 10, borderWidth: 0.5}} type="text" placeholder='confirm password'/>
              </div>
            </div>
            
            <button style={{height: 1, width: 100}} className='animatedButton'><a style={{fontFamily: 'Exo', color: '#fff', fontSize: 10, position:'absolute', bottom: 2, left: 30}}>Continue</a></button>

            <div className="links">
              <a style={{fontFamily:'Exo' , fontWeight:'normal'}} href="#"></a>
              <a style={{fontFamily: 'Exo', fontWeight:'normal'}} href="#" onClick={handleSignUpClick}>sign in</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
