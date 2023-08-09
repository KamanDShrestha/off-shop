import React from 'react';

import ProductCard from '../components/ProductCard';
import ProductLayout from '../components/ProductLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetProductsQuery } from '../slices/productApiSlice';
import { Product } from '../../public/data/products';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import Loader from '../components/Loader';
const Home = () => {
  //fetching the data from the backend
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('http://localhost:8000/api/products');
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  // console.log(products);

  //fetching through the use of endpoints injected within apiSlice
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1>{error?.data.message}</h1>
      ) : (
        <div className='flex flex-col mx-20 my-3 '>
          <h1 className='text-3xl font-bold '>Featured Products</h1>
          <ProductLayout>
            {products?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </ProductLayout>
        </div>
      )}
    </>
  );
};

export default Home;
