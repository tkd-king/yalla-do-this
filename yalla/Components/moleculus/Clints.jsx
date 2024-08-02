import React from 'react'
import Span from '../atoms/Span'
import Container from '../atoms/Container'

function Clints() {
  return (
    <div className='pt-[5%]'>
      <div className='bg-[#164b8d]  h-[250px]  '>
        <Container>
          <div className='flex justify-between pt-[50px]'>
            <div className='tracking-[3px]'>
              <Span level='clintbox'> 1256</Span>
              <div className='text-center'>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>

            <div className=' tracking-[3px] '>
              <Span level='clintbox'> 2340</Span>
              <div className='text-center'>
                <Span level='clint'>WORKED DONE</Span>
              </div>
            </div>

            <div className='tracking-[3px]'>
              <Span level='clintbox'> 1242</Span> 
              <div className='text-center'>
                <Span level='clint'>SATISFIED CLIENTS</Span>
              </div>
            </div>
            <div className='tracking-[3px]'>
              <Span level='clintbox'> 700</Span>
              <div className='text-center'>
                <Span level='clint'>BONUSES</Span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Clints