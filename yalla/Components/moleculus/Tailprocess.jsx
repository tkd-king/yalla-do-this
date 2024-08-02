import React from 'react'
import Container from '../atoms/Container'

function Tailprocess() {
  return (
    <Container>
         <div className='flex justify-between'>
        <div className='w-[200px] flex flex-col gap-[10px] justify-center items-center text-center'>
      <img src="/assits/images/Tail9.webp" alt="" className='rounded-full w-[180px] h-[180px]'/>
      <h2 className='text-[25px] font-600'>Research</h2>
      <p>We send our team to take measures of your place and ask for your preference, needs, and budget.
      </p>
    </div>
    <div className='w-[200px] flex flex-col gap-[10px] justify-center items-center text-center'>
      <img src="/assits/images/Tail10.webp" alt="" className='rounded-full w-[180px] h-[180px]'/>
      <h2 className='text-[25px] font-600'>Design</h2>
      <p>We create and design the Hajar according to your needs, requirements, preference, and budget
      </p>
    </div>
    <div className='w-[200px] flex flex-col gap-[10px] justify-center items-center text-center'>
      <img src="/assits/images/Tail11.webp" alt="" className='rounded-full w-[180px] h-[180px]'/>
      <h2 className='text-[25px] font-600'>Development
      </h2>
      <p>
      We take pride in developing a good relationship with our clients & customers through our professional services and expert craftsmanship.


      </p>
    </div>
    <div className='w-[200px] flex flex-col gap-[10px] justify-center items-center text-center'>
      <img src="/assits/images/Tail12.webp" alt="" className='rounded-full w-[180px] h-[180px] bg-top'/>
      <h2 className='text-[25px] font-600'>Production</h2>
      <p>We manufacture the highest quality Hajar, Ceramic, and Marble Tiles to update the interior and exterior of your place.


      </p>
    </div>
     </div>
    </Container>
  )
}

export default Tailprocess
