import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import 
const Header = () => {
  return (
    <div className='flex justify-between items-center p-3'>
      <img src={logo} className='h-8' />
      <div className='space-x-4 hidden min-[320px]:block'>
        <NavLink to={'/cart'}>Cart</NavLink>
        <NavLink to={'signin'}>Sign Up</NavLink>
      </div>
      <div className='space-x-4 block min-[320px]:hidden'>

        {/* <NavLink to={'/cart'}>Cart</NavLink>
        <NavLink to={'signin'}>Sign Up</NavLink> */}
      </div>
    </div>
  );
};

export default Header;
