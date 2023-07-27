import React from 'react';
import products from '../../public/data/products';
import ProductCard from '../components/ProductCard';
import ProductLayout from '../components/ProductLayout';

const Home = () => {
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
