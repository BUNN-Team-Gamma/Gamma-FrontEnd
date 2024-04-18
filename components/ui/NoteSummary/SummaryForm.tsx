"use client";

import { getCookie } from "cookies-next";
import { useState } from "react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

export default function SummaryForm() {
  const [summary, setSummary] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const token = getCookie("userToken");

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("content", text);
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      };
      const res = await fetch(
        "https://exam-prep-app.onrender.com/api/v1/summarize/",
        requestOptions
      );
      const result = await res.json();
      setLoading(false);
      setSummary(result.summary_content);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-3 items-center w-4/5"
        onSubmit={handleOnSubmit}
      >
        <textarea
          required
          rows={10}
          className="p-4 focus:outline-none rounded-2xl resize-none w-full border-2 border-primaryColor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="text-white py-2 px-4 bg-primaryColor hover:bg-primaryColor/80 rounded-[54px]"
        >
          {loading ? "Summarizing" : "Summarize"}
        </button>
      </form>
      <div className="p-4 rounded-2xl resize-none w-4/5 border border-primaryColor">
        <article className="md:mx-auto text-justify prose prose-img:w-full dark:prose-invert lg:prose-xl">
          {
            summary?.map((item) => (
              <Markdown key={item} className="">
                {item}
              </Markdown>
            ))
          }
        </article>
      </div>
    </div>
  );
}
