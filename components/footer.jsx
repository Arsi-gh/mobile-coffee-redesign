import Link from "next/link";
import { LuSendHorizonal } from "react-icons/lu";


export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-t from-zinc-200 to-zinc-50 text-neutral-700 mt-16">
      <footer className="max-w-[1400px] mx-auto p-8 flex justify-between max-md:flex-col max-md:gap-y-6">
        <InfoPart/>
        <Links/>
        <NewsRegister/>
      </footer>
    </div>
  );
}

const InfoPart = () => {
    return (
        <div className="w-96 max-md:w-full max-sm:text-sm">
          <h4 className="text-lg font-bold">قهوه همراه</h4>
          <p className="text-justify mt-2">
            موبایل کافی با نام فارسی قهوه همراه از سال 2013 با مدیریت آقای مجید
            ساطعی با هدف ارائه بهترین نوع قهوه اسپشیالیتی در کمترین زمان ممکن با
            دستگاه های پیشرفته دنیا و به صورت بیرون بر ( Take Away)
            شروع بکار کرد.
          </p>
        </div>
    )
}

const NewsRegister = () => {
    return (
        <div className="w-72 max-sm:w-full">
          <h4 className="text-lg font-bold">عضویت در خبرنامه</h4>
          <div className="relative mt-4">
            <input className="rounded-lg bg-white w-full mt-2 p-3 transition-all focus:shadow-lg focus:shadow-orange-200" type="email" placeholder="ایمیل"/>
            <button className="p-2 bg-orange-500 text-white rounded-lg absolute left-1 top-3"><LuSendHorizonal className="text-2xl shadow-xl rotate-180"/></button>
          </div>
        </div>
    )
}

const Links = () => {
    return (
        <ul className="flex flex-col gap-y-1">
        <h3 className="text-lg font-bold">لینک ها </h3>
          <li><Link href="/">منو</Link></li>
          <li><Link href="/about">درباره ما</Link></li>
          <li><Link href="/contact">تماس با ما</Link></li>
          <li><Link href="/locations">آدرس</Link></li>
        </ul>
    )
}