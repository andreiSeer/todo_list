import React from 'react';
import './Navbar.css'
import logo from './luffy_moto_g.jpeg'
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