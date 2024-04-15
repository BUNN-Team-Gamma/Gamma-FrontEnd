import ReviewCard from "./ReviewCard"

const reviews = [
  {
    name: 'Chukwuemeka Jude',
    text: "This app has been a game-changer for me! As a visual learner, being able to extract text from images has saved me so much time and effort. I no longer have to worry about deciphering my messy handwritten notes or typing out long passages from textbooks. Creating flashcards is a breeze, and the summarization feature has helped me condense complex material into manageable chunks. It's like having a personal study assistant right in my pocket!"
  },
  {
    name: 'Nnamdi Sarah',
    text: "I can't recommend this app enough! As a busy student juggling multiple classes, the text extraction feature has been a lifesaver. Instead of spending hours transcribing notes, I can simply snap a picture and have everything digitized instantly. The flashcard creator is a godsend for studying, and the summaries are perfect for reviewing before exams. Plus, the app's interface is so user-friendly—I was up and running in no time!"
  },
  {
    name: 'Obi Peter',
    text: "I'm so impressed with this app—it's truly revolutionized how I study. The ability to extract text from images has made my note-taking process so much more efficient. I love how I can turn any piece of text into a flashcard with just a few taps, and the summarization feature has helped me stay on top of my readings without getting overwhelmed. It's like having a personal tutor guiding me through my studies, and I couldn't be happier with the results!"
  }
]

export default function Reviews() {
  return (
    <div className='py-10 lg:py-20 px-4 md:px-10 lg:px-40'>
      <h1 className='text-center font-bold text-3xl md:text-[44px] mb-8'>
        Our Students&apos; Reviews
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {
          reviews.map((review) => (
            <ReviewCard key={review.name} name={review.name} text={review.text}/>
          ))
        }
      </div>
    </div>
  )
}
