"use client"
import RollingCounts from '@/components/uis/RollingCounts';
import BreadCrums from '@/components/BreadCrums'
import Navbar from '@/components/Navbar'
import ProductViewSlider from '@/components/ProductViewSlider'
import React, { useEffect, useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/uis/dialog"
import ReviewsBox from '@/components/ReviewsBox';
import EggsVariety from '@/components/EggsVariety';
import Footer from '@/components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import { addToCart } from '@/store/slices/Cart';

const viewProducts = () => {
  const [count, setCount] = useState(20);
  const datas = useSelector((state) => state.viewProducts);
  const carts = useSelector((state) => state.cart);
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const addtocartBtn = carts.some((item) => item.id === parseInt(id)) ? "Go to Cart" : "Add to Cart";

  useEffect(()=> {
    filterData();
    // console.log("carts:", carts);
    
  },[])

  function filterData(){
    try {
      const data = datas.filter((item) => item.id === parseInt(id));
      console.log("Filtered Data: ", data);
      setProduct(data[0]);
      setImages(data[0].images);
    } catch (error) {
      console.error("Error filtering data: ", error);
    }
  }

  function handleAddtoCart(e) {
    e.preventDefault();
    const cartData = {
      id: product.id,
      productName: product.productName,
      prodImage: product.images[0],
      price: product.price,
      oldPrice: product.oldPrice,
      quantity: count
    }
    console.log("Cart Data: ", cartData);
    dispatch(addToCart(cartData))
    alert("Item Added to Cart");
  }
  return (
    <div className='overflow-hidden bg-white mt-10 md:mt-0'>
      <Navbar />
      <div className='min-w-full min-h-full md:px-28 px-12 mt-10 mb-20 overflow-x-hidden bg-white'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
          <div data-aos="fade-up" className='max-w-md md:max-w-xl lg:max-w-3xl md:col-span-2 lg:col-span-1 max-h-[500px]'><ProductViewSlider images={images}/></div>

          <div className="bg-slate-100 max-w-5xl max-h-[600px] col-span-2 rounded-xl shadow-md p-5">
            <div>
              <BreadCrums data-aos="fade-left" productName={product.productName}/>
              <h1 className='text-3xl lg:text-xl font-bold text-amber-500' data-aos="fade-left">Kariyappatti Siva Eggs ({product.productName})</h1>
              <p className='text-sm lg:text-xs mb-5 text-slate-500' data-aos="fade-down">Looking for farm-fresh eggs in Kariyappatti? We supply high-quality white and brown eggs directly from trusted poultry farms in and around the Thanjavur region./நீங்கள் பசுமை மற்றும் புதிய முட்டைகள் தேடுகிறீர்களா? தஞ்சாவூரைச் சேர்ந்த நம்பகமான கோழி பண்ணைகளில் இருந்து, தினமும் கையிருப்பு தரப்படுகின்றது.</p>
              <div className="flex items-center" data-aos="fade-right">
                <h2 className='font-bold text-amber-800'>Price:</h2>
                <div className='flex items-center gap-4 text-gray-400 w-56 p-2' data-aos="fade-right">
                  <p className='text-sm font-semibold line-through'>{product.oldPrice}</p>
                  <p className='text-sm font-bold text-gray-500'>₹ {product.price}</p>
                </div>
              </div>
              <div className='flex items-center gap-x-7 mb-5' data-aos="fade-left">
                <h2 className='font-bold text-amber-800'>Quantity:</h2>
                <div className='flex items-center justify-between p-2 bg-gray-200 w-28 rounded-bl-2xl rounded-tr-2xl'>
                  <button className='cursor-pointer' onClick={() => setCount((prev) => prev > 20 ? prev - 1 : 20)}><FaMinusCircle className='text-red-600 text-xl hover:text-red-700 active:text-red-800' /></button>
                  <p className='text-xl font-bold text-amber-500 text-center'><RollingCounts number={count} /></p>
                  <button className='cursor-pointer' onClick={() => setCount((prev) => prev + 1)}><FaPlusCircle className='text-lime-600 hover:text-lime-700 active:text-lime-800 text-xl' /></button>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center gap-6' data-aos="fade-left">
                <button className='bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-slate-50 font-bold text-xl px-8 py-2 rounded-2xl cursor-pointer' onClick={(e) => handleAddtoCart(e)}>{addtocartBtn}</button>
                <Dialog>
                  <DialogTrigger className="bg-amber-600 hover:bg-amber-700 text-slate-50 font-bold text-xl px-8 py-2 rounded-2xl cursor-pointer">Details</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-amber-400">Kariyappatti Siva Eggs</DialogTitle>
                      <DialogDescription>
                        Looking for farm-fresh eggs in Kariyappatti? We supply high-quality white and brown eggs directly from trusted poultry farms in and around the Thanjavur region./நீங்கள் பசுமை மற்றும் புதிய முட்டைகள் தேடுகிறீர்களா? தஞ்சாவூரைச் சேர்ந்த நம்பகமான கோழி பண்ணைகளில் இருந்து, தினமும் கையிருப்பு தரப்படுகின்றது.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ReviewsBox />
      <EggsVariety />
      <Footer />
    </div>
  )
}

export default viewProducts
