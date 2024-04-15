import AIServices from "@/components/ui/Home/AIServices";
import Contact from "@/components/ui/Home/Contact";
import Demo from "@/components/ui/Home/Demo";
import Hero from "@/components/ui/Home/Hero";
import Reviews from "@/components/ui/Home/Reviews";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AIServices/>
      <Demo/>
      <Reviews/>
      <Contact/>
    </main>
  );
}
