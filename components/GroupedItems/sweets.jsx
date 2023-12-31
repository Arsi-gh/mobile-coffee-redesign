import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function Sweets() {

  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/sweets/1.webp' , name : 'توئیست شکلاتی' , desc : 'شیرینی فرانسوی' , price : 80000},
    {id : 2 ,  name : 'رول دارچین' , desc : 'شیرینی فرانسوی' , price : 80000},
    {id : 3 , img : '/images/sweets/2.webp' , name : 'رول کشمش' , desc : 'شیرینی فرانسوی' , price : 80000},
    {id : 4 , img : '/images/sweets/3.webp' , name : 'پن شکلاتی' , desc : 'شیرینی فرانسوی' , price : 80000},
    {id : 5 , img : '/images/sweets/4.webp' , name : 'کوکی' , desc : '(جو کشمش ، شکلات گردو ، دبل شکلات فندق)' , price : 70000},
    {id : 6 , img : '/images/sweets/5.webp' , name : 'کروسان مغزدار' , desc : '(بادام )' , price : 130000},
    {id : 7 , img : '/images/sweets/6.webp' , name : 'مافین مغزدار' , desc : '(شکلاتی ، خرما گردو)' , price : 70000},
  ])  

  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
