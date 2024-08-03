import Banner from '@/Components/organisms/Banner'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Section from '@/Components/moleculus/Section'
import MaintainceService from '@/Components/moleculus/MaintainceService'

function home() {
  return (
    <div>
        <Headermain/>
        <Banner/>
        <Section/>
        <MaintainceService/>
    </div>
  )
}

export default home