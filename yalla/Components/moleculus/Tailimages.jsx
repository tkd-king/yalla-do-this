import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Tailimages() {
  return (
  <Container>
      <div className='flex flex-wrap gap-[20px]'>
      <Tailimg src="/assits/images/Tail3.webp"/>
      <Tailimg src="/assits/images/Tail4.webp"/>
      <Tailimg src="/assits/images/Tail5.webp"/>
      <Tailimg src="/assits/images/Tail6.webp"/>
      <Tailimg src="/assits/images/Tail7.webp"/>
      <Tailimg src="/assits/images/Tail8.webp"/>
    </div>
  </Container>
  )
}

export default Tailimages
