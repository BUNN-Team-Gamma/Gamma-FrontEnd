"use client";

import { Dispatch, SetStateAction, useState } from "react";

export default function Flashcard({
  index,
  question,
  answer,
  inView,
  setInView,
}: {
  index: number;
  question: string;
  answer: string;
  inView: boolean;
  setInView: Dispatch<SetStateAction<number>>;
}) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  return (
    <div
      onClick={() => {
        if (inView) {
          setShowAnswer(!showAnswer);
        } else {
          setInView(index);
        }
      }}
      className={
        (inView ? "scale-110 " : " scale-90 ") +
        "p-4 md:p-10 flex flex-col gap-2 md:gap-5 items-center bg-[#8EEBFF] rounded-2xl cursor-pointer min-w-[10rem] max-w-[10rem] md:max-w-full md:w-[50rem]"
      }
    >
      {showAnswer ? (
        <>
          <p className="text-[0.75rem] md:text-xl">Answer</p>
          <p className="font-bold text-[0.875rem] md:text-2xl">{index + 1}.</p>
          <p className="text-[0.875rem] md:text-3xl">{answer}</p>
        </>
      ) : (
        <>
          <p className="text-[0.75rem] md:text-xl">Question</p>
          <p className="font-bold text-[0.875rem] md:text-2xl">{index + 1}.</p>
          <p className="text-[0.875rem] md:text-3xl">{question}</p>
        </>
      )}
    </div>
  );
}
