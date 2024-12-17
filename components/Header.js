import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';


export default function Header() {
  return (
    <div className='py-10 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={60} alt='' className='w-[130px] sm:w-auto' />   
              {/* <h1 className='py-10 '>Hello</h1> */}
              <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started<Image src={assets.arrow} className='' width={30} /></button>
        </div>
    </div>
  )
}
