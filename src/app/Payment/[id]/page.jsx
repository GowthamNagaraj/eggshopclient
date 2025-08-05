import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-white overflow-hidden'>
      <Navbar />
      <Payment />
      <Footer />
    </div>
  )
}

export default page
