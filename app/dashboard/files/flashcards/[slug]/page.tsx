"use client";
import Flashcard from "@/components/ui/flashcards/flashcard";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const id = decodeURIComponent(params?.slug);
  const endpoint_base = `https://exam-prep-app-1.onrender.com/api/v1/flashcards/`;
  const token = getCookie("userToken");

  const [data, setData] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [inView, setInView] = useState<number>(0);

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
    <div className="py-4 md:py-10 px-4 md:px-10 lg:px-16 h-fit gap-4 md:gap-8 2xl:px-40 -mx-16">
      <h2 className="text-center font-bold md:text-2xl lg:text-4xl mb-8 md:mb-16">
        {title} Flashcards
      </h2>
      <div className="flex h-fit gap-2 md:gap-4 mx-auto">
        {(data as any)?.map((item: any, index: any, array: any[]) => {
          if (
            index === inView - 1 ||
            index === inView ||
            index === inView + 1
          ) {
            return (
              <>
                {((index === 0 && index === inView) ||
                  (index === array.length - 1 && index === inView)) && (
                  <div
                    className={
                      (index === array.length - 1 ? "order-last " : "") +
                      "flex min-w-[10rem] md:w-[50rem] scale-90"
                    }
                  ></div>
                )}
                <Flashcard
                  key={item}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  inView={inView === index}
                  setInView={setInView}
                />
              </>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
}
