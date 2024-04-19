"use client";
import Flashcard from "@/components/ui/flashcards/flashcard";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const id = decodeURIComponent(params?.slug);
  const endpoint_base = `https://exam-prep-app-1.onrender.com/api/v1/flashcards/`;
  const [data, setData] = useState<any>();
  const [title, setTitle] = useState<any>();
  const token = getCookie("userToken");

  useEffect(() => {
    (async () => {
      try {
        const requestOptions = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch(endpoint_base, requestOptions);
        const result = await res.json();
        console.log(result);

        const data = result.filter((item: any) => id == item.category);
        setData(data);
        setTitle(id);
      } catch (error) {
        console.log(error);
        throw error;
      }
    })();
  }, [endpoint_base, id, token]);

  return (
    <div className="py-10 px-4 md:px-10 lg:px-16 2xl:px-40">
      <h2 className="text-center font-bold md:text-2xl lg:text-4xl mb-4">
        {title} Flashcards
      </h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {(data as any)?.map((item: any, index: any) => (
          <Flashcard
            key={item}
            question={item.question}
            answer={item.answer}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
