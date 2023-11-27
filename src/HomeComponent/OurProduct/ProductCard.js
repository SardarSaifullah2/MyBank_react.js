import React from 'react'
import styled from 'styled-components'
export const ProductCard = ({Name , Svg , style}) =>{
    return(
        <div className='max-w-[400px] '>
             <div style={style} className='flex flex-col gap-[10px] px-[25px] text-center'>
                    <div className='mb-[10px]'>
                       <img src={Svg} alt='svg' className='mx-auto'/>
                    </div>
                    <h4 className='text-white'>{Name}</h4>
                    <p className='small'>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                </div>
        </div>
    )
}

const Border_left_right = {
    borderLeft:"1px solid #262626",
    borderRight:"1px solid #262626"
}