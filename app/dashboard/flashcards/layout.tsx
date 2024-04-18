export default function FlashcardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex justify-center px-6 py-12">
        <div className="flex w-full flex-col gap-6">
          <span className="flex mx-auto font-bold text-[2rem] w-[30rem] text-center">
            Create Flash Cards with your key points and Questions
          </span>
          {children}
        </div>
      </section>
    </>
  );
}
