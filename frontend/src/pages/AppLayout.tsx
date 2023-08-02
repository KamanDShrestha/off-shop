import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const AppLayout = () => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] gap-2'>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        position='top-center'
        gutter={8}
        toastOptions={{
          success: {
            duration: 3000,
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            style: {
              fontSize: '14px',
            },
          },
          error: {
            duration: 5000,
            icon: <FontAwesomeIcon icon={faCross} />,
            style: {
              fontSize: '14px',
              color: 'red',
            },
          },
        }}
      />
    </div>
  );
};

export default AppLayout;
