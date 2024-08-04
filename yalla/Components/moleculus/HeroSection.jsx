import React from "react";

const HeroSection = ({ children1, src }) => {
  return (
    <div className=" flex items-center justify-center w-full gap-8 my-[100px]">
      <div className="left flex items-center justify-left w-[40%]">
        <p className="text-[16px] text-[#61657e] font-[400] w-[100%]">{children1}</p>
      </div>
      <div className="right w-[60%] h-[600px] overflow-hidden">
        <img  src={src} alt="image" />
      </div>
    </div>
  );
};

export default HeroSection;
