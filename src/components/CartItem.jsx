"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CheckOut from './CheckOut'
import { useSelector, useDispatch } from 'react-redux'
import { CgClose } from "react-icons/cg";
import { removeFromCart } from '@/store/slices/Cart'

const CartItem = () => {
  const cartItems = useSelector((state)=> state.cart)
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(cartItems);
  const GST = '18%';

  const [totals, setTotals] = useState(0)
  const [subtls, setSubtls] = useState(0)
  
  const discount = subtls > 500.00 ? (subtls * 10) / 100 : 0; 
  

  useEffect(()=>{
    subTotal();
  },[cartItem])

  function subTotal() {
    const amts = [];
    cartItem.map((item)=> amts.push(item.quantity * parseInt(item.price)));
    const amt = cartItem.length > 0 ? amts.reduce((prev,curr)=> prev + curr) : 0;
    const gst = (amt * 18) / 100;
    const subTotal = amt + gst;
    const totalAmt = subTotal - discount
    console.log("totalAmt: ", totalAmt);
    
    setSubtls(subTotal.toFixed(2))
    setTotals(totalAmt.toFixed(2))
  }

  function handleDelete(id) {
    try {
      setCartItem(cartItem.filter((item) => parseInt(item.id) !== parseInt(id)))
      console.log(cartItem);
      const itemToRemove = { id: id };
      dispatch(removeFromCart(itemToRemove))
    } catch (error) {
      console.log("Error removing item from cart:", error);
      
    }
  }



  return (
    <div className='w-full h-auto px-12 md:px-28 bg-white mt-14 md:mt-0 flex flex-col items-center justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-2 gap-6">
        <div className="bg-yellow-500 p-2 col-span-1 md:col-span-2 rounded-md" data-aos="fade-down">
          <div className="bg-white h-[500px] overflow-y-scroll">
            {
              cartItem.length > 0 ? cartItem.map((item,i)=>(
                <div className="flex md:flex-row flex-col items-center bg-white space-y-6 relative p-6 border-b" key={i}>
                  <Image 
                    src={item.prodImage}
                    alt={item.productName}
                    className='w-24 h-24 rounded-2xl'
                  />
                  <div className="flex flex-col space-y-1 p-2">
                    <h1>{item.productName}</h1>
                    <p>RS: <span className='line-through'>{item.oldPrice}</span> <span>{item.price}</span></p>
                    <div className="flex items-center justify-between">
                    <h1>Quantity</h1>
                    <p>{item.quantity}</p>
                  </div>
                  </div>
                  
                    <CgClose 
                      className='text-red-600 text-3xl absolute top-2 right-2 cursor-pointer hover:text-red-800'
                      onClick={() => handleDelete(item.id)}
                    />
                </div>
              )) : <div className='flex items-center justify-center h-full'>No Items in Cart</div>
            }
          </div>
        </div>
        <div className="bg-yellow-500 p-2 rounded-md" data-aos="fade-left">
          <div className="bg-white flex-col p-6">
            {
              cartItem.map((item,i)=>(
                <div className="flex items-center justify-between" key={i}>
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
              <p>{subtls > 0 ? discount.toFixed(2) : 0}</p>
            </div>
            <div className="flex items-center justify-between">
              <h2>Total:</h2>
              <p>{totals > 0 ? totals : 0}</p>
            </div>
            <div className="flex items-center justify-center">
              <a className='w-full h-auto bg-lime-500 text-center p-2 rounded-sm text-white font-bold text-2xl'>Check your Details</a>
            </div>
          </div>
        </div>
      </div>
      <CheckOut />
    </div>
  )
}

export default CartItem
