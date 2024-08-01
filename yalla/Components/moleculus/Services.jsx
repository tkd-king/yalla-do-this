import AnchorTag from "../atoms/Anchortag";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Span from "../atoms/Span";
import { FaArrowRight } from "react-icons/fa";



const Services = () => {
    return (
        <div className="bg-[#f8f9fa] h-[500px]">
           <Container>
            
           <div className="  flex pt-[5%]  ">
                <div className="bg-[#EEEDEB] w-[40%] py-[20px] h-[400px]  rounded-[10px]  ">
                    <div className="px-[9%] py-[6%] ">
                    <AnchorTag variant='servics1'>Services</AnchorTag>
                   <div className="grid  gap-[20px]">
                   <div className="flex items-center relative top-[20px] hover:bg-[#F97300] ease-out duration-300    justify-between bg-white px-[16px] py-[20px] rounded-[10px]">
                   <AnchorTag variant='services2' href="/acservice">Residential Services</AnchorTag>
                   <AnchorTag variant="services2"><FaArrowRight /></AnchorTag>
                   </div>

                   <div className="flex items-center relative top-[20px] hover:bg-[#F97300] ease-out duration-300  justify-between bg-white px-[16px] py-[20px] rounded-[10px]">
                   <AnchorTag variant='services2'>Residential Services</AnchorTag>
                   <AnchorTag variant="services2"><FaArrowRight /></AnchorTag>
                   </div>

                   <div className="flex items-center relative top-[20px] hover:bg-[#F97300] ease-out duration-300  justify-between bg-white px-[16px] py-[20px] rounded-[10px]">
                   <AnchorTag variant='services2'>Residential Services</AnchorTag>
                   <AnchorTag variant="services2"><FaArrowRight /></AnchorTag>
                   </div>
                   </div>
                    </div>
                    
                </div>
                <div className="w-[100%] px-[5%] pt-[30px] ">
                   <div className="">
                   <Span level='overview'>Overview</Span>
                   </div>
                    <Paragraph variant="danger">We really believe that your house needs the best attention and care possible. We handle every part of your living space with our wide selection of services, which include both necessities and extravagance. From the extreme heat to the little pleasures, our air conditioning services provide a wonderful, comfortable environment all year round. Do you need an overhaul or a fast repair? Our skilled plumbers and handymen are here to assist, ready to find and fix any issues to ensure your house is operating correctly.</Paragraph>
                </div>
            </div>
           </Container>
        </div>
    );
};

export default Services;
