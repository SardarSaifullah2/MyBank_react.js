import React from 'react'

export const ContainerInfo = ({ContainerHeading , SpanHeading , ContainerId, ContainerParagraph , className}) => {
  return (
    <div id={ContainerId}  className=' flex flex-col text-center gap-[10px] md:text-left w-full'>
        <h2>{ContainerHeading} <span className='text-Green/60'>{SpanHeading}</span></h2>
        <p className='large'>{ContainerParagraph} </p>
    </div>
  )
}

