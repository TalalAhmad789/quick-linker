import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const timestamps = Date.now()
    const date = new Date(timestamps)
    const year = date.getFullYear()
    return (

        <footer className="bg-[#e9f7ff]">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className='text-gray-800 font-bold text-2xl flex justify-center items-center gap-x-2'>
                            <span className='w-6 h-6'>
                                <Image src={'/logo.png'} alt='logo' width={30} height={30} />
                            </span>
                            <span>Quick<span className='text-[#e93363]'>Linker</span></span>
                        </div>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href={'/'} className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href={'/'} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href={'/'} className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href={'/'} className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <Link href={'/'} className="hover:underline">Quick Linker™</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer
