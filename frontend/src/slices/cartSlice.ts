import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../public/data/products';

//to check if the data is in the local storage
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : { cartItems: [] };

//helper function for always fixing the decimal to 2
function addDecimals(price: number) {
  return ((price * 100) / 100).toFixed(2);
}

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

      //Calculate item price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (sumOf: number, item: any) => sumOf + item.price * item.quantity,
          0
        )
      );
      //Calculate shippingPrice
      //if the itemsPrice is greater than 100, then 10
      state.shippingPrice = state.itemsPrice < 100 ? 0 : 10;

      //Calcuate taxPrice
      state.taxPrice = addDecimals(0.15 * state.itemsPrice);

      //Calcuate totalPrice
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

console.log(cartSlice);
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
