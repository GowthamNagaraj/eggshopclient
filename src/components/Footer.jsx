import Image from 'next/image'
import React from 'react'
import fb from '@/assets/socialIcons/fb.png'
import wh from '@/assets/socialIcons/wh.png'
import ins from '@/assets/socialIcons/ins.png'
import yt from '@/assets/socialIcons/yt.png'
import x from '@/assets/socialIcons/x.png'
import logo from '@/assets/logo.png'

const Footer = () => {

    const socialIcons = [
        { id: 1, names: 'fb', url: fb },
        { id: 2, names: 'ins', url: ins },
        { id: 3, names: 'yt', url: yt },
        { id: 4, names: 'wh', url: wh },
        { id: 5, names: 'x', url: x },
    ]
    return (
        <div className='min-w-screen min-h-96 bg-black md:mt-20 mt-0 flex items-center justify-center px-80'>
            <div className="w-full h-56">
                <div className="flex items-center justify-center gap-6">
                    {
                        socialIcons.map((sc, i) => (
                            <Image
                                key={i}
                                src={sc.url}
                                alt={sc.names}
                                className='w-10 h-10 md:w-16 md:h-16'
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <Image
                        src={logo}
                        alt='logo'
                        className="cursor-pointer md:w-96 min-w-96 h-28 rounded-xl"
                    />
                    <p className='text-gray-500 text-xs mt-5'>Copywrite &copy; {new Date().getFullYear()}, Naadi Eggs Shop.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
