'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  name: string,
  email: string,
  phone: string
}

export default function ContactUsForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-2 flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-white'>Name: </label>
        <input
          id='name'
          {...register('name', { required: true })}
          placeholder='Enter your name'
          className='p-2 rounded focus:outline-none w-full'
        />
        {errors.name && <p className='text-red-800'>Name is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='text-white'>Email: </label>
        <input
          id='email'
          type='email'
          {...register('email', { required: true })}
          placeholder='Enter your Email address'
          className='p-2 rounded focus:outline-none w-full'
        />
        {errors.email && <p className='text-red-800'>Email is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="phone" className='text-white'>Phone Number: </label>
        <input
          id='phone'
          {...register('phone', {
            required: true, onChange(event) {
              const numericValue = event.target.value.replace(/[^\d]/g, '')
              event.target.value = numericValue
            },
          })}
          placeholder='Enter your phone number'
          className='p-2 rounded focus:outline-none w-full'
        />
        {errors.phone && <p className='text-red-800'>Phone Number is required</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
