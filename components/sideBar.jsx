import Link from 'next/link';
import React from 'react'
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { HiOutlineXMark } from "react-icons/hi2";
import { IoLocationSharp } from 'react-icons/io5';

export default function SideBar({isOpen , displayHandler}) {
  return (
    <> 
      {isOpen && <div onClick={() => displayHandler(false)} className='md:hidden w-screen h-screen z-50 bg-black fixed top-0 left-0  opacity-30 transition-all'></div>}
      <div className={`md:hidden overflow-hidden fixed text-neutral-700 right-0 top-0 h-screen w-64 bg-zinc-50 z-50 transition-all duration-300 -mr-64  ${isOpen && ' mr-0'}`}>
        <h4 className='py-5 px-2 shadow-sm shadow-orange-400 flex gap-x-2 items-center text-2xl max-md:flex-1 font-bold text-orange-500'>
        <HiOutlineXMark onClick={() => displayHandler(false)} className='text-neutral-600 size-8 cursor-pointer'/>قهـوه همــراه</h4>
        <Link onClick={() => displayHandler(false)} className="m-2 p-3 flex gap-x-4 gap-2 items-center"  href="/">  <BiSolidFoodMenu className="text-xl" />منو</Link>
        <Link onClick={() => displayHandler(false)} className="m-2 p-3 flex gap-x-4 gap-2 items-center"  href="/about"> <FaInfoCircle className="text-xl" />درباره ما</Link>
        <Link onClick={() => displayHandler(false)} className="m-2 p-3 flex gap-x-4 gap-2 items-center"  href="/contact">   <FaPhone className="text-lg"/>تماس با ما</Link>
        <Link onClick={() => displayHandler(false)} className="m-2 p-3 flex gap-x-4 gap-2 items-center"  href="/locations">   <IoLocationSharp className="text-xl"/>آدرس</Link>
      </div>
    </>
  )
}