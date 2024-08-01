import React from 'react'
import Container from '../atoms/Container'
import Paragraph from '../atoms/Paragraph'
import Span from '../atoms/Span'

function Section() {
  return (
   <div className='pt-[5%]'>
        <div className='bg-[#EEEDEB] pt-[5%] h-[500px]'>
        <Container>
            <div className='flex'>
                <img src="/assits/images/pic8.jpg" alt="" />
                <div className='bg-white'>
                    <Span level='servics'>over services plan</Span>
                    <Paragraph>We really believe that your house needs the best attention and care possible. We handle every part of your living space with our wide selection of services, which include both necessities and extravagance. From the extreme heat to the little pleasures, our air conditioning services provide a wonderful, comfortable environment all year round. Do you need an overhaul or a fast repair? Our skilled plumbers and handymen are here to assist, ready to find and fix any issues to ensure your house is operating correctly.</Paragraph>
                </div>
            </div>
        </Container>
    </div>
   </div>
  )
}

export default Section