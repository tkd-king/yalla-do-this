import React from "react";
import { FaPhone } from "react-icons/fa6";
import Container from "../atoms/Container";


const ReadyToGetStared = () => {
  return (
    <Container>
    <div className="flex w-full items-center justify-between" >
      <div className="w-[50%]">
        <h2 className="text-blue-900 text-[32px] font-[700] mb-[20px]">Ready to Get Started?</h2>
        <p className="text-[#61657e] text-[16px] font-[400]">
          Contact Dubai Painting Services now to get villa painting services!
          Feel free to ask any questions, tell us about your project in detail
          as we believe in mutual understanding between the both sides, get a
          free consultation and quote. Let us help you tun your villa into a
          colorful and lively home that you will enjoy.
        </p>
    <button className="px-[50px] py-[15px] cursor-pointer text-white bg-blue-900 rounded-lg mt-[30px]">
            Contact Now 
        </button>
      </div>
    </div>
    </Container>
  );
};

export default ReadyToGetStared;
