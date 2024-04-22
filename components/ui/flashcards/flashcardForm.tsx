"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { IoIosAdd } from "react-icons/io";

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
interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
  image?: string | null;
  created_at: string;
  updated_at: string;
}

export default function FlashcardForm({
  addManually,
}: {
  addManually: boolean;
}) {
  const [postData, setPostdata] = useState<Partial<CreateFlashcardtype>>({});
  const searchParams = useSearchParams();
  const token = getCookie("userToken");
  const router = useRouter();

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [resData, setResdata] = useState<Question[]>();
  const [isHovered, setIsHovered] = useState(false);
  const queryCategory = searchParams.get("category");

  const [loading, setLoading] = useState<boolean>(false);
  const [addNew, setAddNew] = useState<boolean>(false);
  const [categoryInput, setCategoryInput] = useState("");

  const endpoint = useMemo(() => {
    return addManually
      ? "https://exam-prep-app-1.onrender.com/api/v1/flashcards/"
      : "https://exam-prep-app-1.onrender.com/api/v1/flashcards/generate/";
  }, [addManually]);

  const headers = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    [token]
  );

  useMemo(() => {
    if (queryCategory) setCategoryInput(queryCategory);
  }, [queryCategory]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://exam-prep-app-1.onrender.com/api/v1/flashcards/categories/",
          { headers }
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [headers]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    setLoading(true);
    try {
      let category = (() => {
        for (let index = 0; index < categories.length; index++) {
          if (categories[index].category_name === categoryInput)
            return categories[index];
        }
      })();

      if (!category) {
        const response = await axios.post(
          "https://exam-prep-app-1.onrender.com/api/v1/flashcards/categories/",
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

      setResdata(data);
      setLoading(false);
      setPostdata({});
      {
        addNew
          ? router.push(
              "/dashboard/flashcards/addManually?category=" + categoryInput
            )
          : router.push("/dashboard/files/flashcards/" + categoryInput);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(
        error?.response?.data?.category_name?.[0]
          ? "Please add a Category"
          : "Something went wrong. Please try again."
      );
      console.log(error);
    }
  };
  console.log(resData);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:text-base text-[0.875rem] sm:w-3/5 gap-4 md:gap-6 w-full lg:w-2/5 py-2 md:py-6 mx-auto"
      >
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="category"
            className="flex text-primaryColor font-bold"
          >
            <span>Flashcard Category</span>
          </label>
          <input
            name="category"
            id="category"
            list="category-datalist"
            value={categoryInput}
            onChange={(event) => {
              setCategoryInput(event.target.value);
            }}
            className="flex w-full border border-primaryColor rounded-lg p-3"
          />
          <datalist id="category-datalist">
            {categories.map((category) => {
              return (
                <option value={category.category_name} key={category.id}>
                  {category.category_name}
                </option>
              );
            })}
          </datalist>
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
            <span>Number of Flashcards (max 10)</span>
          </label>
          <input
            name="number_of_cards"
            id="number_of_cards"
            type={"number"}
            min={1}
            max={10}
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
                text: event.target.value,
              });
            }}
            className="flex w-full border h-32 border-primaryColor rounded-lg p-3"
          />
        </div>

        <div className="flex flex-col mx-auto gap-2">
          <Link
            href={"/dashboard/flashcards/ai-generated"}
            className={
              (addManually ? "flex " : "hidden ") +
              " justify-center text-primaryColor font-semibold text-[0.875rem] underline"
            }
          >
            or generate with AI
          </Link>
          <div className="flex gap-4 mx-auto">
            <button
              disabled={loading}
              className="flex justify-center bg-primaryColor p-2 w-32 font-semibold text-white rounded-full"
            >
              {loading ? <span>Creating...</span> : <span>Create</span>}
            </button>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setAddNew(true)}
              disabled={loading}
              className={
                (addManually ? "flex " : "hidden ") +
                ` transition duration-200 ease-in-out ${
                  isHovered ? "w-40 mx-0" : "-mx-2"
                } justify-center bg-primaryColor p-2 hover:w-40 font-semibold text-[o.75rem] md:text-[0.875rem] text-white rounded-full`
              }
            >
              {isHovered ? (
                <span>Save and add new...</span>
              ) : (
                <span className="my-auto">
                  <IoIosAdd
                    color="#fff"
                    className="text-[1.2rem] md:text-[1.5rem] font-semibold"
                  />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
