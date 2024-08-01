import React from 'react'
import Span from '../atoms/Span'
import Container from '../atoms/Container'

function Clints() {
  return (
    <div>
      <div className='bg-[#164b8d]  justify-between   px-[30px] h-[200px]  '>
        <Container>
          <div className='flex w-[50%]   py-[30px]'>
            <div className=''>
              <Span level='clintbox'> 1256</Span>
              <div className=''>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>

            <div>
              <Span level='clintbox'> 1256</Span>
              <div className=''>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>

            <div>
              <Span level='clintbox'> 1256</Span> 
              <div className=''>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>
            <div>
              <Span level='clintbox'> 1256</Span>
              <div className=''>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Clints