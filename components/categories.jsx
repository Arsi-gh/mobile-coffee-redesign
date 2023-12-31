import { FiCoffee } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";
import { PiCoffee } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";
import { LuCupSoda } from "react-icons/lu";
import { BsCupStraw } from "react-icons/bs";
import { LuSandwich } from "react-icons/lu";
import { PiCookie } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";

export default function Categories({refs}) {

  return (
    <div className="w-full bg-white lg:mt-6 max-lg:my-2 py-4 lg:py-6 sticky top-16 z-40 lg:backdrop-blur-md lg:bg-opacity-70 max-lg:shadow-none">
      <div className="p-2 bg-zinc-100 flex gap-2 w-fit  mx-auto lg:rounded-lg overflow-auto max-lg:w-full max-lg:bg-white max-sm:text-sm">
        <button onClick={() => window.scrollTo({top : refs[0].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><BiCoffeeTogo className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>اسپشیالیتی</p> </button>
        <button onClick={() => window.scrollTo({top : refs[1].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><FiCoffee className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>تک خواستگاه</p> </button>
        <button onClick={() => window.scrollTo({top : refs[2].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><PiCoffee className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>چایی</p> </button>
        <button onClick={() => window.scrollTo({top : refs[3].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><BsCupHot className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>دمنوش</p> </button>
        <button onClick={() => window.scrollTo({top : refs[4].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><LuCupSoda className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>نوشیدنی سرد</p> </button>
        <button onClick={() => window.scrollTo({top : refs[5].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><BsCupStraw className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>آبمیوه</p> </button>
        <button onClick={() => window.scrollTo({top : refs[6].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><LuCakeSlice  className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>کیک</p> </button>
        <button onClick={() => window.scrollTo({top : refs[7].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><PiCookie  className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>شیرینی</p> </button>
        <button onClick={() => window.scrollTo({top : refs[8].current.offsetTop - 200})} className="flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit"><LuSandwich  className="bg-orange-400 text-white text-4xl p-[6px] rounded-md" /><p>ساندویچ</p> </button>
      </div>
    </div>
  )
}
