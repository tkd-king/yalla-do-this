import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Offer from '../moleculus/Offer'
import Howwork from '../moleculus/Howwork'

function Offermain() {
  return (
 <div>
     <div  className='bg-[#f3f5f9] '>
        <Container>
            <div className='text-center pt-[5%]'>
                <Heading level='2'>What We Offer</Heading>
                <Paragraph variant='offer'>We offer the best ac repair services in UAE for any type of ac problems you might be facing, we also provide best cooling solutions and service for your home and office. We are a team of experts with many years of experience in the field that will surely help you out. You can also call us if you have any other queries regarding air conditioners or air conditioner repairing services that we provide</Paragraph>
            </div>
            <Offer/>
        </Container>
    </div>
    <Howwork/>
 </div>
  )
}

export default Offermain