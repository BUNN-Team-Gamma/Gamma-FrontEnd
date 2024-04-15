import { FaStar } from "react-icons/fa";

export default function ReviewCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="p-5 rounded-[20px] bg-[#F8F8F8] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between">
        <h3 className="font-bold">
          {name}
        </h3>
        <div className="flex">
          <FaStar color="gold" size={20}/>
          <FaStar color="gold" size={20}/>
          <FaStar color="gold" size={20}/>
          <FaStar color="gold" size={20}/>
          <FaStar color="gold" size={20}/>
        </div>
      </div>
      <p className="py-3 text-sm">&quot;{text}&quot;</p>
    </div>
  )
}
