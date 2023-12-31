import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function Cakes() {
   
  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/cakes/1.webp' , name : 'تارت کروسان توت فرنگی	' , price : 120000},
    {id : 2 , img : '/images/cakes/2.webp' , name : 'تارت شکلات و فندوق و کارامل' , price : 105000 },
    {id : 3 ,  name : 'چیزکیک شکلات نوتلا' , price : 105000},
    {id : 4 , img : '/images/cakes/4.webp' , name : 'چیزکیک کاراملی' , price : 105000},
    {id : 5 , img : '/images/cakes/5.webp' , name : 'چیزکیک میوه های جنگلی' , price : 115000},
    {id : 6 , img : '/images/cakes/6.webp' , name : 'چیزکیک شکلات تلخ ایرکا' , price : 140000},
    {id : 7 , img : '/images/cakes/7.webp' , name : 'کیک هویج' , price : 105000},
    {id : 8 , img : '/images/cakes/8.webp' , name : 'کیک عسل' , price : 130000},
    {id : 9 , img : '/images/cakes/9.webp' , name : 'کیک وانیل' , price : 110000 },
    {id : 10 , img : '/images/cakes/10.webp' , name : 'کیک موکا کارامل' , price : 110000},
    {id : 11 , img : '/images/cakes/11.webp' , name : 'کیک کارامل چوک' , price : 110000},
    {id : 12 , name : 'فینانسیه بادامی' , price : 25000},
    {id : 13 , img : '/images/cakes/12.webp' , name : 'پاریس برست' , price : 130000 },
    {id : 14 , img : '/images/cakes/13.webp' , name : 'کیک فرزیه' , price : 120000},
    {id : 15 , img : '/images/cakes/14.webp' , name : 'کیک دوشس' , price : 110000},
    {id : 16 , name : 'براونی تمشک' , price : 85000 },
    {id : 18 , name : 'کروسان نوتلا و توت فرنگی' , price : 130000},
    {id : 19 , name : 'مینی کوکی' , price : 40000},
    {id : 20 , name : 'کیک ماربلد پرالین' , price : 110000},
    {id : 21 , name : 'کیک گتوبسک' , price : 105000},
    {id : 22 , name : 'کیک اتلت' , price : 70000},
    {id : 23 , name : 'کیک پرتقال' , price : 70000},
    {id : 24 , name : 'اکلر نوتلا' , price : 110000},
    {id : 25 , name : 'دسر ایزاک' , price : 103000 },
    {id : 26 , name : 'مینی کروسان نوتلا و توت فرنگی' , price : 70000},
    {id : 27 , name : 'تارت پسته و توت فرنگی' , price : 110000},
  ])  
    
  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
