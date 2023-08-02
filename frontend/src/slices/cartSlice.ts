import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../public/data/products';
import updateCard from '../utils/cartUtils';
//to check if the data is in the local storage
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      //getting the item from the action.payload
      const item = action.payload;
      console.log(action.payload);
      const alreadyExist = state.cartItems.find(
        (hereItem: Product) => hereItem._id === item._id
      );
      if (alreadyExist) {
        state.cartItems = state.cartItems.map((thisItem: Product) =>
          thisItem._id === item._id ? item : thisItem
        );
      } else {
        //adding a new item
        state.cartItems = [...state.cartItems, item];
      }
      return updateCard(state);
    },
  },
});

console.log(cartSlice);
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
