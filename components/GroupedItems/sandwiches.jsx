import React, { useState } from 'react'
import ItemsCon from '../itemsCon'
import { toPersianNumbersWithComma } from '@/utilities/toPersianNumbers'

export default function Sandwiches() {

  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/sandwiches/1.webp' , name : 'نان چاودار' , isArray : false , desc : '(گوجه + ریحان + پنیر)' , price : 105000 },
    {id : 2 , img : '/images/sandwiches/2.webp' , name : 'نان سیمیت' , isArray : false , desc : '(گوجه + ریحان + پنیر)' , price : 105000 },
    {id : 3 , img : '/images/sandwiches/3.webp' , name : 'نان سبوس' , isArray : true , desc : [
        {id : 1 , name : '(خرما + گردو + پنیر)' , price : 120000},
        {id : 2 , name : '(حلواارده + گردو + کره)' , price : 120000},
        {id : 3 , name : '(کره بادام زمینی + گردو + عسل)' , price : 120000},
        {id : 4 , name : '(تخم مرغ + گوجه + ریحان)' , price : 105000},
        {id : 5 , name : '(کره + عسل + گردو)' , price : 120000},
    ]},
    {id : 4 , img : '/images/sandwiches/4.webp' , name : 'نان چاباتا / نان هفت غله' , isArray : true , desc : [
        {id : 1 , name : '(گوجه + ریحان + پنیر)' , price : 110000},
        {id : 2 , name : '(خرما + گردو + پنیر)' , price : 125000},
        {id : 3 , name : '(حلواارده + گردو + کره)' , price : 125000},
    ]},
    {id : 5 , img : '/images/sandwiches/4.webp' , name : 'نان پیتا' , isArray : true , desc : [
        {id : 1 , name : '(تخم مرغ + گوجه + ریحان)' , price : 115000},
        {id : 2 , name : '(تخم مرغ + پنیر + زیتون)' , price : 115000},
        {id : 3 , name : '(تخم مرغ + پنیر + خرما)' , price : 115000},
    ]},
    {id : 6 , img : '/images/sandwiches/8.webp' , name : 'ساندویچ بیکن (باگت فرانسوی / چاباتا / پیتا)' , isArray : true , desc : [
        {id : 1 , name : '(بیکن + تخم مرغ + پنیر گودا)', price : 170000},
        {id : 2 , name : '(بیکن + پنیر گودا)' , price : 160000},
    ]},
])  

  return (
    <ItemsCon>
        {datas.map((data) => <Sandwich key={data.id} {...data}/>)}
    </ItemsCon>
  )
}

const Sandwich = ({name , img ,isArray , desc , price}) => {
    return (
        <div className='flex w-full items-center gap-x-4 p-2 md:w-fit md:p-3 md:border-2 border-orange-400 rounded-3xl max-sm:text-sm' >
            {img && <img className='size-28 object-cover rounded-2xl max-sm:size-20' src={img}/>}
            <b className='w-52 max-sm:w-20'>{name}</b>
            {isArray ? (
                <div className='border-r-2 border-orange-400 flex flex-col gap-2 w-full'>
                    {
                        desc.map((item) => {
                            return (
                                <div key={item.id} className='flex justify-between gap-x-12 pr-4'>
                                    <p className='flex-1'>{item.name}</p>
                                    <p className='text-orange-500 text-xl font-bold'>{toPersianNumbersWithComma(item.price)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            ) : (
                <>
                <p className='flex-1'>{desc}</p>
                <p className='text-orange-500 text-xl font-bold'>{toPersianNumbersWithComma(price)}</p>
                </>
            )}
        </div>
    )
}
