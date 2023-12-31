import { FaPhone, FaShop } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default function Agents () {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="border-4 max-w-[33rem] border-orange-400 rounded-3xl relative mx-auto w-fit p-6 text-lg sm:pr-12 max-sm:m-4 pt-8">
                <FaShop className="absolute sm:-right-8 sm:top-1/2 transform sm:-translate-y-1/2 max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:-top-8 bg-white z-30 text-[4rem] rounded-full border-4 border-orange-500 p-3 text-orange-500" />
                <div className="flex flex-col gap-3 max-sm:text-sm">
                    <b className="text-xl">شعبه یک</b>
                    <p className="flex gap-4  items-center"><IoLocationSharp className="text-orange-500 min-w-6 min-h-6"/>آدرس : چهارباغ بالا جنب کوچه باغ زرشک مجتمع مترو پل</p>
                    <p className="flex gap-4  items-center"><FaPhone className="text-orange-500 min-w-4 min-h-4"/>شماره تماس : ۰۳۱۳۱۳۱۱۰۰۲</p>
                </div>
                </div>
            <div className="border-4 max-w-[33rem] border-orange-400 rounded-3xl relative mx-auto w-fit p-6 text-lg sm:pr-12 max-sm:m-4 pt-8">
                <FaShop className="absolute -right-8 sm:top-1/2 transform sm:-translate-y-1/2 max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:-top-8 bg-white z-30 text-[4rem] rounded-full border-4 border-orange-500 p-3 text-orange-500" />
                <div className="flex flex-col gap-3 max-sm:text-sm">
                    <b className="text-xl">شعبه دو</b>
                    <p className="flex gap-4  items-center"><IoLocationSharp className="text-orange-500 min-w-6 min-h-6"/>آدرس : انتهای خ کارگر داخل هوانیروز سمت چپ قهوه همراه</p>
                    <p className="flex gap-4  items-center"><FaPhone className="text-orange-500 min-w-4 min-h-4"/>شماره تماس : ۰۳۱۳۶۷۰۲۰۳۱</p>
                </div>
            </div>
        </div>
    )
}
