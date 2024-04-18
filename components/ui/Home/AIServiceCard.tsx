import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";

export default function AIServiceCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-white">
      <Image
        src={img}
        alt="card image"
        width={200}
        height={100}
        className="rounded-2xl w-full"
      />
      <div className="my-3">
        <h3 className="text-center font-bold lg:text-lg">{title}</h3>
        <p className="text-[#808080] text-sm lg:text-xs font-semibold flex items-center gap-1">
          {/* <GiGraduateCap size={20} color="#FF4848" /> */}
          {/* 40 Lessons */}
        </p>
      </div>
    </div>
  );
}
