import React, { useState } from 'react'
import StarPoints from './uis/StarPoints'
import Image from 'next/image'
import user1 from "@/assets/reviewsusers/user1.jpeg"
import user2 from "@/assets/reviewsusers/user2.jpg"
import user3 from "@/assets/reviewsusers/user3.jpeg"
import user4 from "@/assets/reviewsusers/user4.jpeg"
import user5 from "@/assets/reviewsusers/user5.jpeg"
import user6 from "@/assets/reviewsusers/user6.jpeg"
import product1 from "@/assets/varietyeggs/browneggs.png"
import product2 from "@/assets/varietyeggs/kadaieggs.png"
import product3 from "@/assets/varietyeggs/whiteeggs.png"
import product4 from "@/assets/varietyeggs/boiledeggs.png"

const ReviewsBox = () => {

    const [reviewsList, setReviewsList] = useState([
      {id:1, imageUrl:user1, products:product1, user: "TonyStark", comment:"Eggs also good taste and healthy"},
      {id:2, imageUrl:user2, products:product2, user: "Steve", comment:"Eggs also good taste and healthy"},
      {id:3, imageUrl:user3, products:product1, user: "Sam Joe", comment:"Eggs also good taste and healthy"},
      {id:4, imageUrl:user4, products:product1, user: "George", comment:"Eggs also good taste and healthy"},
      {id:5, imageUrl:user5, products:product3, user: "Mark", comment:"Eggs also good taste and healthy"},
      {id:6, imageUrl:user6, products:product4, user: "Stella", comment:"Eggs also good taste and healthy"},
      {id:7, imageUrl:user2, products:product2, user: "Steve", comment:"Eggs also good taste and healthy"},
      {id:8, imageUrl:user3, products:product1, user: "Sam Joe", comment:"Eggs also good taste and healthy"},
      {id:9, imageUrl:user4, products:product1, user: "George", comment:"Eggs also good taste and healthy"},
    ]);

    

  return (
    <div className="w-full bg-slate-50 md:px-28 px-12 flex flex-col items-center" data-aos="fade-right">
        <h1 className='text-5xl font-bold text-amber-400 mb-10 text-center' data-aos="fade-up">Reviews by Customers</h1>

          <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-1 items-center justify-evenly border border-slate-200 shadow-xl p-10 rounded-2xl" data-aos="fade-down">
              <div className='bg-slate-50 p-6' data-aos="fade-up">
                <form className='h-96 p-4'>
                    <div className='flex items-center justify-between gap-6 mb-6 text-slate-600' data-aos="fade-left">
                        <label htmlFor="">Points:</label>
                        <StarPoints className="border-slate-600 border"/>
                    </div>
                    <div className='flex items-center justify-between gap-6 mb-6 text-slate-600' data-aos="fade-right">
                        <label htmlFor="">Photos:</label>
                        <input type="file" name="choose file" className='border border-slate-600 px-3 w-50'/>
                    </div>
                    <div className='flex items-center justify-between gap-6 mb-6 text-slate-600' data-aos="fade-down" >
                        <label htmlFor="">Comments:</label>
                        <textarea className='w-50 h-[100px] border border-slate-600'></textarea>
                    </div>
                    <div className='flex items-center justify-center gap-6' data-aos="fade-up">
                        <button className='w-40 h-10 bg-lime-400 text-amber-800 text-xl font-bold rounded-md hover:bg-lime-600 hover:text-amber-400 active:bg-lime-700 active:text-amber-200 cursor-pointer' onClick={(e)=>e.preventDefault()}>Submit</button>
                    </div>
                </form>
              </div>
                <div className="bg-black text-white p-4 flex flex-col space-y-6 rounded h-96 overflow-y-scroll" data-aos="fade-down">
                  {
                    reviewsList.map((item,i)=>(
                      <div className='flex gap-x-5 items-center' key={i}>
                        <Image 
                          src={item.imageUrl}
                          alt={item.user}
                          className='w-15 h-15 rounded-full border-2 border-amber-400'
                        />
                        <div className="flex flex-col">
                          <h1>{item.user}</h1>
                          <p>{item.comment}</p>
                        </div>
                        <Image 
                          src={item.products}
                          alt="products"
                          className='w-10 h-10 rounded-2xl border-2 border-amber-400'
                        />
                      </div>
                    ))
                  }
                </div>
          </div>
    </div>
  )
}

export default ReviewsBox
