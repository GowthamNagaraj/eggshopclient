"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const BreadCrums = ({productName}) => {
  const pathName = usePathname()
  const pathSegments = pathName.split("/").filter(Boolean)
  
  return (
    <nav className="text-xs text-gray-400 mb-4">
      <ol className="list-reset flex">
        <li>
          <Link href="/" className="text-blue-400 hover:underline">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const fullPath = '/' + pathSegments.slice(0, index + 1).join('/');
          const label = decodeURIComponent(segment);

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={fullPath} className="text-blue-400 hover:underline capitalize">
                {productName}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  )
}

export default BreadCrums
