
import SummaryForm from '@/components/ui/NoteSummary/SummaryForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Note Summarization | Best AI School",
  description: "Best Online Artificial Intelligence School",
};

export default function Page() {
  return (
    <main className='mx-auto md:w-4/5 lg:w-3/5 py-10 px-4 md:px-10 lg:px-16 2xl:px-40'>
      <h2 className='text-center font-bold md:text-2xl lg:text-4xl mb-4'>Upload or paste a document to be summarized</h2>
      <SummaryForm/>
    </main>
  )
}
