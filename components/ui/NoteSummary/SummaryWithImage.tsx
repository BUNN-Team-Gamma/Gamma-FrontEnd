"use client";

import { getCookie } from "cookies-next";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SummaryWithImage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [text, setText] = useState<string>("Upload");
  const [textArray, setTextArray] = useState([]);
  const [disabled, setDisbled] = useState<boolean>(false);

  const token = getCookie("userToken");

  const handleImageUpload = async (e: any) => {
    e.preventDefault();
    try {
      setText("Uploading image");
      setDisbled(true);
      const formdata = new FormData();
      formdata.append("image", selectedImage);

      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      };

      const res = await fetch(
        "https://exam-prep-app-1.onrender.com/api/v1/images/upload/",
        requestOptions
      );
      const result = await res.json();
      console.log(result);
      handleTextExtraction(result.image_id);
    } catch (error) {
      toast.error("An error occurred");
      setText("Upload");
      setDisbled(false);
    }
  };

  const handleTextExtraction = async (id: string) => {
    try {
      setText("Extracting text from image");
      const formdata = new FormData();
      formdata.append("image_id", id);

      const requestOptions1 = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      };
      const res = await fetch(
        "https://exam-prep-app-1.onrender.com/api/v1/text/extract/",
        requestOptions1
      );
      const result = await res.json();
      setTextArray(result.extracted_text);
      setText("Upload");
      setDisbled(false);
    } catch (error) {
      setText("Upload");
      toast.error("An error occurred");
      setDisbled(false);
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-4 items-center">
      {selectedImage && (
        <div className="flex justify-center gap-5">
          <img
            alt="not found"
            width="250px"
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      )}
      <form
        onSubmit={handleImageUpload}
        className="flex flex-col items-center gap-5"
      >
        <input
          type="file"
          name="myImage"
          onChange={(event: any) => {
            setSelectedImage(event.target.files[0]);
          }}
          required
        />
        <button
          disabled={disabled}
          className="text-white py-2 px-4 bg-primaryColor hover:bg-primaryColor/80 rounded-[54px]"
        >
          {text}
        </button>
      </form>

      <div className="p-4 rounded-2xl resize-none w-4/5 border border-primaryColor">
        {textArray?.map((item: any, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
