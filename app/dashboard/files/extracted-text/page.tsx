"use client";
import ListView from "@/components/ui/myFiles/listView";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useMemo, useState } from "react";

export type ExtractedText = {
  text_id: string;
  image: string;
  user_id: string;
  extracted_text: string[];
  extracted_at: string;
};

export default function ExtractedTextPage() {
  const [extractedTextList, setExtractedTextList] = useState<ExtractedText[]>(
    []
  );
  const token = getCookie("userToken");
  const endpoint_base = "http://127.0.0.1:8000/api/v1/";

  const headers = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    [token]
  );

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          endpoint_base + "text/extracted-texts/",
          { headers }
        );
        setExtractedTextList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [headers]);
  return (
    <>
      <section className="px-16 py-10 flex w-full min-h-80 justify-center">
        <div className="flex flex-col gap-4 w-full">
          <span className="text-[1.2rem] font-bold">Extracted Texts</span>
          <ListView list={extractedTextList} />
        </div>
      </section>
    </>
  );
}
