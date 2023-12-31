import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";

export default function Header({toggleSide}) {
  return (
    <div className="w-full shadow-sm shadow-orange-400 bg-zinc-50 fixed top-0 z-50">
    <header className='max-w-[1400px] mx-auto flex justify-between p-2 gap-4 items-center  text-neutral-600'>
        <HiBars3BottomRight onClick={() => toggleSide(true)} className="cursor-pointer text-3xl hidden max-md:block"/>
        <h2 className='text-2xl max-md:flex-1 font-bold text-orange-500'>قـهوه همــراه</h2>
        <ul className="flex gap-x-12 mr-12 flex-1 max-md:hidden">
          <li><Link className="flex gap-2 items-center hover:scale-110 hover:text-orange-500 transition-all"  href="/"><BiSolidFoodMenu className="text-xl" />منو</Link></li>
          <li><Link className="flex gap-2 items-center hover:scale-110 hover:text-orange-500 transition-all"  href="/about"><FaInfoCircle className="text-xl" />درباره ما</Link></li>
          <li><Link className="flex gap-2 items-center hover:scale-110 hover:text-orange-500 transition-all"  href="/contact"><FaPhone className="text-lg"/>تماس با ما</Link></li>
          <li><Link className="flex gap-2 items-center hover:scale-110 hover:text-orange-500 transition-all"  href="/locations"><IoLocationSharp className="text-xl"/>آدرس</Link></li>
        </ul>
        <img className='size-14 object-cover' src="/images/logo.webp" alt="" />
    </header>
    </div>
  )
}
