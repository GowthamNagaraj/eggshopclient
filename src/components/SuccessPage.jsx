import React from 'react'

const SuccessPage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-tr from-lime-500 to-green-700 flex items-center justify-center gap-6 overflow-hidden'>
        <h1 className='text-6xl font-bold text-gray-100'>Yay!!!</h1>
        <h1 className='text-4xl font-bold text-white'>Your Order is Successful</h1>
        <h1 className='text-2xl font-semibold text-white'>Thank you for shopping with us</h1>
        <div className='w-64 h-64 bg-white rounded-full flex items-center justify-center'>
            <h1 className='text-6xl font-bold text-green-600'>🥚</h1>
        </div>
    </div>
  )
}

export default SuccessPage
