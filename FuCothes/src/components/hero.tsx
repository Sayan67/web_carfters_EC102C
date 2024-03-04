import Image from "next/image";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
const Hero = () => {
  return (
    <main className="w-full h-screen bg-slate-900/80 rounded-3xl py-6 px-6 flex">
      <div className="relative w-full flex justify-end">
        <h1 className="font-space_grotesk text-white text-[5vmax]">
          Your Style Speaks
        </h1>
      </div>
      <div className="w-full flex items-center">
        <Image
        className="rounded-3xl"
          src="/images/orangehero.jpeg"
          alt="hero"

          sizes="(min-width:1024px) 50vw, 100vw"
          width={650}
          height={900}
          quality={100}
        />
      </div>
    </main>
  );
};

export default Hero;
