import React from 'react'

const CheckOut = () => {
  return (
    <div className='w-full h-auto bg-yellow-400'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
        <div className="bg-red-500 p-6">
            <form className='bg-white w-full p-6'>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex items-center justify-around'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className='border-2'/>
                </div>
                <div className='flex flex-col items-center gap-2 mt-6'>
                    <button className='rounded-sm bg-lime-500 p-2 w-full'>Submit</button>
                    <button className='rounded-sm bg-red-500 p-2 w-full'>Cancel</button>
                </div>
            </form>
        </div>
        <div className="bg-red-500 p-6"></div>
      </div>
    </div>
  )
}

export default CheckOut
