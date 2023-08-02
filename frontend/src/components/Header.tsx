/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  function hamBurgerClicked() {
    setIsHamburger((ham) => !ham);
    setIsOpened((open) => !open);
  }

  //getting the total value from the cart
  const totalItemsInCart = useSelector((state: any) =>
    state.cart.cartItems.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    )
  );
  console.log(totalItemsInCart);
  return (
    <div
      className={`flex justify-between items-center p-3 ${
        isHamburger
          ? ' flex-col min-[320px]:flex-row gap-5'
          : 'flex-row min-[320px]:flex-row'
      }`}
    >
      <img src={logo} className='h-8' />

      <div className='space-x-4 hidden min-[320px]:block'>
        <NavLink to={'/cart'}>
          Cart
          {totalItemsInCart > 0 && (
            <span className='text-xs bg-red-600 rounded-md text-stone-200 px-1 py-[0.5px] mx-1'>
              {totalItemsInCart}
            </span>
          )}
        </NavLink>

        <NavLink to={'signin'}>Sign Up</NavLink>
      </div>
      <div className='space-x-4 block min-[320px]:hidden relative'>
        {!isHamburger ? (
          <FontAwesomeIcon
            icon={faBurger}
            className='h-7'
            onClick={hamBurgerClicked}
          />
        ) : (
          <FontAwesomeIcon
            icon={faClose}
            className='h-7 absolute bottom-16 left-44'
            onClick={hamBurgerClicked}
          />
        )}
        {isOpened && (
          <>
            <NavLink to={'/cart'}>
              Cart
              {totalItemsInCart > 0 && (
                <span className='text-xs bg-red-600 rounded-md text-stone-200 px-1 py-[0.5px] mx-1'>
                  {totalItemsInCart}
                </span>
              )}
            </NavLink>
            <NavLink to={'signin'}>Sign Up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
