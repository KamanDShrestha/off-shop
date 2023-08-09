/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../store';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logoutFrontend } from '../slices/authSlice';
import { CartItemDataType } from '../slices/cartSlice';
const Header = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  function hamBurgerClicked() {
    setIsHamburger((ham) => !ham);
    setIsOpened((open) => !open);
  }

  const navigate = useNavigate();

  const { userInfo } = useSelector((state: Store) => state.auth);
  console.log(userInfo);
  //taking out the methods for user logout
  const [logout, { isLoading }] = useLogoutMutation();

  // handling the logout for the frontend
  const dispatch = useDispatch();

  //getting the total value from the cart
  const totalItemsInCart = useSelector((state: Store) =>
    state.cart.cartItems.reduce(
      (sum: number, item: CartItemDataType) => sum + item.quantity,
      0
    )
  );

  async function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'profile') {
      navigate('/profile');
      return;
    } else {
      await logout(userInfo).unwrap();
      dispatch(logoutFrontend());
      navigate('login');
    }
  }

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

        {userInfo ? (
          <div>
            <select
              name={userInfo.name}
              id='loggedInUser'
              onChange={handleSelect}
            >
              <option>{userInfo.name}</option>
              <option onClick={() => navigate('/profile')} value={'profile'}>
                Profile
              </option>
              <option value={'logout'}>Logout</option>
            </select>
          </div>
        ) : (
          <NavLink to={'signin'}>Sign Up</NavLink>
        )}
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
            className='absolute h-7 bottom-16 left-44'
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
            {userInfo ? (
              <div>
                <select
                  name={userInfo.name}
                  id='loggedInUser'
                  onChange={handleSelect}
                >
                  <option>{userInfo.name}</option>
                  <option value={'profile'}>Profile</option>
                  <option value={'logout'}>Logout</option>
                </select>
              </div>
            ) : (
              <NavLink to={'signin'}>Sign Up</NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
