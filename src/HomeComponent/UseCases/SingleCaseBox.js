import React from 'react'
import styled from 'styled-components'
export const SingleCaseBox = ({Img, Text}) => {
  return (

        <div className='w-[45%]  h-[190px] bg-Main rounded-[20px] flex flex-col justify-center items-center gap-[20px] p-[20px]'>
          <img src={Img} className='w-[75px]'></img>
          <div className='text-[16px] md:text-[14px] lg:[16px] text-white text-center'>{Text}</div>
        </div>
        

  )
}
