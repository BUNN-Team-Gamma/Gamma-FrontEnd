import FlashcardForm from "@/components/ui/flashcards/flashcardForm";
import { Suspense } from "react";

export default function AddManually() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center w-full mx-auto">
        <Suspense>
          <FlashcardForm addManually />
        </Suspense>
      </section>
    </>
  );
}
