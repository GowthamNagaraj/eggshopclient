import React from 'react'

const FailedPage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-tr from-red-500 to-amber-700 flex items-center justify-center gap-6 overflow-hidden'>
        <h1 className='text-6xl font-bold text-gray-100'>Oooops!!!</h1>
        <h1 className='text-4xl font-bold text-white'>Your Payment Not Working?</h1>
        <h1 className='text-2xl font-semibold text-white'>Try again!!!!</h1>
        <div className='w-64 h-64 bg-white rounded-full flex items-center justify-center'>
            <h1 className='text-6xl font-bold text-green-600'>🥚</h1>
        </div>
    </div>
  )
}

export default FailedPage
