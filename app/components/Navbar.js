"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='bg-[#e9f7ff] flex justify-between items-center py-5 px-14'>
            <div className='text-gray-800 font-bold text-2xl flex justify-center items-center gap-x-2'>
                <span className='w-6 h-6'>
                    <Image src={'/logo.png'} alt='logo' width={30} height={30} />
                </span>
                <span>Quick<span className='text-[#e93363]'>Linker</span></span>
            </div>
            <ul className='lg:flex gap-x-8 text-gray-600 font-semibold text-sm hidden'>
                <li className='hover:scale-105'>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li className='hover:scale-105'>
                    <Link href={'/'}>
                        Pricing
                    </Link>
                </li>
                <li className='hover:scale-105'>
                    <Link href={'/'}>
                        Solution
                    </Link>
                </li>
                <li className='hover:scale-105'>
                    <Link href={'/'}>
                        Blog
                    </Link>
                </li>
            </ul>
            <div className='hidden lg:flex gap-x-4 text-gray-600 font-semibold text-sm'>
                <button className='hover:scale-105 cursor-pointer'>Login</button>
                <button className='bg-[#e93363] hover:bg-[#d42d56] transition-all duration-200 ease-in font-medium cursor-pointer text-white py-2 px-4 rounded-full'>Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar
