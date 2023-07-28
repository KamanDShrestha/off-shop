import React from 'react';

import ProductCard from '../components/ProductCard';
import ProductLayout from '../components/ProductLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
  //fetching the data from the backend
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className='flex flex-col my-3  mx-20 '>
      <h1 className=' text-3xl font-bold'>Featured Products</h1>
      <ProductLayout>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </ProductLayout>
    </div>
  );
};

export default Home;
