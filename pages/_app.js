import Footer from '@/components/footer'
import Header from '@/components/header'
import SideBar from '@/components/sideBar'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [toggleSide , setToggleSide] = useState(false)

  return (
    <>
    <Header toggleSide={setToggleSide}/>
    <SideBar isOpen={toggleSide} displayHandler={setToggleSide}/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
