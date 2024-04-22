import FlashcardForm from "@/components/ui/flashcards/flashcardForm";
import { Suspense } from "react";

export default function AIGeneratedFlashcards() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center w-full mx-auto">
        <Suspense>
          <FlashcardForm addManually={false} />
        </Suspense>
      </section>
    </>
  );
}
