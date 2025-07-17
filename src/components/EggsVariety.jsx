import React from 'react'
import varietyegg1 from '@/assets/varietyeggs/browneggs.png'
import varietyegg2 from '@/assets/varietyeggs/whiteeggs.png'
import varietyegg3 from '@/assets/varietyeggs/kadaieggs.png'
import varietyegg4 from '@/assets/varietyeggs/boiledeggs.png'
import Image from 'next/image'

const EggsVariety = () => {
  return (
    <div className='min-w-full min-h-screen bg-white px-24 mt-14'>
      <h1 className='text-5xl text-center font-bold text-amber-300'>Variety of eggs</h1>

      <section className='w-full min-h-60 mt-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
            <div className="w-52 h-48 transform: rotate-12 bg-gray-50 rounded-2xl mb-20 border-2 border-amber-200 shadow-2xl shadow-yellow-100 p-4">
                <Image 
                    src={varietyegg1}
                    alt='varietyeggs'
                    
                    className='object-cover'
                />
            </div>
            <div className="w-52 h-48 transform: rotate-12 bg-gray-50 rounded-2xl mb-20 border-2 border-amber-200 shadow-2xl shadow-yellow-100 p-4">
                <Image 
                    src={varietyegg2}
                    alt='varietyeggs'
                    
                    className='object-cover'
                />
            </div>
            <div className="w-52 h-48 transform: rotate-12 bg-gray-50 rounded-2xl mb-20 border-2 border-amber-200 shadow-2xl shadow-yellow-100 p-4">
                <Image 
                    src={varietyegg3}
                    alt='varietyeggs'
                    
                    className='object-cover'
                />
            </div>
            <div className="w-52 h-48 transform: rotate-12 bg-gray-50 rounded-2xl mb-20 border-2 border-amber-200 shadow-2xl shadow-yellow-100 p-4">
                <Image 
                    src={varietyegg4}
                    alt='varietyeggs'
                    
                    className='object-cover'
                />
            </div>
        </div>
      </section>
    </div>
  )
}

export default EggsVariety
