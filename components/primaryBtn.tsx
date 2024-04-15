export default function PrimaryBtn({ text, size, weight, variant }: { text: string, size: string, weight: string, variant: boolean }) {
  return (
    <button className={`text-white ${size} ${weight} ${variant ? 'py-4 px-8': 'py-2 px-4'} bg-primaryColor hover:bg-primaryColor/80 rounded-[54px]`}>
      {text}
    </button>
  )
}
