import React from 'react';
import { Product } from '../../public/data/products';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='flex flex-col w-50 gap-3 shadow-lg bg-stone-50'>
      <img src={product.image} className='h-70' />
      <div className='p-5'>
        <div className='text-lg flex-wrap font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>
          <Link to={`/product/${product.name}`}>{product.name}</Link>
        </div>
        <p className='text-md'>{product.brand}</p>
        <p className='text-sm'>${product.price}</p>
        <Ratings rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
