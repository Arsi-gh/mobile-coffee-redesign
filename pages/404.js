import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Notfound() {
  return (
    <div className='text-lg w-full h-screen mt-10 pt-20 flex flex-col items-center'>
        <div className="text-[8rem] font-bold mt-12 lg:text-[12rem] lg:mt-40 text-orange-600 relative">
            <p>404</p>
            <CiSearch  className="text-[6rem] relative z-30 bg-white rounded-full -top-2 p-1 right-1/2 transform translate-x-1/2"/>
        </div>
        <p className="w-fit text-lg">صفحه مورد نظر شما یافت نشد</p>
        <Link href="/" className="mt-6  bg-gradient-to-tr from-orange-600 to-orange-400 p-3 px-5 rounded-3xl text-white text-sm">بازگشت به صفحه اصلی</Link>
    </div>
  )
}
