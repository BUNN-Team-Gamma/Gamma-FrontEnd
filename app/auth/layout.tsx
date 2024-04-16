import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='py-4'>
      <Link href='/'>
        <Image src="/Logo.svg" alt='Logo' width={100} height={100} className='mb-4 px-4 w-2/5 2xl:w-fit' />
      </Link>
      {children}
    </div>
  )
}
