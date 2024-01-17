import React, { useState } from 'react';
import "./LoginScreen.css";
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
  const[signIn , setSignIn] = useState(false);
  return (

    <div className='LoginScreen'>
      
      <div className="LoginScreen__background"></div>
      <img
         className='LoginScreen__logo'
      src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="" />
      <button 
      onClick={()=>setSignIn(true)} className='LoginScreen__button'>Sign In</button>
      <div className="LoginScreen__gradient"></div>

      <div className="LoginScreen__body">
      {signIn ? (
        <SignUpScreen/>
      ):(
        <>
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
        Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className='LoginScreen__input'>
        <form>
        <input type="email" placeholder='Email address' />
        
        <button 
        onClick={()=>setSignIn(true)} 
        className='LoginScreen__getStarted'>Get Started </button>
        </form>
      </div>
        </>

      )}
      </div>
    </div>
  )
}

export default LoginScreen
