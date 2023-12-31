import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function ColdDrink() {
   
  const [datas , setDatas] = useState([
    { id : 1 , name : 'آیس لته ' , size : 'متوسط' , desc : '(اسپرسو ، یخ ، شیر)' , price : 110000 },
    { id : 2 , name : 'آیس موکا دبل اسپرسو' , size : 'متوسط' , desc : '' , price : 115000},
    { id : 3 , name : 'آیس شیک دبل اسپرسو' , size : 'کوچک' , desc : '' , price : 105000 },
    { id : 4 , name : 'آیس تی سوئیت نوامبر' , size : 'متوسط' , desc : '' , price : 95000},
    { id : 5 , name : 'کلد برو' , size : 'متوسط' , price : 95000},
    { id : 6 , name : 'آیس چای لته' , size : 'متوسط' , price : 220000},
    { id : 7 , name : 'اضافه کردن شات اسپرسو به نوشیدنی' ,  price : 30000},
    { id : 8 , name : 'اضافه کردن شات سیروپ طعم دهنده' ,  desc : '(وانیل، فندق، کارامل)' , price : 20000},
  ])  
    
  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
