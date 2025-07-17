import EggsVariety from "@/components/EggsVariety";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 text-black overflow-x-hidden">
      <div className="flex flex-col items-center min-h-screen">
        <Navbar />
        <HeroSlider />
        <EggsVariety />
      </div>
    </div>
  );
}
