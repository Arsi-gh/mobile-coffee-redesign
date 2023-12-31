import Agents from "@/components/Agents";
import { FiSend } from "react-icons/fi";


export default function Contact() {
  return (
    <main className="mt-[5rem] m-6 flex flex-col items-center gap-6">
        <ContactForm/>
        <Agents/>
    </main>
  )
}


const ContactForm = () => {
    return (
        <form className="max-w-[30rem] max-sm:w-full max-sm:text-sm rounded-3xl p-4">
            <h4 className="p-3 bg-gradient-to-bl from-orange-500 to-orange-400 text-white rounded-xl shadow-md">      
همواره نظرات و پیشنهادات ارزنده شما ، باعث پیشرفت و خدمات رسانی بهتر ما بوده است. از این رو مشتاقانه منتظر ارسال ایده ها، پیشنهادات شما عزیزان هستیم
            </h4>
            <TextField value="نام :" id="name" type="text"/>    
            <TextField value="شماره تماس : " id="number" type="number"/>    
            <TextField value="ایمیل : " id="email" type="email"/> 
            <div className="w-full my-4">
                <label htmlFor="text">پیام شما : </label>
                <textarea id="text" className="rounded-lg bg-zinc-100 w-full mt-2 p-2 h-40 transition-all focus:shadow-lg focus:shadow-orange-200"></textarea>
            </div>   
            <button className="p-3 font-bold shadow-lg rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 w-full text-white flex gap-2 items-center justify-center">ارسال<FiSend className="text-xl" /></button>
        </form>
    )
}

const TextField = ({value , type , id}) => {
    return (
        <div className="w-full my-4">
            <label htmlFor={id}>{value}</label>
            <input className="rounded-lg bg-zinc-100 w-full mt-2 p-2 transition-all focus:shadow-lg focus:shadow-orange-200" type={type} id={id}/>
        </div>
    )
}