import React from 'react'
import styled from 'styled-components'
export const SingleCaseBoxText = ({Heading , Paragraph , PercentDetail}) => {
  return (
    <div className=' text-center md:text-left flex flex-col gap-[20px] justify-center items-center md:items-start'>
    <h2 className='text-[38px] md:!text-[28px] lg:text[38]'>{Heading}</h2>
    <p className='text-[16px] md:text-[14px] lg:text-[16px] text-TextColor'>{Paragraph}</p>
    <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[40px] mt-[50px] md:mt-[15px] lg:mt-[50px] lg:w-[80%]'>
        {
            PercentDetail?.map(item =>{
                return(
                <div className='flex flex-col gap-[10px] '>
                    <h2 className='text-Green/60 !text-[38px] md:!text-[28px] lg:!text-[38px] break-words'>{item.Percent}</h2>
                    <p className='large text-TextColor text-[14px] md:!text-[12px] lg:!text-[16px]'>{item.PercentText}</p>
                </div>
                )
            })
        }

    </div>
    <button className='w-fit px-[30px] py-[15px] bg-transparent border-[1px] border-solid border-TextColor text-TextColor mt-[60px] md:mt-[15px] mt-[60px] rounded-[40px]'>Learn More</button>
</div>
  )
}
