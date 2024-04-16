import LoginForm from '@/components/ui/Auth/LoginForm'
import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Login | BestAISchool'
}

export default function Page() {
  return (
    <main className='lg:py-10 mx-auto lg:grid grid-cols-2 gap-10 items-center'>
      <div className='bg-[#E5FAFF] flex justify-center py-10 lg:py-5'>
        <Image src='/HeroImage.svg' alt='hero image' width={300} height={100} className='md:w-2/5 lg:w-3/4' />
      </div>
      <div className='px-6 md:px-10 py-6 lg:px-20'>
        <LoginForm />
        <p className='mt-5 text-center'>
          Don&apos;t have an account?{' '}
          <Link className='underline hover:text-primaryColor hover:no-underline' href='/auth/signup'>
            {' '}
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  )
}
