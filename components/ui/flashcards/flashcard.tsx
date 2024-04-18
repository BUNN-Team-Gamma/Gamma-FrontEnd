'use client'

import { useState } from "react"

export default function Flashcard({ index, question, answer }: { index: string, question: string, answer: string }) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  return (
    <div onClick={() => setShowAnswer(!showAnswer)} className="p-10 flex flex-col gap-5 items-center bg-[#8EEBFF] rounded-2xl cursor-pointer w-full md:w-fit">
      {
        showAnswer ? <>
          <p className="text-xl">Answer</p>
          <p className="font-bold text-2xl">{index}.</p>
          <p className="text-3xl">{answer}</p>
        </> : <>
          <p className="text-xl">Question</p>
          <p className="font-bold text-2xl">{index}.</p>
          <p className="text-3xl">{question}</p>
        </>
      }
    </div>
  )
}
