"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useMemo, useState } from "react";

export default function SummaryTextListPage() {
  //   const [extractedTextList, setExtractedTextList] = useState<[]>(
  //     []
  //   );
  //   const token = getCookie("userToken");
  //   const endpoint_base = "https://exam-prep-app-1.onrender.com/api/v1/";

  //   const headers = useMemo(
  //     () => ({
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     }),
  //     [token]
  //   );

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const { data } = await axios.get(
  //           endpoint_base + "text/extracted-texts/",
  //           { headers }
  //         );
  //         setExtractedTextList(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }, [headers]);
  return (
    <>
      <section className="px-16 py-10 flex w-full min-h-80 justify-center">
        <div className="flex flex-col gap-4 w-full">
          <span className="text-[1.2rem] font-bold">My Summarized Texts</span>
          {/* <ListView list={extractedTextList} /> */}
        </div>
      </section>
    </>
  );
}
