import React, { useState } from 'react';

import { CartItemDataType, addToCart, deleteCart } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface Props {
  cartItem: CartItemDataType;
}

const CartItem = ({ cartItem }: Props) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  function handleDecrement() {
    if (cartItem.quantity <= 0) return;
    const newQuantity = quantity - 1;
    console.log('decreasing');
    setQuantity(newQuantity);
    console.log('Here quantity', newQuantity);
    dispatch(addToCart({ ...cartItem, quantity: newQuantity }));
  }
  function handleIncrement() {
    if (cartItem.quantity >= (cartItem?.countInStock as number)) return;
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    dispatch(addToCart({ ...cartItem, quantity: newQuantity }));
  }
  const eachTotalPrice = (cartItem.price * cartItem.quantity).toFixed(2);

  return (
    <div className='grid grid-cols-6 gap-10'>
      <img src={cartItem.image} className='h-30 my-5' />
      <span className='text-xs sm:text-sm overflow-hidden text-ellipsis flex items-center'>
        {cartItem.name}
      </span>
      <span className='text-xs sm:text-sm overflow-hidden text-ellipsis flex items-center'>
        {cartItem.brand}
      </span>
      <span className='text-xs sm:text-sm overflow-hidden text-ellipsis flex items-center'>
        <div className='space-x-5'>
          <button
            onClick={handleDecrement}
            className='bg-stone-200 py-1 px-2 rounded-lg'
          >
            -
          </button>
          <span> {cartItem.quantity} </span>
          <button
            onClick={handleIncrement}
            className='bg-stone-200 py-1 px-2 rounded-lg'
          >
            +
          </button>
        </div>
      </span>

      <span className='text-xs sm:text-sm overflow-hidden text-ellipsis flex items-center'>
        ${eachTotalPrice}
      </span>
      <span className='text-xs sm:text-sm overflow-hidden text-ellipsis flex items-center cursor-pointer hover:scale-125 transition-all duration-100'>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => dispatch(deleteCart(cartItem._id))}
        />
      </span>
    </div>
  );
};

export default CartItem;
