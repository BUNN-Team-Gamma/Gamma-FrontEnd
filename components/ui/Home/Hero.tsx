import PrimaryBtn from "@/components/primaryBtn";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#E5FAFF] py-10 lg:py-5 px-4 md:px-10 lg:px-16 2xl:px-40 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h1 className="text-center md:text-left font-bold text-3xl md:text-5xl lg:text-6xl lg:text-[60px] leading-[1.2]">
          Best Online <br className="hidden md:block" />
          {/* <br className="hidden md:block" /> */}
          AI Exam Prep <br className="hidden md:block" />
          Assistant
        </h1>
        <div className="my-5 flex gap-10 items-center">
          <Link href="/">
            <PrimaryBtn
              variant={false}
              text="Explore Features"
              size=""
              weight=""
            />
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center underline hover:no-underline"
          >
            <Image
              src="/Group 3.svg"
              alt="Play"
              width={100}
              height={50}
              className="w-6 lg:w-fit"
            />
            <p>Watch demo</p>
          </Link>
        </div>
      </div>
      <Image
        src="/HeroImage.svg"
        alt="hero image"
        width={300}
        height={100}
        className="md:w-2/5"
      />
    </div>
  );
}
