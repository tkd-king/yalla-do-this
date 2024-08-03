import Banner from '@/Components/organisms/Banner'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Section from '@/Components/moleculus/Section'

function home() {
  return (
    <div>
        <Headermain/>
        <Banner/>
        <Section/>
        {/* <Footer/> */}
    </div>
  )
}

export default home