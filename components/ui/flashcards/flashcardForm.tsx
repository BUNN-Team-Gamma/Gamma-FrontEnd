"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

export type CreateFlashcardtype = {
  question: string;
  answer: string;
  category: number;
  image: string;
  text: string;
  number_of_cards: number;
};

export type CategoryType = {
  id: number;
  category_name: string;
  created_at: string;
};

export default function FlashcardForm({
  addManually,
}: {
  addManually: boolean;
}) {
  const [postData, setPostdata] = useState<Partial<CreateFlashcardtype>>({});
  const token = getCookie("userToken");
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [categoryInput, setCategoryInput] = useState("");
  const endpoint = useMemo(() => {
    return addManually
      ? "https://exam-prep-app.onrender.com/api/v1/flashcards/"
      : "https://exam-prep-app.onrender.com/api/v1/flashcards/generate/";
  }, [addManually]);

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
          "https://exam-prep-app.onrender.com/api/v1/flashcards/categories/",
          { headers }
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [headers]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPostdata({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let category = (() => {
        for (let index = 0; index < categories.length; index++) {
          if (categories[index].category_name === categoryInput)
            return categories[index];
        }
      })();

      if (!category) {
        const response = await axios.post(
          "https://exam-prep-app.onrender.com/api/v1/flashcards/categories/",
          { category_name: categoryInput },
          { headers }
        );
        category = response.data;
      }
      const { data } = await axios.post(
        endpoint,
        { ...postData, category: category?.id },
        { headers }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-2/5 py-6">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="category"
            className="flex text-primaryColor font-bold"
          >
            <span>Name of Flashcard</span>
          </label>
          <input
            name="category"
            id="category"
            value={categoryInput}
            onChange={(event) => {
              setCategoryInput(event.target.value);
            }}
            className="flex w-full border border-primaryColor rounded-lg p-3"
          />
        </div>
        <div
          className={
            (addManually ? "hidden " : "flex ") + " flex-col gap-2 w-full"
          }
        >
          <label
            htmlFor="number_of_cards"
            className={"flex text-primaryColor font-bold"}
          >
            <span>Number of Flashcards</span>
          </label>
          <input
            name="number_of_cards"
            id="number_of_cards"
            type={"number"}
            min={1}
            max={15}
            onChange={handleChange}
            value={postData?.number_of_cards || 1}
            className="flex w-full border border-primaryColor rounded-lg p-3"
          />
        </div>
        <div
          className={
            (addManually ? "flex " : "hidden ") + " flex-col gap-2 w-full"
          }
        >
          <label
            htmlFor="question"
            className="flex text-primaryColor font-bold"
          >
            <span>Question</span>
          </label>
          <textarea
            name="question"
            id="question"
            value={postData?.question || ""}
            onChange={handleChange}
            className="flex w-full border h-32 border-primaryColor rounded-lg p-3"
          />
        </div>
        <div
          className={
            (addManually ? "flex " : "hidden ") + " flex-col gap-2 w-full"
          }
        >
          <label htmlFor="answer" className="flex text-primaryColor font-bold">
            <span>Answer</span>
          </label>
          <textarea
            name="answer"
            id="answer"
            value={postData?.answer || ""}
            onChange={handleChange}
            className="flex w-full border h-32 border-primaryColor rounded-lg p-3"
          />
        </div>
        <div
          className={
            (addManually ? "hidden " : "flex ") + " flex-col gap-2 w-full"
          }
        >
          <label htmlFor="text" className="flex text-primaryColor font-bold">
            <span>Text for Generation</span>
          </label>
          <textarea
            name="text"
            id="text"
            value={postData?.text || ""}
            onChange={(event) => {
              setPostdata({
                ...postData,
                text: JSON.stringify(event.target.value),
              });
            }}
            className="flex w-full border h-32 border-primaryColor rounded-lg p-3"
          />
        </div>
        <div className="flex gap-4 mx-auto">
          <button className="flex justify-center bg-primaryColor p-2 w-32 font-semibold text-white rounded-full">
            <span>Create</span>
          </button>
          <button
            className={
              (addManually ? "flex " : "hidden ") +
              " justify-center bg-primaryColor p-2 w-40 font-semibold text-white rounded-full"
            }
          >
            <span>Save and add...</span>
          </button>
        </div>
      </form>
    </>
  );
}
