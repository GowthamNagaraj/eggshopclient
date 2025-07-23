"use client";
import React, { useEffect, useState } from 'react'
import cartIcon from "../assets/cartIcon.png";
import logo from "@/assets/logo.png";
import Image from 'next/image';
import mobilemenu from "@/assets/PrimeAlignJustify.png"
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hiddenNavbar, setHiddenNavbar] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div className="min-w-screen bg-slate-50 px-24 py-2 shadow-2xl">
      {/* mobille responsive */}
      <div className="absolute top-4 right-4 z-50 flex items-center justify-between gap-x-4 ">
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
        <div className="flex items-center gap-x-10 ml-4 mt-4">
          <Link href={'/Cart/1'}><Image
            src={cartIcon}
            alt="Cart Icon"
            className="cursor-pointer w-7 h-7"
          />
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
            <Link href={'/Cart/1'}><Image
            src={cartIcon}
            alt="Cart Icon"
            className="cursor-pointer w-7 h-7"
          />
          </Link>

            <button className='px-6 py-2 bg-amber-300'>Login</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
