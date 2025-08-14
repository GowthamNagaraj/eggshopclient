import { createSlice } from "@reduxjs/toolkit";
import browneggs from '@/assets/varietyeggs/browneggs.png'
import whiteEggs from '@/assets/varietyeggs/whiteeggs.png'
import kadaiEggs from '@/assets/varietyeggs/kadaieggs.png'
import b1 from '@/assets/browneggs/b1.png'
import b2 from '@/assets/browneggs/b2.png'
import b3 from '@/assets/browneggs/b3.png'
import b4 from '@/assets/browneggs/b4.png'
import b5 from '@/assets/browneggs/b5.png'
import b6 from '@/assets/browneggs/b6.png'
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


const initialState = [
    { id: 1, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 2, productName: "Brown Eggs", prodImage: browneggs, price: "4.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 3, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 4, productName: "Brown Eggs", prodImage: browneggs, price: "5.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 5, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 6, productName: "Brown Eggs", prodImage: browneggs, price: "7.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 7, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 8, productName: "Brown Eggs", prodImage: browneggs, price: "2.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 9, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 10, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 11, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 12, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 13, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 14, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 15, productName: "Brown Eggs", prodImage: browneggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 16, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 17, productName: "White Eggs", prodImage: whiteEggs, price: "4.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 18, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 19, productName: "White Eggs", prodImage: whiteEggs, price: "5.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 20, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 21, productName: "White Eggs", prodImage: whiteEggs, price: "7.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 22, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 23, productName: "White Eggs", prodImage: whiteEggs, price: "2.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 24, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 25, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 26, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 27, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 28, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 29, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 30, productName: "White Eggs", prodImage: whiteEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 31, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 32, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "4.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 33, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 34, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "5.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 35, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 36, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "7.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 37, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 38, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "2.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 39, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 40, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 41, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 42, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 43, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 44, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 45, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "13.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
]

const ViewProductsSLice = createSlice({
    name: "viewProducts",
    initialState,
    reducers: {},
});

export const {} = ViewProductsSLice.actions;
export default ViewProductsSLice.reducer;