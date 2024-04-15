'use client'

import Link from 'next/link';
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import Image from 'next/image';
import { NavLinkType } from '@/lib/definitions';
import PrimaryBtn from './primaryBtn';

const navLinks: NavLinkType[] = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About Course'
  },
  {
    path: '/our-ai',
    name: 'Our AI'
  },
  {
    path: '/payment',
    name: 'Payment'
  },
  {
    path: '/faq',
    name: 'FAQ'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
]

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  const toggleMenu = () => {
    setNavbar(!navbar)
  }

  return (
    <nav className='py-5 lg:py-8 px-4 md:px-10 lg:px-40 flex justify-between items-center'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src='/Logo.svg' alt='Logo' width={200} height={100} className='w-3/5 md:w-3/4 lg:w-fit' />
      </Link>
      <div className='hidden lg:flex gap-10'>
        {
          navLinks.map((item) => (
            <Link className='hover:text-primaryColor' key={item.path} href={item.path}>{item.name}</Link>
          ))
        }
      </div>
      <Link href='/login' className='hidden lg:block'>
        <PrimaryBtn variant text='Login/Register' size='text-lg' weight='font-medium' />
      </Link>
      <div className='cursor-pointer lg:hidden'>
        {
          navbar ? <MdClose onClick={toggleMenu} size={25} /> : <RxHamburgerMenu onClick={toggleMenu} size={25} />
        }
      </div>
      <div className={`px-10 py-6 rounded-lg text-sm lg:hidden font-medium bg-neutral-950/90 text-white transition-all ease-in-out origin-top-right absolute z-50 right-5 md:right-12 top-[75px] flex flex-col items-center gap-5 ${navbar ? "opacity-100 scale-100" : "opacity-0 scale-0"} duration-500`}>
        {
          navLinks.map((item) => (
            <Link className='hover:text-primaryColor' onClick={toggleMenu} key={item.path} href={item.path}>{item.name}</Link>
          ))
        }
        <Link href='/login' onClick={toggleMenu} className='block lg:hidden'>
          <PrimaryBtn variant text='Login/Register' size='' weight='' />
        </Link>
      </div>
    </nav>
  )
}
