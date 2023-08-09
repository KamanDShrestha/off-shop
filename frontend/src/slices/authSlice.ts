import { createSlice } from '@reduxjs/toolkit';

export type AuthLoggedInType = {
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  id: string;
};

//getting the web token and then, setting the userinfo into the local storage
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials(state, action) {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(state));
    },

    //as it's a state, it should be changed through the action and dispatch
    logoutFrontend(state) {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logoutFrontend } = authSlice.actions;

export default authSlice.reducer;
