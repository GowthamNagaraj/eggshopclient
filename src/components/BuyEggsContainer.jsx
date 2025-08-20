import React, { useEffect, useState } from 'react'
import browneggs from '@/assets/varietyeggs/browneggs.png'
import whiteEggs from '@/assets/varietyeggs/whiteeggs.png'
import kadaiEggs from '@/assets/varietyeggs/kadaieggs.png'
import b1 from '@/assets/blackeggs/b1.png'
import b2 from '@/assets/blackeggs/b2.png'
import b3 from '@/assets/blackeggs/b3.png'
import b4 from '@/assets/blackeggs/b4.png'
import b5 from '@/assets/blackeggs/b5.png'
import b6 from '@/assets/blackeggs/b6.png'
import b7 from '@/assets/blackeggs/b7.png'
import br1 from '@/assets/browneggs/b1.png'
import br2 from '@/assets/browneggs/b2.png'
import br3 from '@/assets/browneggs/b3.png' 
import br4 from '@/assets/browneggs/b4.png'
import br5 from '@/assets/browneggs/b5.png'
import br6 from '@/assets/browneggs/b6.png'
import w1 from '@/assets/whiteeggs/w1.png'
import w2 from '@/assets/whiteeggs/w2.png'
import w3 from '@/assets/whiteeggs/w3.png'
import w4 from '@/assets/whiteeggs/w4.png'
import w5 from '@/assets/whiteeggs/w5.png'
import w6 from '@/assets/whiteeggs/w6.png'
import k1 from '@/assets/kadaieggs/k1.png'
import k2 from '@/assets/kadaieggs/k2.png'
import k3 from '@/assets/kadaieggs/k3.png'  
import k4 from '@/assets/kadaieggs/k4.png'
import k5 from '@/assets/kadaieggs/k5.png'
import k6 from '@/assets/kadaieggs/k6.png'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
// import { showSpinner } from '@/store/slices/Spinner'

const productsList = [
            { id: 1, productName: "Brown Eggs", prodImage: br1, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 2, productName: "Brown Eggs", prodImage: br2, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 3, productName: "Brown Eggs", prodImage: br3, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 4, productName: "Brown Eggs", prodImage: br4, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 5, productName: "Brown Eggs", prodImage: br5, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 6, productName: "Brown Eggs", prodImage: br6, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 7, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 8, productName: "White Eggs", prodImage: w1, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 9, productName: "White Eggs", prodImage: w2, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 10, productName: "White Eggs", prodImage: w3, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 11, productName: "White Eggs", prodImage: w4, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 12, productName: "White Eggs", prodImage: w5, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 13, productName: "White Eggs", prodImage: w6, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 14, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 15, productName: "Kadai Eggs", prodImage: k1, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 16, productName: "Kadai Eggs", prodImage: k2, price: "4.00", oldPrice: '7.00', quantity:0 },
            { id: 17, productName: "Kadai Eggs", prodImage: k3, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 18, productName: "Kadai Eggs", prodImage: k4, price: "5.00", oldPrice: '7.00', quantity:0 },
            { id: 19, productName: "Kadai Eggs", prodImage: k5, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 20, productName: "Kadai Eggs", prodImage: k6, price: "7.00", oldPrice: '7.00', quantity:0 },
            { id: 21, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity:0 },
            { id: 22, productName: "Black Eggs", prodImage: b1, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 23, productName: "Black Eggs", prodImage: b2, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 24, productName: "Black Eggs", prodImage: b3, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 25, productName: "Black Eggs", prodImage: b4, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 26, productName: "Black Eggs", prodImage: b5, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 27, productName: "Black Eggs", prodImage: b6, price: "150.00", oldPrice: '350.00', quantity:0 },
            { id: 28, productName: "Black Eggs", prodImage: b7, price: "150.00", oldPrice: '350.00', quantity:0 },
        ]
    
const BuyEggsContainer = () => {

    const [products, setProducts] = useState(productsList)
    const navVarietyEggsName = ["Brown Eggs","White Eggs","Kadai Eggs", "Black Eggs"]
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
        if(params === "Black Eggs"){
            const filterKadaiEggs = productsList.filter(product => product.productName === "Black Eggs");
            setProducts(filterKadaiEggs);
        }
    }

    // function handleSpinner() {
    //     const load= {
    //         isLoading: true
    //     };
    //     dispatch(showSpinner(load));
    // }
    
    return (
        <div className='min-w-full min-h-full md:px-28 px-12 mt-8 mb-20 overflow-hidden'>
            <h1 className='text-5xl text-center font-bold text-amber-300' data-aos="fade-down">Buy Eggs</h1>

            <section className='w-full h-svh mt-14 bg-slate-100 rounded-2xl overflow-y-scroll' data-aos="fade-left">
                <nav className='w-full h-16 bg-yellow-500 rounded-tl-2xl rounded-tr-2xl flex items-center justify-center mb-10'>
                    <div className="grid grid-cols-4 w-full justify-items-center text-slate-50 font-bold cursor-pointer">
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
                                <Link href={`/viewProducts/${prods.id}`}><button className='w-full py-3 rounded-bl-2xl rounded-br-2xl bg-amber-300 cursor-pointer hover:bg-lime-500'>View to Products</button></Link>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    )
}

export default BuyEggsContainer
