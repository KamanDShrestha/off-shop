import React from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Ratings from '../components/Ratings';
import Button from '../components/Button';

import { useGetSpecificProductQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import { toast } from 'react-hot-toast';
const ProductDetails = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({} as Product);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:8000/api/products/${id}`
  //     );
  //     setProduct(data);
  //   };
  //   fetchProduct();
  // }, [id]);
  // console.log(id);

  // console.log(product);

  const { data: product, isLoading, error } = useGetSpecificProductQuery(id!);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        toast.error('Cannot fetch the details at the moment')
      ) : (
        <div className='flex flex-col my-3  mx-20 gap-10 '>
          <div className='text-sm flex font-semibold space-x-2 whitespace-nowrap overflow-hidden text-ellipsis'>
            <Link to={'/'}>
              <span>Home </span>
            </Link>
            <span> {'>'} </span>
            <Link to={`/product/${id}`}>
              <span className=''>{product?.name}</span>
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <img src={product?.image} alt={product?.name} />
            <div className='flex flex-col gap-3 relative'>
              <div className='text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>
                <span>{product?.name}</span>
              </div>
              <div className='flex justify-between items-center '>
                <span>${product?.price}</span>
                <div className='flex gap-2 text-sm'>
                  <span>{product?.rating}</span>
                  <span>
                    <Ratings rating={product?.rating} />
                  </span>
                  <span>from {product?.numReviews} reviews</span>
                </div>
              </div>
              <div className='text-sm'>{product?.description}</div>
              <div>
                <div className=' font-medium'>
                  In Stock : {product?.countInStock}
                </div>
                <div className=' font-medium'>
                  Category : {product?.category}
                </div>
              </div>
              <Button className='px-3 py-2 my-5 w-32 outline-none rounded-lg bg-stone-900 text-stone-50  drop-shadow-sm '>
                Add to Cart
              </Button>
              <span className='text-xs italic bottom-0 absolute right-0 md:left-0'>
                from {product?.brand} with ❤️
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
