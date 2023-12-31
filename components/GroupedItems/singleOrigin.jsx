import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function SingleOrigin() {

  const [datas , setDatas] = useState([
    { id : 1 , name : 'اسپرسو اسپشیالیتی' , desc : '(کنیا، اتیوپی)' , size : 'کوچک' , price : 80000},
    { id : 2 , name : 'آمریکانو ' , desc : '(کنیا، اتیوپی)' , size : 'کوچک' , price : 95000},
    { id : 3 , img : '/images/singleOrigin/1.webp' , name : 'فلت وایت' , desc : '(کنیا، اتیوپی)' , size : 'کوچک' , price : 115000},
    { id : 4 , img : '/images/singleOrigin/2.webp' , name : 'کورتادو' , desc : '(کنیا، اتیوپی)' , size : 'کوچک' , price : 115000},
    { id : 5 , name : 'اضافه کردن شات اسپرسو به نوشیدنی' , desc : '' , size : 'کوچک' , price : 30000},
    { id : 6 , name : 'اضافه کردن شات سیروپ طعم دهنده ' , desc : '(وانیل، فندق، کارامل)' , size : 'کوچک' , price : 20000},
  ])

  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
