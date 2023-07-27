import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ProductLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-5  my-6'>
      {children}
    </div>
  );
};

export default ProductLayout;
