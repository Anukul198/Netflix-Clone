
import "./SignUpScreen.css";

import React, { useRef } from 'react';

import { auth } from "./firebase";


function SignUpScreen() {
  const emailRef= useRef(null);
  const passwordlRef= useRef(null);

  const register =(e) =>{
      e.preventDefault();

      auth.createUserwithEmailAnsPassword(
        emailRef.current.value,
        passwordlRef.current.value
      ).then((authUser)=>{
          console.log(authUser)
      })
       .catch((error)=>{
          alert(error.message);
      })
    }
  const SignIn = (e) =>{
      e.preventDefault();
  };


  
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign IN</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordlRef} type="password" placeholder="Password" />
        <button type="submit" onClick={SignIn}>Sign IN</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__Link" onClick={register}>  Sign up now.</span>
          </h4>
      </form>
    </div>
  )
}

export default SignUpScreen

