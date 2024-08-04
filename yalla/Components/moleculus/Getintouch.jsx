import React from 'react'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'
import { IoCall } from "react-icons/io5";
import AnchorTag from '../atoms/Anchortag';
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

function Getintouch() {
    return (
       <div className='pt-[5%]'>
         <div className='bg-[#f3f5f9] h-[450px] pt-[3%] '>
            <Container>
                    <div className='text-center'>
                        <Heading level='2'>Get In Touch</Heading>
                        
                    </div>
                   <div className='flex justify-between pt-[5%] '>
                   <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center w-[30%] h-[200px] text-[#164b8d]'>
                        <IoCall className='items-center text-[40px]' />
                        <AnchorTag variant='danger'>0508786126</AnchorTag>
                    </div>

                    <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center w-[30%] h-[200px] text-[#164b8d]'>
                        <IoMdMail  className='items-center text-[40px]' />
                        <AnchorTag variant='danger'>waqaswqspk@gmail.com</AnchorTag>
                    </div>

                    <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center w-[30%] h-[200px] text-[#164b8d]'>
                        <IoLocation className='items-center text-[40px]' />
                        <AnchorTag variant='danger'>Al Qouz, Dubai</AnchorTag>
                    </div>
                   </div>
                    
                    <div>

                    </div>
                
            </Container>
        </div>
       </div>
    )
}

export default Getintouch