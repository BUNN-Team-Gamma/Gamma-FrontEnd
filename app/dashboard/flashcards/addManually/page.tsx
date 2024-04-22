import FlashcardForm from "@/components/ui/flashcards/flashcardForm";

export default function AddManually() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center w-full mx-auto">
        <FlashcardForm addManually />
      </section>
    </>
  );
}
