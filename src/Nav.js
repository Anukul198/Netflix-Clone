import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const[show , handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        };
    };

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img
      className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="" />

      <img
      className='nav__avatar' src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg" alt="" />
        </div>
        
    </div>
  )
}

export default Nav
