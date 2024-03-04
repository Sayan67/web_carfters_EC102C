import Image from "next/image";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
import { SiSpring } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <main className="w-full lg:h-screen bg-slate-900/80 rounded-3xl py-6 px-6 md:flex md:fle text-white">

      {/* Hero section */}
      <div className="relative w-full md:h-[70vh] lg:h-full md:flex flex-col justify-end items-center  px-4 lg:px-10 font-questrial">

        {/* Small rounded banners */}
        <div className="absolute top-[8vw] md:top-[7vw] left-[3vw]  lg:flex justify-between gap-4 translate-y-[120%] lg:-translate-y-[125%] text-slate-400">
          <h1 className="border-[1px] border-slate-700 rounded-full py-2 px-3">Most fresh collection in market</h1>
          <h1 className="flex gap-2 items-center border-[1px] border-slate-700 rounded-full py-[0.18rem]  text-[] px-3"><SiSpring />Spring Collection<SiSpring /></h1>
        </div>

        {/* Hero section text */}
        <h1 className=" absolute top-[7vw] md:top-[9vw] left-[3vw] font-space_grotesk text-white text-[7vmax] leading-none md:whitespace-nowrap">
          Your Style Speaks.
        </h1>

        {/* Thin border */}
        <div className="hidden w-full border-b-[1px] pt-60 md:h-fit border-slate-700 md:flex gap-4 lg:p-6 items-center pb-5 md:pt-36 mb-8">

          <div className="w-full border-[1px] border-slate-700 rounded-3xl px-3 py-5 text-slate-400">
            <p>Clothes are the expression of your style and personality. You can give your style an elegance and edge by our wide range of clothing and accessories. This will express the true boldness and strength of your true self.</p>
          </div>

        </div>

        <div className="flex gap-6 justify-between w-full pt-52 md:pt-0">
          <a href="/" className=" rounded-3xl relative">
            <Image src={"/images/Orangejacket.webp"} width={200} height={200} alt="" className="rounded-3xl m-b-8"></Image>
            <div className="absolute top-2 right-2 text-white rounded-full p-2 bg-slate-500"><MdArrowOutward size={20}/></div>
          </a>
          <a href="/" className=" border-[1px] border-slate-700 rounded-3xl relative flex flex-col justify-center text-[2vmax] items-center p-6 font-space_grotesk w-[60%] leading-none gap-6"> 
            <h1 className="-tracking-wider">Full of surprizes
            <div className="border-[1px] border-slate-700 w-full"></div>
            </h1>
            <div className="absolute top-2 right-2 text-white rounded-full p-2 bg-slate-500"><MdArrowOutward size={20}/></div>
          </a>

        </div>
        
      </div>

      {/* Hero section right div */}
      <div className="relative w-full flec-col md:flex items-start justify-center ">
        <div className="relative overflow-hidden">
          <div className=" absolute top-[9vw] text-black text-[7vmax] leading-none whitespace-nowrap font-space_grotesk lg:-translate-x-[13.8vw] xl:-translate-x-[80%] hidden md:block">Speaks.</div>
          <Image
            className="rounded-3xl md:m-0 mt-10"
            src="/images/orangehero.jpeg"
            alt="hero"

            sizes="(min-width:1024px) 50vw, 80vw"
            width={500}
            height={700}
            quality={100}
          />
        </div>
        <div className="md:hidden w-full border-b-[1px] md:pt-0 pt-6 md:h-fit border-slate-700 flex gap-4 lg:p-6 items-center pb-5 lg:pt-40 mb-8">

          <div className="w-full border-[1px] border-slate-700 rounded-3xl px-3 py-5 text-slate-400">
            <p>Clothes are the expression of your style and personality. You can give your style an elegance and edge by our wide range of clothing and accessories. This will express the true boldness and strength of your true self.</p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;
