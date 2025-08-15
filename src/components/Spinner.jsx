import React from 'react'

const Spinner = ({hidden}) => {
  return (
    <div hidden={hidden} className='flex justify-center items-center min-h-screen bg-black/50 fixed top-0 left-0 down-0 w-full z-50'>
        <div className="animate-spin rounded-full md:h-32 md:w-32 h-20 w-20 border-b-4 border-amber-300"></div>
    </div>
  )
}

export default Spinner
