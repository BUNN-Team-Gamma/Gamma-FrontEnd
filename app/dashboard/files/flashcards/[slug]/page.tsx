import Flashcard from '@/components/ui/flashcards/flashcard';
import { cookies } from 'next/headers'

const getData = async (id: string, url: string) => {
  const cookieStore = cookies()
  const token = cookieStore.get('userToken')
  try {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    };
    const res = await fetch(url, requestOptions
    );
    const result = await res.json();
    const data = result.filter((item: any) => id == item.id)
    const title: string = data[0].category
    return [data, title]

  } catch (error) {
    console.log(error)
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params?.slug
  const endpoint_base = `https://exam-prep-app.onrender.com/api/v1/flashcards/`;
  const [data, title]: any = await getData(id, endpoint_base)

  return (
    <div className='py-10 px-4 md:px-10 lg:px-16 2xl:px-40'>
      <h2 className='text-center font-bold md:text-2xl lg:text-4xl mb-4'>{title} Flashcards</h2>
      <div className='grid lg:grid-cols-3'>
        {
          data?.map((item: any, index: any) => (
            <Flashcard key={item} question={item.question} answer={item.answer} index={index+1}/>
          ))
        }
      </div>
    </div>
  )
}
