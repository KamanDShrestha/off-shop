import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer, { CartDataType } from './slices/cartSlice';
import authSliceReducer, { AuthLoggedInType } from './slices/authSlice';

export type Store = {
  api: object;
  auth: { userInfo: AuthLoggedInType | null };
  cart: CartDataType;
};

const store = configureStore({
  reducer: {
    //configuring apiSlice
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  //middleware for the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
console.log(store.getState());

export default store;
