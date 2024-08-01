import React from 'react'
import Span from '../atoms/Span'

function Offer() {
    return (
        <div>
            <div className='flex gap-[20px] pt-[5%] h-[350px]  '>
                <div className=''>
                    <img className='h-[200px]' src="/assits/images/uaequick-ac-cleaing.jpg" alt="" />
                    <div className='bg-white text-center py-[10px]'>
                    <Span level='offers'>AC Cleaning</Span>
                    </div>
                </div>  

                 <div className=''>
                    <img className='h-[200px]' src="/assits/images/uaequick-ac-duct.jpg" alt="" />
                    <div className='bg-white text-center py-[10px] '>
                    <Span level='offers'>AC Duct Cleaning</Span>
                    </div>
                </div> 
                <div className=''>
                    <img className='h-[200px]' src="/assits/images/uaequick-ac-installations.jpg" alt="" />
                    <div className='bg-white text-center py-[10px]'>
                    <Span level='offers'>AC Installation</Span>
                    </div>
                </div> 
                <div className=''>
                    <img className='h-[200px]' src="/assits/images/uaequick-ac-maintenance.jpg" alt="" />
                    <div className='bg-white text-center py-[10px]'>
                    <Span level='offers'>AC Maintenance</Span>
                    </div>
                </div>      
                 </div>
                 
        </div>
    )
}

export default Offer