import Banner from '@/Components/organisms/Banner'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Section from '@/Components/moleculus/Section'
import OverServices from '@/Components/moleculus/Overservices'
import Temperature from '@/Components/moleculus/Temperature'

function home() {
  return (
    <div>
        <Headermain/>
        <Banner/>
        <Section/>
        <Temperature/>
        <Footer/>
    </div>
  )
}

export default home