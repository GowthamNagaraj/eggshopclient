"use client";
import FailedPage from '@/components/FailedPage';
import SuccessPage from '@/components/SuccessPage';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const params = useParams();
    const { id } = params;
    
    useEffect(() => {
        console.log("id: ", id);

        setTimeout(() => {
            window.location.href = "/";
        },3000)
    },[])
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      {
        id === "success" ? (
            <SuccessPage />
            
        ) : (
            <FailedPage />
        )
      }
    </div>
  )
}

export default page
