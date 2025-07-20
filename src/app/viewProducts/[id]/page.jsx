"use client"
import RollingCounts from '@/components/uis/RollingCounts';
import BreadCrums from '@/components/BreadCrums'
import Navbar from '@/components/Navbar'
import ProductViewSlider from '@/components/ProductViewSlider'
import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/uis/dialog"
const viewProducts = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className='min-w-full min-h-full md:px-28 px-12 mt-10 mb-20'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
          <div data-aos="fade-up" className='max-w-md md:max-w-xl lg:max-w-3xl md:col-span-2 lg:col-span-1 max-h-[500px]'><ProductViewSlider /></div>

          <div className="bg-slate-100 max-w-5xl max-h-[600px] col-span-2 rounded-xl shadow-md p-5">
            <div>
              <BreadCrums data-aos="fade-left"/>
              <h1 className='text-3xl lg:text-xl font-bold text-amber-500' data-aos="fade-left">Kariyappatti Siva Eggs</h1>
              <p className='text-sm lg:text-xs mb-5' data-aos="fade-down">Looking for farm-fresh eggs in Kariyappatti? We supply high-quality white and brown eggs directly from trusted poultry farms in and around the Thanjavur region./நீங்கள் பசுமை மற்றும் புதிய முட்டைகள் தேடுகிறீர்களா? தஞ்சாவூரைச் சேர்ந்த நம்பகமான கோழி பண்ணைகளில் இருந்து, தினமும் கையிருப்பு தரப்படுகின்றது.</p>
              <div className='flex items-center gap-x-7 mb-5' data-aos="fade-left">
                <h2 className='font-bold text-amber-800'>Quantity:</h2>
                <div className='flex items-center justify-between p-2 bg-gray-200 w-32 rounded-bl-2xl rounded-tr-2xl'>
                  <button className='cursor-pointer' onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)}><FaMinusCircle className='text-red-600 text-3xl hover:text-red-700 active:text-red-800' /></button>
                  <p className='text-3xl font-bold text-amber-500 text-center'><RollingCounts number={count} /></p>
                  <button className='cursor-pointer' onClick={() => setCount((prev) => prev + 1)}><FaPlusCircle className='text-lime-600 hover:text-lime-700 active:text-lime-800 text-3xl' /></button>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6' data-aos="fade-left">
                <button className='bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-slate-50 font-bold text-xl px-8 py-2 rounded-2xl cursor-pointer'>Add to Cart</button>
                <Dialog>
                  <DialogTrigger className="bg-amber-600 hover:bg-amber-700 text-slate-50 font-bold text-xl px-8 py-2 rounded-2xl cursor-pointer">Details</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-amber-400">Kariyappatti Siva Eggs</DialogTitle>
                      <DialogDescription>
                        Looking for farm-fresh eggs in Kariyappatti? We supply high-quality white and brown eggs directly from trusted poultry farms in and around the Thanjavur region./நீங்கள் பசுமை மற்றும் புதிய முட்டைகள் தேடுகிறீர்களா? தஞ்சாவூரைச் சேர்ந்த நம்பகமான கோழி பண்ணைகளில் இருந்து, தினமும் கையிருப்பு தரப்படுகின்றது.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default viewProducts
