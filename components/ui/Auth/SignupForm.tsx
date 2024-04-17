'use client'

import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  username: string,
  email: string,
  password: string,
  confirm_password: string
}

export default function SignUpForm() {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { loading, signup } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signup(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-sm md:text-base lg:text-sm 2xl:text-base mt-2 flex flex-col gap-3 lg:gap-1.5 2xl:gap-3'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name">Username: </label>
        <input
          id='username'
          type='text'
          {...register('username', { required: true })}
          placeholder='Enter your name'
          className='border-2 border-gray-800 p-2 rounded focus:outline-none w-full'
        />
        {errors.username && <p className='text-red-800'>Field is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email: </label>
        <input
          id='email'
          type='email'
          {...register('email', { required: true })}
          placeholder='Enter your Email address'
          className='border-2 border-gray-800 p-2 rounded focus:outline-none w-full'
        />
        {errors.email && <p className='text-red-800'>Field is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="password">Password: </label>
        <input
          id='password'
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
          placeholder='Enter your phone number'
          className='border-2 border-gray-800 p-2 rounded focus:outline-none w-full'
        />
        {errors.password && <p className='text-red-800'>Field is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="confirm_password">Confirm Password: </label>
        <input
          id='confirm_password'
          type={showPassword ? 'text' : 'password'}
          {...register('confirm_password', {
            required: true,
            validate: (val) => {
              if (watch('password') !== val) {
                return 'Passwords do no match'
              }
            }
          })}
          placeholder='Enter your phone number'
          className='border-2 border-gray-800 p-2 rounded focus:outline-none w-full'
        />
        {errors.confirm_password && <p className='text-red-800'>Passwords must match</p>}
      </div>
      <div className='flex justify-start'>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='showPassword'
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor='showPassword'>Show Password?</label>
        </div>
      </div>
      <button disabled={loading} className='self-start border-2 border-gray-800 font-semibold px-4 py-1 rounded-2xl' type="submit">{loading ? "Signing Up" : "Sign Up"}</button>
    </form>
  )
}

