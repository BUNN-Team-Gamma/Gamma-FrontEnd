import SummaryWithImage from "@/components/ui/NoteSummary/SummaryWithImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Extraction | Best AI School",
  description: "Best Online Artificial Intelligence School",
};
export default function Page() {
  return (
    <main className='mx-auto md:w-4/5 lg:w-3/5 py-10 px-4 md:px-10 lg:px-16 2xl:px-40'>
      <h2 className='text-center font-bold md:text-2xl lg:text-4xl mb-4'>Upload a picture to extract text</h2>
      <SummaryWithImage/>
    </main>
  )
}
