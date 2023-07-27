import React from 'react';
import { Product } from '../../public/data/products';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='flex flex-col w-50 gap-3 shadow-lg'>
      <img src={product.image} className='h-70' />
      <div className='p-5'>
        <p className='text-lg flex-wrap font-semibold'>{product.name}</p>
        <p className='text-md'>{product.brand}</p>
        <p className='text-sm'>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
