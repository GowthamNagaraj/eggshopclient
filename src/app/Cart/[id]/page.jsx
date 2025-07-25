"use client"
import CartItem from '@/components/CartItem'
import Navbar from '@/components/Navbar'
import { useParams } from 'next/navigation'
import React from 'react'

const Cart = () => {
  const {id} = useParams();
  
  return (
    <div className='bg-white w-full'>
        <Navbar />
        <CartItem/>
    </div>
  )
}

export default Cart
