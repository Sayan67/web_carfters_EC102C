import Image from "next/image";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
import { SiSpring } from "react-icons/si";


const Hero = () => {
  return (
    <main className="w-full h-screen bg-slate-900/80 rounded-3xl py-6 px-6 flex text-white">

      {/* Hero section */}
      <div className="relative w-full flex items-center justify-end px-10 font-questrial">

        {/* Small rounded banners */}
        <div className="absolute top-[7vw] left-[3vw] flex justify-between gap-4 -translate-y-[100%]">
          <h1 className="border-[1px] border-slate-700 rounded-full py-2 px-3">Most fresh collection in market</h1>
          <h1 className="flex gap-2 items-center border-[1px] border-slate-700 rounded-full py-[0.18rem]  text-[] px-3"><SiSpring />Spring Collection<SiSpring /></h1>
        </div>

        {/* Hero section text */}
        <h1 className=" absolute z-[1] top-[7vw] left-[3vw] font-space_grotesk text-white text-[7vmax] leading-none whitespace-nowrap">
          Your Style Spea<span className="lg:text-black">ks</span>
        </h1>

        {/* Thin border */}
        <div className="w-full border-b-[1px] h-fit border-slate-700 flex gap-4 p-6 items-center">

          <div className="w-full border-[1px] border-slate-700 rounded-3xl p-3 text-slate-400">
            <p>Clothes are the expression of your style and personality. You can give your style an elegance and edge by our wide range of clothing and accessories. This will express the true boldness and strength of your true self.</p>
          </div>

        </div>
      </div>

      {/* Hero section right div */}
      <div className="relative w-full flex items-start justify-center">
        <div className="">
          <Image
            className="rounded-3xl"
            src="/images/orangehero.jpeg"
            alt="hero"

            sizes="(min-width:1024px) 50vw, 80vw"
            width={590}
            height={700}
            quality={100}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
