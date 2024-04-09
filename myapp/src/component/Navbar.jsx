import React from 'react'
import {  Link } from 'react-router-dom';
import '../component/navbarstyle.css';

const Navbar = () => {

  
  return (  
    <div className='data'>
    <Link className='linkstyle' to={'/'}>Home</Link>
    <Link className='linkstyle' to={'/ourshop'}>Our Shop</Link>
    <Link className='linkstyle' to={'/product'}>Product Details</Link>
    <Link className='linkstyle' to={'/contact'}>Contact</Link>
      
    </div>
  )
}

export default Navbar;
