import Image from 'next/image'
import React from 'react'
import notfound from "@/assets/404.png"

const NotFoundPage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-tr from-red-500 to-pink-700 flex items-center justify-center gap-6 overflow-hidden'>
      <Image 
        src={notfound}
        alt="Not Found"
        className='object-fill rounded-full w-[500px] h-[500px]'
        priority
      />
    </div>
  )
}

export default NotFoundPage
