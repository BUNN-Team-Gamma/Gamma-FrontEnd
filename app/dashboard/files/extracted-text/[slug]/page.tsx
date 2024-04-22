"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const id = decodeURIComponent(params?.slug);
  const token = getCookie("userToken");
  const endpoint_base = `https://exam-prep-app-1.onrender.com/api/v1/text/extracted-texts/`;
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const requestOptions = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const res = await fetch(endpoint_base, requestOptions);
        const result = await res.json();
        const data = result.filter((item: any) => id == item.text_id);
        setData(data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [endpoint_base, id, token]);

  return (
    <div className="py-10 px-4 md:px-10 lg:px-16 2xl:px-40">
      <h2 className="text-center font-bold md:text-2xl lg:text-4xl mb-4">
        Your extracted texts
      </h2>
      <div className="flex flex-col gap-2">
        {data?.extracted_text?.map((item: any) => (
          <p key={item} className="font-medium">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
