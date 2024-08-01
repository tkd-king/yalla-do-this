import React from 'react';
import Container from '../atoms/Container';
import { FaEnvelope } from "react-icons/fa";
import Span from '../atoms/Span';
import { FaPhoneAlt } from "react-icons/fa";
import Heading from '../atoms/Heading';
import AnchorTag from '../atoms/Anchortag';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Paragraph from '../atoms/Paragraph'
function Footer() {

    return (
            <Container>
        <div className='mt-[50px]'>

            <hr />
                <div className='flex  gap-[13%] pt-[5%]'>

                    <div>
                        <div className='relative bottom-[20px]'>
                            <img src="/assits/images/logo1.png" alt="" className='w-[90px]' />
                        </div>
                        <div className='grid gap-[10px] '>
                            <div className='flex gap-[15px] '>
                                <FaEnvelope className='text-[20px]  items-center text-[#164b8d] hover:text-[#F97300] ease-in duration-300' />
                                <Span level='footer'>yalladothis@gmail.com</Span>
                            </div>
                            <div className='flex gap-[20px]'>
                                <FaPhoneAlt className='text-[20px]  text-[#164b8d] hover:text-[#F97300] ease-in duration-300' />
                                <Span level='footer'>yalladothis@gmail.com</Span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Heading level="4">Company</Heading>
                        <div className='grid  gap-[10px] mt-[20px]'>
                        <AnchorTag variant='footer'>Home</AnchorTag>
                            <AnchorTag variant='footer'>About us</AnchorTag>
                            <AnchorTag variant='footer'>Contact</AnchorTag>
                        </div>
                    </div>

                    <div>
                        <Heading level="4">Services</Heading>
                        <div className='grid gap-[10px] ml-[20px]  mt-[20px]'>
                        <AnchorTag variant='footer'>AC Services</AnchorTag>
                            <AnchorTag variant='footer'>Handyman and Plumber</AnchorTag>
                            <AnchorTag variant='footer'>Electrician Service</AnchorTag>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-[20px]  text-[#164b8d]  text-[25px] ml-[50px]   mt-[50px]'>
                        <FaFacebookF className=' hover:text-[#F97300] ease-in duration-300' />
                        <FaInstagramSquare className=' hover:text-[#F97300] ease-in duration-300' />   
                        <FaTwitter  className=' hover:text-[#F97300] ease-in duration-300'/>                      
                          </div>
                    </div>
                </div>
        </div >
            </Container >
    );
}

export default Footer;
