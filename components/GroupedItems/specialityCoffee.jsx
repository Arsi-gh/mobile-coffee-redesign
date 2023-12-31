import React, { useState } from 'react'
import ItemsCon from '../itemsCon'
import ItemTwo from '../item'

export default function SpecialityCoffee() {

  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/speciality/1.webp' , name : 'اسپرسو 100% عربیکا' , desc: '' , size : 'کوچک' , price : 65000},
    {id : 2 ,  name : 'اسپرسو 70/30' , desc: '' , size : 'کوچک' , price : 65000},
    {id : 3 , img : '/images/speciality/2.webp' , name : 'آمریکانو' , desc: '' , size : 'متوسط' , price : 80000},
    {id : 4 , img : '/images/speciality/3.webp' , name : 'قهوه دمی موبایل کافی' , desc : '( قهوه + شیر + شکر )' , options : [
        {id : 1 , size : 'کوچک' , price : 95000},
        {id : 2 , size : 'متوسط' , price : 105000},
        {id : 3 , size : 'بزرگ' , price : 115000},
    ]
    },
    {id : 5 , img : '/images/speciality/4.webp' , name : 'لته' , desc: '' , options : [
        {id : 1 , size : 'کوچک' , price : 95000},
        {id : 2 , size : 'متوسط' , price : 105000},
        {id : 3 , size : 'بزرگ' , price : 115000},
    ]},
    {id : 6 , img : '/images/speciality/5.webp' , name : 'کاپوچینو' , desc: '' , options : [
        {id : 1 , size : 'کوچک' , price : 95000},
        {id : 2 , size : 'متوسط' , price : 105000},
        {id : 3 , size : 'بزرگ' , price : 115000},
    ]},
    {id : 7 , img : '/images/speciality/6.webp' , name : 'ماکیاتو' , desc: '' , size : 'کوچک' , price : 95000},
    {id : 8 , img : '/images/speciality/7.webp' , name : 'کارامل ماکیاتو' , desc: '' , size: 'کوچک' , price : 105000},
    {id : 9 , img : '/images/speciality/8.webp' , name : 'موکا' , desc: '' , size : 'متوسط' , price : 115000},
    {id : 10 , img : '/images/speciality/9.webp' , name : 'هات چاکلت' , desc: '' , size: 'کوچک' , price : 90000},
  ])  

  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}