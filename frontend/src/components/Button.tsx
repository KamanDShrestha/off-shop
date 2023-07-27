import React from 'react';

interface Props {
  children: string;
  className: string;
}

const Button = ({ children, className }: Props) => {
  return <button className={className}>{children}</button>;
};

export default Button;
