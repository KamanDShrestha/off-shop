import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const AppLayout = () => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] gap-2'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
