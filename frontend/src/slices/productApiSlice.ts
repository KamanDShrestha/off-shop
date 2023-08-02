import { Product } from '../../public/data/products';
import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getSpecificProduct: builder.query<Product, string>({
      query: (_id) => ({
        url: `${PRODUCTS_URL}/${_id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSpecificProductQuery } =
  productApiSlice;

// const initialState = {
//   _id: '',
//   name: '',
//   image: '',
//   description: '',
//   brand: '',
//   category: '',
//   price: '',
//   countInStock: '',
//   rating: '',
//   numReviews: '',
// };
// const productSlice = createSlice({
//   name: 'Product',
//   initialState,
//   reducers: {
//     function
//   }
// });
