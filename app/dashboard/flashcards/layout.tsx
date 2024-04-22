export default function FlashcardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex justify-center px-6 py-12">
        <div className="flex w-full flex-col gap-4 md:gap-6">
          <span className="flex mx-auto font-bold text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] md:w-[25rem] lg:w-[30rem] text-center">
            Create Flash Cards with your key points and Questions
          </span>
          {children}
        </div>
      </section>
    </>
  );
}
