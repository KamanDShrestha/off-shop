import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // product: productReducer,
    // user: userReducer,
  },
});
export default store;
