import PrimaryBtn from '@/components/primaryBtn'
import Image from 'next/image'
import Link from 'next/link'

export default function Demo() {
  return (
    <div className='py-5 px-4 md:px-10 lg:px-16 2xl:px-40'>
      <h1 className='text-center font-bold text-3xl md:text-4xl mb-8'>
        Demo Video
      </h1>
      <div className='flex flex-col md:flex-row gap-5 md:gap-10 justify-between items-center'>
        <div className='md:w-1/2'>
          <h1 className='lg:text-lg 2xl:text-xl font-semibold mb-3'>Estimated 15 minutes to complete</h1>
          <p className='lg:text-lg 2xl:text-xl'>
            The demo video on our site showcases the transformative capabilities of our AI-powered app for students. It demonstrates how the app effortlessly extracts text from images, streamlining the process of digitizing handwritten or printed notes. Additionally, it illustrates the creation of personalized flashcards from extracted content, facilitating efficient study sessions.
          </p>
          <p className='lg:text-lg 2xl:text-xl my-3'>
            The video highlights the app&apos;s unique ability to generate concise summaries from lengthy notes or articles, empowering students to grasp key concepts quickly. With its intuitive user interface and emphasis on academic success, our app offers students a comprehensive toolset to enhance their learning experience and achieve their goals.
          </p>
          <Link href='/'>
            <PrimaryBtn variant={false} text='Explore Courses' size='' weight='' />
          </Link>
        </div>
        <Image src='/Rectangle 21.svg' alt='hero image' width={300} height={100} className='w-full md:w-1/2 lg:w-2/5 2xl:w-fit' />
      </div>
    </div>
  )
}
