import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function Tea() {
   
  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/tea/1.webp' , name : 'چای سیاه دمی	' , price : 75000},
    {id : 2 , name : 'دمنوش	' , price : 80000 },
    {id : 3 , img : '/images/tea/2.webp' , name : 'چای بیرون بر	' , price : 80000},
    {id : 4 , name : 'چای لته	' , price : 130000 },
  ])  
    
  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
