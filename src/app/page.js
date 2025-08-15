"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import BuyEggsContainer from "@/components/BuyEggsContainer";
import EggsVariety from "@/components/EggsVariety";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import BottomBanner from '@/components/BottomBanner';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Home() {

  const { isLoading } = useSelector((state) => state.spinner);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    console.log("spinner state", isLoading);
    
  }, []);
  return (
    <div className="w-full bg-slate-50 text-black overflow-x-hidden">
      <div className="flex flex-col items-center min-h-screen">
        <Navbar />
        <HeroSlider />
        <EggsVariety />
        <BuyEggsContainer />
        <BottomBanner />
        <Footer />
        {/* <Spinner hidden={isLoading}/> */}
      </div>
    </div>
  );
}
