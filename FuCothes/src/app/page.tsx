import Features from "@/components/features";
import Hero from "@/components/hero";
import LocomotiveScroll from "locomotive-scroll";


export default function Home() {
  
  return (
    <main className="bg-black px-6">
      <Hero />
      <Features />
    </main>
  );
}
