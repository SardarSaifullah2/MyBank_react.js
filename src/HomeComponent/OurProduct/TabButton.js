import React from 'react'
import { useState } from 'react'
export const TabButton = ({Active, SetActive}) => {

  return (
    <div>
        <div className='w-fit h-fit border-[1px] border-solid p-[10px] rounded-[30px] border-Secondary mx-auto'>
            <div onClick={()=>SetActive(!Active)} className={` flex gap-[0] h-fit relative w-fit`}>
            <div className={`${Active ? 'translate-x-[0%]' :'translate-x-[100%]'} absolute bg-Green/60 w-[50%] h-full top-0 left-0 rounded-[50px] z-[1]`}></div>
            <button style={{color: Active ? "Black" : "white" }} className='relative z-[1] py-[10px] px-[35px] bg-transparent border-none'>Individual</button>
            <button style={{color: Active ? "white" : "Black" }} className='relative z-[1] py-[10px] px-[35px] bg-transparent border-none'>Business</button>
        </div>
       </div>
    </div>
  )
}
