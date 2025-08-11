"use client"
import React, { useState } from 'react'
import PayQr from "@/assets/payQR/pay.jpeg";
import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

  const [priceType, setPriceType] = useState(45000);
  const [paymentType, setPaymentType] = useState("");

  function selectPaymentType(e) {
    try{
      console.log("Payment Type: ", e.target.value);
      setPriceType(e.target.value === "cod" ? 45500 : 45020);
      setPaymentType(e.target.value === "cod" ? "COD" : "OP");
    }catch (error){
      console.error("Error selecting payment type: ", error);
    }
  }
  return (
    <div className='w-full h-auto px-12 md:px-28 bg-white mt-14 md:mt-0'>
      <div className="bg-yellow-400 p-2 w-full rounded-md">
        <div className="grid md:grid-cols-3 grid-cols-1 bg-white p-2 rounded-md gap-6">
          <div className="bg-amber-200 p-6 md:col-span-2 rounded-md flex flex-col">
            <h2 className='text-2xl font-semibold'>Select Payment Method</h2>
            <select name="" id="" onChange={(e) => selectPaymentType(e)} className='p-2 rounded-md border border-gray-300'>
              <option value="">Select options</option>
              <option value="cod">Cash on delivery</option>
              <option value="ond">Online delivery</option>
            </select>

            {
              priceType && (
                <div className="mt-4 p-2 bg-green-100 rounded-md">
                  <p className='text-lg font-semibold'>Total Price: RS {priceType}</p>
                </div>
              )
            }
            </div>
          <div className="bg-amber-200 p-6 rounded-md">
            <h2 className='text-2xl font-semibold'>Order Summary</h2>
            <p className='text-lg'>Total Price: RS {priceType}</p>
            <p className='text-lg'>Payment Type: {priceType === 45500 ? "Cash on Delivery" : "Online Payment"}</p>
            {
              paymentType === "OP" && (
                <div className="mt-4 flex items-center justify-center">
                  <Image src={PayQr} alt="Payment QR Code" className='w-52 h-52 rounded-2xl' />
                </div>
              )
            }{
              paymentType === "COD" && (
              <div className="mt-4 flex items-center justify-center gap-6">
                <Link href="/ResultsPages/success" className='text-2xl px-4 py-2 font-bold bg-lime-400 text-white rounded-md hover:bg-lime-600'>Pay</Link>
                <Link href="/" className='text-2xl px-4 py-2 font-bold bg-red-400 text-white rounded-md hover:bg-red-600'>Cancel</Link>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment

