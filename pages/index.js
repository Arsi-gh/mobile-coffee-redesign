import Tea from "@/components/GroupedItems/tea";
import SingleOrigin from "@/components/GroupedItems/singleOrigin";
import SpecialityCoffee from "@/components/GroupedItems/specialityCoffee";
import Categories from "@/components/categories";
import Title from "@/components/title";
import HerbalTea from "@/components/GroupedItems/herbalTea";
import ColdDrink from "@/components/GroupedItems/coldDrink";
import Juice from "@/components/GroupedItems/juice";
import Cakes from "@/components/GroupedItems/cakes";
import Sweets from "@/components/GroupedItems/sweets";
import Sandwiches from "@/components/GroupedItems/sandwiches";
import { useRef, useState } from "react";

export default function Home() {
  
  const specialityRef = useRef()
  const singleOriginRef = useRef()
  const teaRef = useRef()
  const herbalRef = useRef()
  const coldDrinkRef = useRef()
  const juiceRef = useRef()
  const cakeRef = useRef()
  const sweetRef = useRef()
  const sandwichRef = useRef()
  
  const arrayRefs = [specialityRef ,singleOriginRef, teaRef, herbalRef, coldDrinkRef, juiceRef, cakeRef, sweetRef, sandwichRef] 
    
  return (
    <>
      <Categories refs={arrayRefs}/>
      <main className="mt-24">
      <Title ref={specialityRef} id="specialTea" text="اسپشیالیتی"/>
      <SpecialityCoffee/>
      <Title ref={singleOriginRef} id="singleOrigin" text="تک خواستگاه"/>
      <SingleOrigin/>
      <Title ref={teaRef} id="tea" text="چایی"/>
      <Tea/>
      <Title ref={herbalRef} id="herbal" text="دمنوش"/>
      <HerbalTea/>
      <Title ref={coldDrinkRef} id="cold" text="نوشیدنی سرد"/>
      <ColdDrink/>
      <Title ref={juiceRef} id="juice" text="آبمیوه"/>
      <Juice/>
      <Title ref={cakeRef} id="cake" text="کیک"/>
      <Cakes/>
      <Title ref={sweetRef} id="" text="شیرینی"/>
      <Sweets/>
      <Title ref={sandwichRef} id="" text="ساندویچ"/>
      <Sandwiches/>
      </main>
    </>
  )
}
