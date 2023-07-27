import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  const date = new Date().getUTCFullYear();
  return (
    <div className='flex justify-center gap-4 items-center text-sm'>
      <img src={logo} className='h-5' />
      <div className=' space-x-1'>
        <FontAwesomeIcon icon={faCopyright} />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Footer;
