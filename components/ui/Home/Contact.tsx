import Image from 'next/image'
import ContactUsForm from './ContactUsForm'

export default function Contact() {
  return (
    <div className='py-10 px-4 md:px-10 lg:px-16 2xl:px-40'>
      <h1 className='text-center font-bold text-3xl md:text-4xl mb-8'>
        Contact us
      </h1>
      <div className='bg-[#FFCD92] py-4 px-8 lg:py-0 rounded-2xl flex flex-col md:flex-row gap-10 items-center justify-center'>
        <Image src='/ContactUsImage.svg' alt='contact us image' width={300} height={100} className='hidden lg:block lg:w-1/2' />
        <div className='lg:w-2/5'>
          <div className='text-center'>
            <h1 className='font-bold text-lg 2xl:text-2xl'>Have a question for us?</h1>
            <p className='2xl:text-xl'>Write to us and we will gladly answer all your questions and put you through</p>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}
