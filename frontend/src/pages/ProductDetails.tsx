import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import products from '../../public/data/products';
const ProductDetails = () => {
  const { name } = useParams();
  console.log(name);
  const product = products.find((product) => product.name === name);
  console.log(product);
  return (
    <div className='flex flex-col my-3  mx-20 '>
      <div className='text-sm flex font-semibold space-x-2 whitespace-nowrap overflow-hidden text-ellipsis'>
        <Link to={'/'}>
          <span>Home </span>
        </Link>
        <span> {'>'} </span>
        <Link to={`/product/${name}`}>
          <span className=''>{product?.name}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
