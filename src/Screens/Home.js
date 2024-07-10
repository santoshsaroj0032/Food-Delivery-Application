import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousal from '../Components/Carousal'
export default function Home() {
  return (
    <div>
      <div><Navbar /> </div>
      <div><Carousal/></div>
       <div><Card/></div>
      <div><Footer /> </div>
    </div>
  )
}
