"use client";

import { useRouter } from "next/navigation";

export default function ListView({ list }: { list: any[] }) {
  const router = useRouter();
  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full">
        {list.map((item, index) => {
          return (
            <button
              // onClick={() => {if (tem?.category_name) router.push()}} Todo: add the url for the page you are making
              className="flex px-6 py-4 border rounded-xl border-black flex-col text-left overflow-hidden"
              key={index}
            >
              <span className="flex font-semibold w-48 line-clamp-2">
                {item?.extracted_text?.[0] || item?.category_name}
              </span>
              {/* <span className="flex text-[0.875rem] text-nowrap w-48">
                Total Characters: 4857
              </span> */}
            </button>
          );
        })}
      </div>
    </>
  );
}
