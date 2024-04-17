import FlashcardForm from "@/components/ui/flashcards/flashcardForm";

export default function AIGeneratedFlashcards() {
  return (
    <>
      <section className="flex justify-center w-full ">
        <FlashcardForm addManually={false} />
      </section>
    </>
  );
}
