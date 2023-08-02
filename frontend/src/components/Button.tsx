import React from 'react';
import { Product } from '../../public/data/products';

interface Props {
  children: string;
  className: string;
  onClick?: (product: Product) => void;
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
