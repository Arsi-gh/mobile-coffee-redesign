import { toPersianNumbersWithComma } from '@/utilities/toPersianNumbers'
import { useEffect, useState } from 'react'

export default function Item({name , desc , options , img , size , price}) {

    const [priceIndex , setPriceIndex] = useState(1)

    const [itemPrice , setItemPrice] = useState(price ? price : options[0].price)

    useEffect(() => {
        if (options){
            setItemPrice(options[priceIndex - 1].price) 
        }
    } , [priceIndex])

    return (
        <div className='flex w-full justify-between items-center gap-x-4 p-2 md:w-[30rem] md:p-3 md:border-2 border-orange-400 rounded-3xl max-sm:text-sm' >
            {img && <img className='size-28 object-cover rounded-2xl max-sm:size-20' src={img}/>}
            <div className={`${!size && !options ? 'w-fit' : 'w-44'}`}>
                <b className='flex-1'>{name}</b>
                {desc && <p className='mt-2'>{desc}</p>}
            </div>
            {options && (
                <select onChange={(e) => setPriceIndex(e.target.value)} className='border-2 border-orange-400 rounded-xl p-2'>
                    {options.map((opt) => <option key={opt.id} value={opt.id}>{opt.size}</option>)}
                </select>
            )}
            {size && <p className='w-14'>{size}</p>}
            <p className='text-orange-500 text-xl font-bold'>{toPersianNumbersWithComma(itemPrice)}</p>
        </div>
    )
}