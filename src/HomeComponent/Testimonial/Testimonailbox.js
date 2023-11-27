import React from 'react'
import TestimonailImg from '../../Svg/testimonail.svg'
export const Testimonailbox = ({Review}) => {
  return (
    <>
            <div className='border-[1px] border-solid border-Secondary pb-[5px] pt-[10px] px-[15px] text-center rounded-[12px] bg-Grey/11'>
                <img src={TestimonailImg} className='relative top-[-40px]  p-[20px] rounded-[50%]'></img>
                    <p className="small mb-[45px] px-[10px]">
                      {Review}
                    </p>
            </div>
    </>
  )
}
