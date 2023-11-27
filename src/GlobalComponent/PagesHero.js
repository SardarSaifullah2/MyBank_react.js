import React from 'react'
import MainImg from './../Images/Image.png'

export const PageHero =({Heading , SpanHeading , Paragraph})=>{
    return(
        <div>
         <div className='max-w-[1280px] mt-[30px] mx-[auto] p-[20px] bg-Grey/11 rounded-[20px] '>
            <div className='bg-Secondary md:!pb-[35px] lg:!pb-[60px] p-[15px] md:p-[35px] flex flex-col-reverse md:flex-row  justify-end items-center gap-[20px] relative rounded-[20px]'>
                <div className='w-[100%] md:w-[680px] lg:w-[680px] h-fit p-[20px] md:p-[50px] z-10 relative left-[0] top-[8%] md:top-[11%] md:absolute md:left-[20px] lg:top-[13%] rounded-[12px] bg-Main text-white text-center md:text-left'>
                    <h6 className='mb-[10px]'>Welcome to Bank</h6>
                    <h2 className='mb-[10px]'>{Heading} <span className='text-Green/60'>{SpanHeading}!</span></h2>
                    <p className='small'>{Paragraph}</p>
                </div>
                <div className='w-[100%] md:w-[60%]'>
                    <img src={MainImg} className='w-[100%]'></img>
                </div>
            </div>
        </div>    
    </div>
    )
}

