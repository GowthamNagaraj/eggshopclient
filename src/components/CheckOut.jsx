"use client"
import Link from 'next/link'
import React from 'react'

const CheckOut = () => {
    const details = {
        name: "Gowtham",
        phoneno: 777888990,
        address: 'qwwwqwqwqwqwqwqwqwqw,qwqwqwqwqwqwqw,wqwqwq,wwwwwqqqq,000000',
        city: 'Avaniyapuram',
        pincode: 625012
    }
    return (
        <div className='bg-white m-14'>
            <h2 className='font-bold text-xl md:text-4xl text-yellow-400 mb-14 text-center' data-aos="fade-right">Delivery Address</h2>
            <div className="bg-yellow-400 w-fit m-auto p-6 rounded-md" data-aos="fade-left">
                <div className="flex items-center gap-6 justify-center md:flex-row flex-col">
                    <div className="flex flex-col bg-white p-6 md:w-96 rounded-md w-52 wrap-anywhere text-xs md:text-sm">
                        <p>{details.name},</p>
                        <p>{details.phoneno},</p>
                        <p>{details.address},</p>
                        <p>{details.city},</p>
                        <p>{details.pincode}.</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <button className='w-28 h-10 text-white cursor-pointer font-bold hover:bg-amber-600 bg-amber-700 rounded-md'>Change</button>
                        <Link href={'/Payment/1'} className='w-28 h-10 text-white flex items-center justify-center cursor-pointer font-bold hover:bg-lime-600 bg-lime-700 rounded-md'>Continue</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
