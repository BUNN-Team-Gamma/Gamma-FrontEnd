import { servicesType } from "@/lib/definitions"
import Image1 from '@/public/Rectangle 17.svg'
import Image2 from '@/public/Rectangle 18.svg' 
import Image3 from '@/public/Rectangle 19.svg' 
import Image4 from '@/public/Rectangle 17.svg' 
import AIServiceCard from "./AIServiceCard"

const services:servicesType[] = [
  {
    imgUrl: Image1,
    title: 'Text Extraction'
  },
  {
    imgUrl: Image2,
    title: 'Note Summarization'
  },
  {
    imgUrl: Image3,
    title: 'Flashcard Creation'
  },
  {
    imgUrl: Image4,
    title: 'Advanced Mathematics'
  },
]

export default function AIServices() {
  return (
    <div className='py-10 lg:py-20 px-4 md:px-10 lg:px-40'>
      <h1 className='text-center font-bold text-3xl md:text-[44px] mb-8 md:mb-16 lg:mb-40'>
        Our AI Services
      </h1>
      <div className='px-4 py-8 md:px-8 lg:px-16 lg:py-0 bg-[#FFCD92] rounded-2xl'>
        <div className="lg:-translate-y-36 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            services.map((service) => (
              <AIServiceCard key={service.title} img={service.imgUrl} title={service.title}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
