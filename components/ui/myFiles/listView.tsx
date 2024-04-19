"use client";

import Link from "next/link";

export default function ListView({ list }: { list: any[] }) {
  console.log(list);
  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full">
        {list.map((item, index) => {
          return (
            <Link
              href={`/dashboard/files/flashcards/${item.category_name}`}
              className="flex px-6 py-4 border rounded-xl border-black flex-col text-left overflow-hidden"
              key={index}
            >
              <span className="flex font-semibold w-48 line-clamp-2">
                {item?.extracted_text?.[0] || item?.category}
              </span>
              {/* <span className="flex text-[0.875rem] text-nowrap w-48">
                Total Characters: 4857
              </span> */}
            </Link>
          );
        })}
      </div>
    </>
  );
}
