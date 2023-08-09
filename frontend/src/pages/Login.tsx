import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { Store } from '../store';
import authSlice, { setCredentials } from '../slices/authSlice';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  //getting a user info from the authSlice

  const [login, { isLoading }] = useLoginMutation();

  async function handleFormSubmit(data: FieldValues) {
    const { email, password } = data;
    console.log(email);
    console.log(password);
    try {
      //to unwrap the resolved data
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));
      //navigate
    } catch (error) {
      throw new Error('Cannot be logged in');
    }

    //now after getting the data, using the data to provide to the authentication router and then if correct setting that to localStorage
  }
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='flex justify-between'>
          <label htmlFor='email'>Email</label>
          <input
            className='border-2 rounded-lg mx-7'
            type='text'
            placeholder='Enter your email'
            {...register('email')}
          />
        </div>
        <div className='flex justify-evenly'>
          <label htmlFor='email'>Password</label>
          <input
            className='border-2 rounded-lg mx-7'
            type='text'
            placeholder='Enter your password'
            {...register('password')}
          />
        </div>
        <div className='text-center '>
          <button className='border-2'>Submit</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Login;
