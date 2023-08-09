import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

//making a userApiSlice that deals with all the functionalite related to API calls of the users
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // making a login function that would send request to the auth URL in the server from which the user would be authenticated
    // RTK query for providing request to the API
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),

    //for ensuring logout happens in backend too by removing cookie
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = userApiSlice;
