"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FlashcardPage() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col mx-auto gap-2">
        <button
          onClick={() => {
            router.push("./flashcards/ai-generated");
          }}
          className="flex text-white font-semibold bg-primaryColor w-48 p-3 rounded-full"
        >
          <span className="flex mx-auto">Generate Flashcards</span>
        </button>
        <Link
          className="flex mx-auto font-semibold text-[0.875rem]"
          href={"./flashcards/addManually"}
        >
          or drop Questions
        </Link>
      </div>
    </>
  );
}
