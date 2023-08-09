import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return (
    <div className='flex items-center justify-center h-[70vh] mb-28'>
      {children}
    </div>
  );
};

export default FormContainer;
