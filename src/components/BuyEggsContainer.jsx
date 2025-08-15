import React, { useEffect, useState } from 'react'
import browneggs from '@/assets/varietyeggs/browneggs.png'
import whiteEggs from '@/assets/varietyeggs/whiteeggs.png'
import kadaiEggs from '@/assets/varietyeggs/kadaieggs.png'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { showSpinner } from '@/store/slices/Spinner'

const productsList = [
            { id: 1, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 2, productName: "Brown Eggs", prodImage: browneggs, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 3, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 4, productName: "Brown Eggs", prodImage: browneggs, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 5, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 6, productName: "Brown Eggs", prodImage: browneggs, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 7, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 8, productName: "Brown Eggs", prodImage: browneggs, price: "2.00", oldPrice: '7.00', quantity:0 },
            { id: 9, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 10, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 11, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 12, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 13, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 14, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 15, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 13, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 17, productName: "White Eggs", prodImage: whiteEggs, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 18, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 19, productName: "White Eggs", prodImage: whiteEggs, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 20, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 21, productName: "White Eggs", prodImage: whiteEggs, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 22, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 23, productName: "White Eggs", prodImage: whiteEggs, price: "2.00", oldPrice: '7.00', quantity:0 },
            { id: 24, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 25, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 26, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 27, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 28, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 29, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 30, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 31, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 32, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 33, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 34, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 35, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 36, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 37, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 38, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "2.00", oldPrice: '7.00', quantity:0 },
            { id: 39, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 40, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 41, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 42, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 43, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 44, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
            { id: 45, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity:0 },
        ]
    
const BuyEggsContainer = () => {

    const [products, setProducts] = useState(productsList)
    const navVarietyEggsName = ["Brown Eggs","White Eggs","Kadai Eggs"]
    const dispatch = useDispatch()

    function handleChange(params,e) {
        e.preventDefault();
        console.log("Eggs Variety: ", params);
        if(params === "Brown Eggs"){
            const filterBrownEggs = productsList.filter(product => product.productName === "Brown Eggs");
            setProducts(filterBrownEggs);
        }
        if(params === "White Eggs"){
            const filterWhiteEggs = productsList.filter(product => product.productName === "White Eggs");
            setProducts(filterWhiteEggs);
        }
        if(params === "Kadai Eggs"){
            const filterKadaiEggs = productsList.filter(product => product.productName === "Kadai Eggs");
            setProducts(filterKadaiEggs);
        }
    }

    function handleSpinner() {
        const load= {
            isLoading: true
        };
        dispatch(showSpinner(load));
    }
    
    return (
        <div className='min-w-full min-h-full md:px-28 px-12 mt-8 mb-20 overflow-hidden'>
            <h1 className='text-5xl text-center font-bold text-amber-300' data-aos="fade-down">Buy Eggs</h1>

            <section className='w-full h-svh mt-14 bg-slate-100 rounded-2xl overflow-y-scroll' data-aos="fade-left">
                <nav className='w-full h-16 bg-yellow-500 rounded-tl-2xl rounded-tr-2xl flex items-center justify-center mb-10'>
                    <div className="grid grid-cols-3 w-full justify-items-center text-slate-50 font-bold cursor-pointer">
                        {
                            navVarietyEggsName.map((variety,i) => (
                                <div key={i} className="hover:text-yellow-300 active:text-yellow-600 text-xs md:text-xl" onClick={(e)=>handleChange(`${variety}`,e)}>{variety}</div>    
                            ))
                        }
                    </div>
                </nav>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 justify-items-center gap-y-12 p-6'>
                    {
                        products.map((prods, i) => (
                            <div className="w-60 h-60 md:w-56 lg:w-40 xl:w-56 2xl:w-60 rounded-2xl bg-slate-50" key={i} >
                                <div className="flex flex-col items-center p-6">
                                    <Image
                                        src={prods.prodImage}
                                        alt={prods.productName}
                                        className='w-40 h-28'
                                    />
                                    <div className="text-center">
                                        <p className='text-xl'>{prods.productName}</p>
                                        <p className='text-xs text-gray-400'>
                                           RS: <span className='line-through'>{prods.oldPrice}</span> <span>{prods.price}</span>
                                        </p>
                                    </div>
                                </div>
                                <Link href={`/viewProducts/${prods.id}`}><button className='w-full py-3 rounded-bl-2xl rounded-br-2xl bg-amber-300 cursor-pointer hover:bg-lime-500' onClick={handleSpinner}>View to Products</button></Link>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    )
}

export default BuyEggsContainer
