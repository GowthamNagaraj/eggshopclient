import { createSlice } from "@reduxjs/toolkit";
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


const initialState = [
    { id: 1, productName: "Brown Eggs", prodImage: br1, price: "3.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 2, productName: "Brown Eggs", prodImage: br2, price: "4.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 3, productName: "Brown Eggs", prodImage: br3, price: "3.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 4, productName: "Brown Eggs", prodImage: br4, price: "5.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 5, productName: "Brown Eggs", prodImage: br5, price: "3.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 6, productName: "Brown Eggs", prodImage: br6, price: "7.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 7, productName: "Brown Eggs", prodImage: browneggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [br1, br2, br3, br4, br5, br6] },
    { id: 8, productName: "White Eggs", prodImage: w1, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 9, productName: "White Eggs", prodImage: w2, price: "4.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 10, productName: "White Eggs", prodImage: w3, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 11, productName: "White Eggs", prodImage: w4, price: "5.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 12, productName: "White Eggs", prodImage: w5, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 13, productName: "White Eggs", prodImage: w6, price: "7.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 14, productName: "White Eggs", prodImage: whiteEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [w1, w2, w3, w4, w5, w6] },
    { id: 15, productName: "Kadai Eggs", prodImage: k1, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 16, productName: "Kadai Eggs", prodImage: k2, price: "4.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 17, productName: "Kadai Eggs", prodImage: k3, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 18, productName: "Kadai Eggs", prodImage: k4, price: "5.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 19, productName: "Kadai Eggs", prodImage: k5, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 20, productName: "Kadai Eggs", prodImage: k6, price: "7.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 21, productName: "Kadai Eggs", prodImage: kadaiEggs, price: "3.00", oldPrice: '7.00', quantity: 0, images: [k1, k2, k3, k4, k5, k6] },
    { id: 22, productName: "Black Eggs", prodImage: b1, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 23, productName: "Black Eggs", prodImage: b2, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 24, productName: "Black Eggs", prodImage: b3, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 25, productName: "Black Eggs", prodImage: b4, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 26, productName: "Black Eggs", prodImage: b5, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 27, productName: "Black Eggs", prodImage: b6, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
    { id: 28, productName: "Black Eggs", prodImage: b7, price: "150.00", oldPrice: '350.00', quantity: 0, images: [b1, b2, b3, b4, b5, b6] },
]

const ViewProductsSLice = createSlice({
    name: "viewProducts",
    initialState,
    reducers: {},
});

export const { } = ViewProductsSLice.actions;
export default ViewProductsSLice.reducer;