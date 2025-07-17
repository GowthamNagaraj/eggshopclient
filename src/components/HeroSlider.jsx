"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const slide1 = require('@/assets/herosliders/slide1.png');
const slide2 = require('@/assets/herosliders/slide2.png');
const slide3 = require('@/assets/herosliders/slide3.png');
const slide4 = require('@/assets/herosliders/slide4.png');
const slide5 = require('@/assets/herosliders/slide5.png');

const HeroSlider = () => {
    const slides = [
    { id: 1, img: slide1, title: 'Slide 1' },
    { id: 2, img: slide2, title: 'Slide 2' },
    { id: 3, img: slide3, title: 'Slide 3' },
    { id: 4, img: slide4, title: 'Slide 4' },
    { id: 5, img: slide5, title: 'Slide 5' },
  ];
  return (
     <div className="w-full h-[300px] md:h-[500px] mt-12 md:mt-0 relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                className="w-full h-full"
              />
              {/* <div className="absolute inset-0 bg-black/40 flex items-end-safe justify-center text-white text-3xl font-bold">
                {slide.title}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
