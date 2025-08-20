"use client";
import React, { useEffect, useState } from 'react'
import cartIcon from "../assets/cartIcon.png";
import logo from "@/assets/logo.png";
import Image from 'next/image';
import mobilemenu from "@/assets/PrimeAlignJustify.png"
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { showSpinner } from '@/store/slices/Spinner'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const dispatch = useDispatch()
  // console.log("Cart Items navbar:", cartItems);

  function handleSpinner() {
    const load = {
      isLoading: true
    };
    dispatch(showSpinner(load));
  }
  
  return (
    <div className="min-w-screen bg-slate-50 px-24 py-2 shadow-2xl">
      {/* mobille responsive */}
      <div className="absolute top-4 right-4 z-50 flex items-center justify-between gap-4 bg-white">
        <Image
          src={mobilemenu}
          alt="Mobile Menu Icon"
          className="cursor-pointer w-10 h-10 md:hidden"
          onClick={() => toggleMobileMenu()}
        />
      </div>
      <div className="flex flex-col items-center transition-none duration-300 ease-in-out justify-center p-4" hidden={!mobileMenu}>
        <Link href={'/'}><Image
            src={logo}
            alt="Cart Icon"
            className="cursor-pointer w-56 h-20"
          />
          </Link>
        <div className="flex items-center gap-x-10 ml-4 mt-4 relative">
          <Link href={'/Cart/1'}><Image
            src={cartIcon}
            alt="Cart Icon"
            className="cursor-pointer w-7 h-7"
          />
          <span className='bg-red-600 w-5 h-5 text-center p-0.5 rounded-full text-xs font-bold text-white absolute -top-1 ml-1'>{cartItems.length}</span>
          </Link>
          <button className='px-4 py-1 md:px-6 md:py-2 bg-amber-300'>Login</button>
        </div>
      </div>
      {/* desktop responsive */}
      <div className="md:flex hidden items-center justify-between w-full">
        <nav className='md:flex hidden items-center justify-between w-full'>
          <Link href={'/'}><Image
            src={logo}
            alt="Cart Icon"
            className="cursor-pointer w-56 h-20"
          />
          </Link>
          <div className="flex items-center justify-between gap-x-10">
            <Link href={'/Cart/1'} className='relative'><Image
            src={cartIcon}
            alt="Cart Icon"
            className="cursor-pointer w-7 h-7"
            onClick={handleSpinner}
          />
          <span className='bg-red-600 w-5 h-5 text-center p-0.5 rounded-full text-xs font-bold text-white absolute -top-2 right-0'>{cartItems.length}</span>
          </Link>

            <Link href={'/Forms'} className='px-4 py-1 md:px-6 md:py-2 bg-amber-300'>Login</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
