import React from 'react';
import '../styles/Navbar.css'
import logo from '../assets/luffy_moto_g.jpeg'
const Navbar = () => {
  // let message = "Hello World"

  return (
    <nav className='navbar'>
      <div className='navbar-brand '>
       <img src={logo} alt="logo" className='higia-logo'></img>
       </div>
    </nav>
  )


};

export default Navbar;