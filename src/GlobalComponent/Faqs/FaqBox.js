import React from 'react'
export const FaqBox = ({Title , Detail})=>{
    return(
        <div>
              <div className='border-Secondary border-[1px] border-solid py-[30px] px-[40px] rounded-[12px] md:min-h-[450px] lg:min-h-[300px]'>
                    <h6 className='pb-[20px] border-b-[1px] border-solid border-Secondary text-white'>{Title}</h6>
                    <p className='small text-TextColor pt-[15px]'>{Detail}</p>
                </div>
        </div>
    )
}
