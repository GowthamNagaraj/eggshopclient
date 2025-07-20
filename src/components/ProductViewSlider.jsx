"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '@/assets/varietyeggs/browneggs.png'
import image2 from '@/assets/varietyeggs/whiteeggs.png'
import image3 from '@/assets/varietyeggs/kadaieggs.png'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [image1, image2, image3];

const ProductViewSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative bg-yellow-600 text-white p-1 rounded-xl max-w-2xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="rounded-lg"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[320px] xl:h-[400px] 2xl:h-[400px] rounded overflow-hidden">
              <Image 
                src={item}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress Circle */}
        <div className="autoplay-progress absolute right-5 bottom-5 w-12 h-12 z-10">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="blue"
              strokeWidth="4"
              fill="none"
              style={{
                strokeDasharray: '125.6',
                strokeDashoffset: `calc(125.6 * var(--progress, 1))`,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center'
              }}
              ref={progressCircle}
            />
          </svg>
          <span
            className="absolute top-1/2 left-1/2 text-xs transform -translate-x-1/2 -translate-y-1/2"
            ref={progressContent}
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductViewSlider;
