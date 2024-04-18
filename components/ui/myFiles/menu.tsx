import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { GiNotebook } from "react-icons/gi";
import { IoSave } from "react-icons/io5";

export default function FilesMenu({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={
          (show ? "flex " : "hidden ") +
          " gap-12 px-12 py-6 rounded-2xl shadow-lg absolute bg-white top-20 left-80"
        }
      >
        <Link
          onClick={() => setShow(false)}
          href={"/dashboard/files/extracted-text"}
        >
          <IoSave className="mx-auto" size={"1.5rem"} />
          <span className="text-[0.875rem]">My Extracted Texts</span>
        </Link>
        <Link
          onClick={() => setShow(false)}
          href={"/dashboard/files/flashcards"}
        >
          <CiCreditCard1 className="mx-auto" size={"1.5rem"} />
          <span className="text-[0.875rem]">My Flash cards</span>
        </Link>
        {/* <Link
          onClick={() => setShow(false)}
          href={"/dashboard/files/summaries"}
        >
          <GiNotebook className="mx-auto" size={"1.5rem"} />
          <span className="text-[0.875rem]">My Summaries</span>
        </Link> */}
      </div>
    </>
  );
}
