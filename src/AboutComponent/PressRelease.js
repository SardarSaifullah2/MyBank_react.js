import React from 'react'
import styled from 'styled-components'
import Image from '../Images/Image.png'
import { ContainerInfo } from '../GlobalComponent/ContainerInfo'
import { PressReleaseData } from '../Data/Data'
export const PressRelease = () => {
    
   
  return (
    <div>
        <div className='max-w-7xl mx-auto'>
            <div className='my-[60px] bg-Main flex flex-col gap-[40] px-[20px]'>
            <ContainerInfo ContainerId='press_release' SpanHeading='Press Releases' ContainerParagraph="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."  />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[2%] mb-[100px] md:mb-0'>
                
                {PressReleaseData.map((item , index)=>{
                    return(
                        <div className='bg-Grey/11 border-[1px] border-solid border-Secondary p-7 !pb-14 rounded-[12px] w-full flex flex-col text-TextColor h-[900px]'>
                            <img src={item.Img} alt='hello'></img>
                            <h6 className='text-white !text-[18px] py-[20px]'>{item.Title}</h6>
                            <div className='flex gap-[20px] mt-[20px] mb-[30px] '>
                                <p className='text-[12px] md:text-[16px] text-TextColor !py-[10px] md:!py-[8px] !px-[16px] rounded-[50px] border-[1px] boder-solid border-Secondary '>{item.Location}</p>
                                <p className='text-[12px] md:text-[16px] text-TextColor !py-[10px] md:!py-[8px] !px-[16px] rounded-[50px] border-[1px] boder-solid border-Secondary'>{item.Date}</p>
                            </div>
                            <p className='large'>{item.Detail}</p>
                        </div>
                    )
                })}
            </div>

            </div>
        </div>
    </div>
  )
}


