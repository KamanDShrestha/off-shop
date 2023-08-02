/* eslint-disable @typescript-eslint/no-unused-vars */
//as we are dealing with backend, this is implemented as root slice from which other slices would be built upon
//so as we need to fetch from backend that's asynchronous we are using createApi rather than createSlice
//fetchBaseQuery to make request with the backend API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

//making a baseQuery to provide a request through the use of BASE_URL
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  //a baseQuery for all those requests
  baseQuery: baseQuery,

  //types of data that we would be fetching
  tagTypes: ['Product', 'User', 'Order'],
  endpoints: (builder) => ({}),
});
