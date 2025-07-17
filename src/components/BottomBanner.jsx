import Image from 'next/image'
import React from 'react'
import Banner1 from "@/assets/herosliders/slide3.png"
import d1 from '@/assets/1.png'
import d2 from '@/assets/2.png'
import d3 from '@/assets/3.png'
import d4 from '@/assets/4.png'

const BottomBanner = () => {
  return (
    <div className='min-w-screen min-h-96 px-28 relative' data-aos="fade-right">
      <Image 
        src={Banner1}
        alt='Banner1'
        className='min-w-72 h-60 md:min-w-full md:min-h-96 rounded-2xl'
      />
    </div>
  )
}

export default BottomBanner
