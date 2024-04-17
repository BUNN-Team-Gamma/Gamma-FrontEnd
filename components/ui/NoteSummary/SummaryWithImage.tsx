'use client'

import { getCookie } from "cookies-next";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SummaryWithImage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [id, setImageId] = useState<string>('');
  const [textArray, setTextArray] = useState<any[]>([])

  const token = getCookie('userToken')

  const handleImageUpload = async (e: any) => {
    e.preventDefault()
    try {
      const formdata = new FormData()
      formdata.append('image', selectedImage)

      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: formdata,

      }

      const res = await fetch('https://exam-prep-app.onrender.com/api/v1/images/upload/', requestOptions)
      const result = await res.json()
      console.log(result)

      const formdata1 = new FormData()
      formdata1.append('image_id', result.image_id)

      const requestOptions1 = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: formdata1,

      }

      const res1 = await fetch('https://exam-prep-app.onrender.com/api/v1/text/extract/', requestOptions1)
      const result1 = await res1.json()
      setTextArray(result1.extracted_text)

    } catch (error) {
      toast.error("An error occurred")
    }
  }

  return (
    <div className="mx-auto">

      {selectedImage && (
        <div className="flex flex-col gap-5">
          <img
            alt="not found"
            width={250}
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      )}
      <div className="flex flex-col items-center gap-5">
        <input
          type="file"
          name="myImage"
          onChange={(event: any) => {
            setSelectedImage(event.target.files[0]);
          }}
        />
        <button className='text-white py-2 px-4 bg-primaryColor hover:bg-primaryColor/80 rounded-[54px]' onClick={handleImageUpload}>Upload</button>
      </div>

      <div className='p-4 rounded-2xl resize-none w-4/5 border border-primaryColor'>
        {
          textArray?.map((item) => {
            <p>{item}</p>
          })
        }
      </div>
    </div>
  )
}
