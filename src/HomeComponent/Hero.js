import React from 'react'
import VerifiedIcon from '../Images/Icon.png'
import RightImg from '../Images/Container.png'
import RightImg2 from '../Images/Group.png'

export const Hero = () => {
 
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-[30px] bg-transparent	">
         <div className='content flex flex-col md:flex-row gap-[30px] justify-center py-[30px] px-[20px] '>
            <div className='hero_left w-[100%] flex flex-col items-center md:items-start gap-[20px] md:w-[50%] text-center md:text-left'>
                <div className='bg-Secondary w-fit py-[5px] pr-[15px] pl-[6px] rounded-[30px] flex items-center gap-[10px]  text-white'>
                  <img src={VerifiedIcon} alt="verified-Icon" className='w-[24px] h-[24px]'/>
                  <p className='font-light tracking-[1px] text-[12px] md:text-[14px] lg:text-[16px] text-white'>No LLC Required, No Credit Check.</p>
                </div>
                <h1 className='font-medium leading-[150%] text-white'>
                  Welcome to YourBank Empowering Your <span className='text-Green/60'>Financial Journey</span>
                </h1>
                <p className='small hero_paragraph'>
                  At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                </p>
                <button className='bg-Green/60 text-black font-normal w-fit py-[15px] px-[30px] rounded-[40px] mt-[20px]'>Open Account</button>
            </div>
            <div className='hero_right w-[100%] flex flex-col gap-[20px] md:w-[50%] relative'>
                <img src={RightImg} alt='img' className='w-full'></img>
                <img src={RightImg2} alt='img' className='absolute top-[0px] right-[-10px]  z-[-1] w-[50%]'></img>
            </div>
         </div>
      </div>
    </div>
  )
}
 