"use client"
import React, { useEffect, useState } from 'react'
import browneggs from '@/assets/varietyeggs/browneggs.png'
import whiteEggs from '@/assets/varietyeggs/whiteeggs.png'
import kadaiEggs from '@/assets/varietyeggs/kadaieggs.png'
import Image from 'next/image'
import RollingCounts from './uis/RollingCounts'
import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt  } from "react-icons/fa";
import { current } from '@reduxjs/toolkit'
import CheckOut from './CheckOut'

const CartItem = () => {
  const GST = '18%';
  const [cartItems, setCartItems] = useState([
    { id: 1, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:50 },
    { id: 2, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:80 },
    { id: 3, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:10 },
    { id: 4, productName: "White Eggs", prodImage: whiteEggs, price: "4.00", oldPrice: '7.00', quantity:150 },
    { id: 5, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:160 },
    { id: 6, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "4.00", oldPrice: '7.00', quantity:200 },
  ])

  const [totals, setTotals] = useState(0)
  const [subtls, setSubtls] = useState(0)
  
  const discount = 173
  const [count, setCount] = useState(1);

  useEffect(()=>{
    subTotal();
  },[cartItems])

  function subTotal() {
    const amts = [];
    cartItems.map((item)=> amts.push(item.quantity * parseInt(item.price)));
    const amt = amts.reduce((prev,curr)=> prev + curr);
    const gst = (amt * 18) / 100;
    const subTotal = amt + gst;
    const totalAmt = subTotal - discount
    setSubtls(subTotal)
    setTotals(totalAmt)
  }



  return (
    <div className='w-full h-auto px-12 md:px-28 bg-white mt-14 md:mt-0'>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-2 gap-6">
        <div className="bg-yellow-500 p-2 col-span-1 md:col-span-2 rounded-md" data-aos="fade-down">
          <div className="bg-white h-[500px] overflow-y-scroll">
            {
              cartItems.map((item,i)=>(
                <div className="flex md:flex-row flex-col items-center bg-white space-y-6 relative p-6 border-b">
                  <Image 
                    src={item.prodImage}
                    alt={item.productName}
                    className='w-24 h-24 rounded-2xl'
                  />
                  <div className="flex flex-col">
                    <h1>{item.productName}</h1>
                    <p>RS: <span className='line-through'>{item.oldPrice}</span> <span>{item.price}</span></p>
                    <div className="flex items-center justify-between">
                    <h1>Quantity</h1>
                    <p>{item.quantity}</p>
                  </div>
                  </div>
                  {/* <div className='flex items-center justify-between p-2 bg-gray-200 w-32 rounded-bl-2xl rounded-tr-2xl'>
                      <button className='cursor-pointer' onClick={() => setCount((prev) => prev > 1 ? prev - 1 : 1)}><FaMinusCircle className='text-red-600 text-3xl hover:text-red-700 active:text-red-800' /></button>
                      <p className='text-3xl font-bold text-amber-500 text-center'><RollingCounts number={count} /></p>
                      <button className='cursor-pointer' onClick={() => setCount((prev) => prev + 1)}><FaPlusCircle className='text-lime-600 hover:text-lime-700 active:text-lime-800 text-3xl' /></button>
                    </div> */}
                    <FaRegTrashAlt className='text-red-600 absolute top-2 right-2 cursor-pointer'/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="bg-yellow-500 p-2 rounded-md" data-aos="fade-left">
          <div className="bg-white flex-col p-6">
            {
              cartItems.map((item,i)=>(
                <div className="flex items-center justify-between">
                  <h2>{item.productName}</h2>
                  <p>{(item.quantity * parseInt(item.price))}</p>
                </div>
              ))
            }
            <hr />
            <div className="flex items-center justify-between">
              <h2>GST:</h2>
              <p>{GST}</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <h2>Sub Total:</h2>
              <p>{subtls}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2>Discount:</h2>
              <p>{discount}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2>Total:</h2>
              <p>{totals}</p>
            </div>
            <div className="flex items-center justify-center">
              <a href="#CheckoutForm" className='w-full h-auto bg-lime-500 text-center p-2 rounded-sm text-white font-bold text-2xl'>Check your Details</a>
            </div>
          </div>
        </div>
      </div>
      <CheckOut />
    </div>
  )
}

export default CartItem
