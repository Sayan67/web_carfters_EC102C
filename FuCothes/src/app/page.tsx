"use client"
import Features from "@/components/features";
import Hero from "@/components/hero";
import LocomotiveScroll from "locomotive-scroll";
import Contact from "@/components/Contact";
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <main className="bg-black px-6 h-full">
      <Hero />
      <Features />
      {/* <Contact /> */}
    </main>
  );
}
