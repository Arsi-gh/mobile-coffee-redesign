import { useState } from "react"
import ItemsCon from "../itemsCon"
import ItemTwo from "../item"

export default function HerbalTea() {

  const [datas , setDatas] = useState([
    {id : 1 , name : 'وسوسه گیاه' , desc : 'تکه های سیب ، تکه های آلوورا ، تمشک ، کشمش سیاه ، برگ لیمو' , price : 80000 },
    {id : 2 , name : 'نسیم زنجبیل' , desc : 'ریشه زنجبیل ، برگ لیمو ، ریشه شیرین بیان ، پوست پرتقال ، نعنا فلفلی' , price : 80000 },
    {id : 3 , name : 'چای سبز عطری' , desc : 'چای سبز ، برگ آفتابگردان ، برگ ذرت ، برگ گل رز' , price : 80000 },
    {id : 4 , name : 'درخشش میوه سرخ' , desc : 'انواع تمشک ، گل بامیه ، انگور' , price : 80000 },
    {id : 5 , name : 'چای سیاه صبحانه انگلیسی' , desc : '' , price : 80000 },
    {id : 6 , name : 'چای سیاه دارچین' , desc : '' , price : 80000 },
    {id : 7 , name : 'بابونه' , desc : '' , price : 80000 },
    {id : 8 , name : 'چای سبز ساده' , desc : '' , price : 80000 },
    {id : 9 , name : 'چای سبز یاس' , desc : '' , price : 80000 },
    {id : 10 , name : 'چای الونگ هلو' , desc : '' , price : 80000 },
    {id : 12 , name : 'چای سبز رزسیتی' , desc : '' , price : 80000 },
    {id : 13 , name : 'دمنوش نعنا فلفلی' , desc : '' , price : 80000 },
  ])
    
  return (
    <ItemsCon>
        {datas.map((data) => <ItemTwo key={data.id} {...data}/>)}
    </ItemsCon>
  )
}
