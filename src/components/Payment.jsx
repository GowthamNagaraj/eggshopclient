"use client"
import React, { useEffect, useState } from 'react'
import AccordtionPaymentType from './uis/AccordtionPaymentType'

const items = [
  {
    value: 'item-1',
    question: 'What is Radix UI?',
    answer: 'Radix UI is a low-level UI component library for building accessible components.'
  },
  {
    value: 'item-2',
    question: 'Can I customize it?',
    answer: 'Yes! You can apply any styles you like using Tailwind or CSS modules.'
  }
]

const Payment = () => {
  const [price, setPrice] = useState(45000)
  const [codChecked, setCodChecked] = useState(false)
  const [ondChecked, setOndChecked] = useState(false)

  useEffect(() => {
    // console.log(codChecked);

  }, [codChecked,ondChecked])

  return (
    <div className='w-full h-auto px-12 md:px-28 bg-white mt-14 md:mt-0'>
      <div className="bg-yellow-400 p-2 w-full rounded-md">
        <div className="grid md:grid-cols-3 grid-cols-1 bg-white p-2 rounded-md gap-6">
          <div className="bg-amber-200 p-6 md:col-span-2 rounded-md flex flex-col">
            <h2 className='text-2xl font-semibold'>Select Payment Method</h2>
            <div className={`p-2 flex items-center justify-between ${codChecked !== true ? "bg-white" : "bg-lime-400 text-white"}`}>
              <div className='flex gap-6 items-center'><span>RS:{price}</span> | <span>Cash on Delivery</span> </div>
              <input type="checkbox" onChange={(e) => {
                setCodChecked(e.target.checked)
                }} />
            </div>
            <div className={`p-2 flex flex-col ${ondChecked !== true ? "bg-white" : "bg-lime-400 text-white"}`}>
              <div className="flex items-center justify-between">
                <div className='flex gap-6 items-center'><span>RS:{price}</span> | <span>Cash on Delivery</span> </div>
                <input type="checkbox" onChange={(e) => {
                  setOndChecked(e.target.checked)
                  // setCodChecked(!e.target.checked)
                  }} />
              </div>
              <AccordtionPaymentType items={items}/>
            </div>
            
          </div>
          <div className="bg-amber-200 p-6 rounded-md">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
