import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-w-screen bg-slate-50 text-black">
      <div className="flex flex-col items-center min-h-screen">
        <Navbar />
        <HeroSlider />
      </div>
    </div>
  );
}
