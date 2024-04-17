'use client'

import { useState } from "react"
import SummaryForm from "./SummaryForm"
import SummaryWithImage from "./SummaryWithImage"

export default function SummarySection() {
  const [nav, setNav] = useState<boolean>(true)
  return (
    <>
      <div className='font-bold lg:text-xl mb-5 lg:mb-10 flex gap-5 justify-between'>
        <button onClick={() => setNav(true)} className={`border-b-4 ${nav ? 'border-primaryColor' : 'border-white'} pb-2 w-full text-center`}>Paste text</button>
        <button onClick={() => setNav(false)} className={`border-b-4 ${nav ? 'border-white' : 'border-primaryColor'} pb-2 w-full text-center`}>Upload Image and extract</button>
      </div>
      {
        nav ? <SummaryForm/>: <SummaryWithImage/> 
      }
    </>
  )
}
