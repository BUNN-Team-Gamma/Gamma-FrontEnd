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
          " gap-12 p-12 rounded-lg shadow-lg absolute bg-white"
        }
      >
        <button>
          <IoSave />
          <span>My Extracted Texts</span>
        </button>
        <button>
          <CiCreditCard1 />
          <span>My Flash cards</span>
        </button>
        <button>
          <GiNotebook />
          <span>My Summaries</span>
        </button>
      </div>
    </>
  );
}
