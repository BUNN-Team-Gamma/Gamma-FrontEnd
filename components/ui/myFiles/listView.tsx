"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function ListView({ list }: { list: any[] }) {
  console.log(list);
  return (
    <>
      <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
        {list.map((item, index) => {
          return (
            <Link
              href={
                item.category_name
                  ? `/dashboard/files/flashcards/${item.category_name}`
                  : item?.text_id && item?.extracted_text?.[0]
                  ? `/dashboard/files/extracted-text/${item?.text_id}`
                  : ""
              }
              className="flex px-4 md:px-6 py-2 md:py-4 border rounded-xl border-black justify-between text-left overflow-hidden"
              key={index}
            >
              <span className="flex font-semibold w-48 md:text-base text-[0.875rem] line-clamp-2">
                {item?.category_name
                  ? item?.category_name
                  : item?.extracted_text?.[0] + "..."}
              </span>
              <span className="my-auto">
                <IoIosArrowForward />
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
