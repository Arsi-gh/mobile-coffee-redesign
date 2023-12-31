import { useState } from "react";
import ItemsCon from "../itemsCon";
import ItemTwo from "../item";

export default function Juice() {

  const [datas , setDatas] = useState([
    {id : 1 , name : 'فرش مینت لیموناد' , size : 'متوسط' , price : '90000'},
    {id : 2 , name : 'فرش استرابری' , size : 'متوسط' , price : '90000'},
  ])  

  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
