import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaApple, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { PiGlobeBold } from "react-icons/pi";

const FooterLinks: any = [
  {
    discover: [
      {
        path: '/topics',
        name: 'Topics'
      },
      {
        path: '/courses',
        name: 'Courses'
      },
      {
        path: '/glossaries',
        name: 'Glossaries'
      }
    ]
  },
  {
    products: [
      {
        path: '/note-summarization',
        name: 'Note Summarization'
      },
      {
        path: '/flashcard-creation',
        name: 'Flashcard Creation'
      },
      {
        path: '/text-extraction',
        name: 'Text Extraction'
      },
      {
        path: '/research',
        name: 'Research'
      }
    ]
  },
  {
    company: [
      {
        path: '/terms-and-conditions',
        name: 'Terms & Conditions'
      },
      {
        path: '/privacy-policy',
        name: 'Privacy Policy'
      },
      {
        path: '/disclaimer',
        name: 'Disclaimer'
      },
      {
        path: '/content-request',
        name: 'Content Request'
      },
      {
        path: '/feedback',
        name: 'Feedback'
      },
      {
        path: '/support',
        name: 'Support'
      }
    ]
  }
]
export default function Footer() {
  const date = new Date()
  return (
    <footer className='mb-5 py-10 lg:py-20 px-4 md:px-10 lg:px-16 2xl:px-40 border-y-2 border-[#AFE6FF] lg:grid lg:grid-cols-[0.3fr_1fr_0.3fr] 2xl:grid-cols-[0.5fr_1fr_0.3fr] lg:gap-10 items-center'>
      <div className='h-full flex flex-col justify-center gap-5 mb-10 lg:mb-0'>
        <Image src='/Logo.svg' width={300} height={100} alt="Logo" className=' w-44 h-10 lg:w-fit lg:h-16' />
        <p className='text-[#686868] font-bold text-sm'>{date.getFullYear()} Decentralized IQ. All Rights Reserved.</p>
        <div className='flex gap-3'>
          <div className='bg-[#191919] flex items-center gap-2 text-white rounded-md p-2 md:p-3'>
            <FaApple color='white' className='h-7 w-7'/>
            <div className='font-semibold'>
              <p className='text-[6.65px]'>Download on the</p>
              <p className='text-xs'>App Store</p>
            </div>
          </div>
          <div className='bg-[#191919] flex items-center gap-2 text-white rounded-md p-2 md:p-3'>
            <Image src='/Google-play.svg' width={300} height={100} alt="Logo" className='h-6 w-6'/>
            <div className='font-semibold'>
              <p className='text-[6.65px]'>Get it on</p>
              <p className='text-xs'>Google Play</p>
            </div>
          </div>
        </div>
        <div className='w-fit text-sm md:text-base font-medium flex gap-2 rounded-[30px] bg-gray-100'>
          <input type="email" className='focus:outline-none bg-transparent py-2 px-4 md:py-2 md:px-4'/>
          <button type="submit" className='bg-[#FFCD92] rounded-[30px] py-2 px-4 md:py-4 md:px-8'>Subscribe</button>
        </div>
      </div>
      <div className='flex justify-between lg:justify-around text-xs md:text-base lg:text-sm 2xl:text-base'>
        <div>
          <h2 className='mb-5 md:mb-10 font-bold'>Discover</h2>
          <div className='flex flex-col gap-3 md:gap-4'>
            {
              FooterLinks[0].discover.map((link) =>
                <Link className='hover:text-primaryColor' key={link.path} href={link.path}>
                  {link.name}
                </Link>
              )
            }
          </div>
        </div>

        <div>
          <h2 className='mb-5 md:mb-10 font-bold'>Products</h2>
          <div className='flex flex-col gap-3 md:gap-4'>
            {
              FooterLinks[1].products.map((link) =>
                <Link className='hover:text-primaryColor' key={link.path} href={link.path}>
                  {link.name}
                </Link>
              )
            }
          </div>
        </div>
        <div>
          <h2 className='mb-5 md:mb-10  font-bold'>Company</h2>
          <div className='flex flex-col gap-3 md:gap-4'>
            {
              FooterLinks[2].company.map((link) =>
                <Link className='hover:text-primaryColor' key={link.path} href={link.path}>
                  {link.name}
                </Link>
              )
            }
          </div>
        </div>

      </div>
      <div className='self-start'>
        <div className='my-8 lg:my-0 flex gap-8 md:gap-5 items-center'>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='h-6 w-6' />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='h-6 w-6' />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className='h-6 w-6' />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='h-6 w-6' />
          </a>
        </div>
        <button className='lg:mt-8 flex gap-2 items-center font-medium'><PiGlobeBold size={25} /> English</button>
      </div>
    </footer>
  )
}