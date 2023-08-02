import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CartDataType } from '../slices/cartSlice';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart) as CartDataType;
  return (
    <div>
      <div className='flex flex-col mb-10  mx-20 gap-10 relative'>
        <div className='text-sm flex font-semibold space-x-2 whitespace-nowrap overflow-hidden text-ellipsis'>
          <NavLink to={'/'}>
            <span>Home </span>
          </NavLink>
          <span> {'>'} </span>
          <NavLink to={`/cart`}>
            <span className=''>Cart</span>
          </NavLink>
        </div>
        <div className='bg-stone-50 p-4'>
          <div className='flex flex-col divide-y-2 '>
            <div className='grid grid-cols-6 gap-10 font-semibold text-lg mb-3 '>
              <span></span>
              <span>Item</span>
              <span>Brand</span>
              <span>Quantity</span>
              <span>Price</span>
              <span></span>
            </div>
            {cart.cartItems.length === 0 ? (
              <div className='text-center p-5'>
                {' '}
                There's no items currently in the cart.
              </div>
            ) : (
              <>
                {cart.cartItems.map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem._id} />
                ))}
              </>
            )}
          </div>
        </div>
        <div className=' bg-stone-100 -bottom-28 p-5'>
          <h2 className='text-xl font-semibold right-0 '>
            Subtotal for{' '}
            {cart.cartItems.reduce(
              (sumOf, cartItem) => sumOf + cartItem.quantity,
              0
            )}{' '}
            products
          </h2>
          <p className='text-lg'>
            $
            {cart.cartItems.reduce(
              (sumOf, cartItem) => sumOf + cartItem.quantity * cartItem.price,
              0
            )}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
