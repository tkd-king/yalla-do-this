import React from 'react'
import Heading from '../atoms/Heading'
import { MdArrowOutward } from "react-icons/md";

export default function Banner() {
  return (
    <div className=' '>
      <div className="baner-bg">
        <div className="py-[15%]  ">
          <div className='p-[10px] bg-[#45a6af] w-[20%] '>
            <Heading level="6">WELCOME TO YALLA DO THIS</Heading>
          </div>
          <div className="">
            <Heading level="1">The temperature <br /> of cooling is in <br /> your hand.</Heading>
            <Heading level="4">Providing best-in-class air conditioning services <br /> to make your home cooler, more energy-efficient, <br /> and optimized for your comfort</Heading>
          </div>
          <div className="bg-[#f35748] hover:bg-[#45a6af] w-[13%] p-[15px] ">
            <button className='flex items-center text-white font-[600] '>Discover More  <MdArrowOutward /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
