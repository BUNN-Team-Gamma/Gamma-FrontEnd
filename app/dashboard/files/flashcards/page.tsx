"use client";
import { CategoryType } from "@/components/ui/flashcards/flashcardForm";
import ListView from "@/components/ui/myFiles/listView";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useMemo, useState } from "react";

export default function FlashcardCategoryListPage() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const token = getCookie("userToken");
  const endpoint_base = "https://exam-prep-app-1.onrender.com/api/v1/";

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
          endpoint_base + "flashcards/",
          { headers }
        );
        setCategoryList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [headers]);
  return (
    <>
      <section className="px-16 py-10 flex w-full min-h-80 justify-center">
        <div className="flex flex-col gap-4 w-full">
          <span className="text-[1.2rem] font-bold">Flashcard Categories</span>
          <ListView list={categoryList} />
        </div>
      </section>
    </>
  );
}
