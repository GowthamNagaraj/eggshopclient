"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import BuyEggsContainer from "@/components/BuyEggsContainer";
import EggsVariety from "@/components/EggsVariety";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="w-full bg-slate-50 text-black overflow-x-hidden">
      <div className="flex flex-col items-center min-h-screen">
        <Navbar />
        <HeroSlider />
        <EggsVariety />
        <BuyEggsContainer />
      </div>
    </div>
  );
}
