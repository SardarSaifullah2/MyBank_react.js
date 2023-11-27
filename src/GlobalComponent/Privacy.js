import React from 'react'
import styled from 'styled-components'
import { ContainerInfo } from './ContainerInfo'
export const Privacy = ({setOpen}) => {
  return (
    <div className='bg-Grey/11'>
      <div className='p-[20px]'>
          <ContainerInfo ContainerHeading='Privacy' SpanHeading='& Policy' ContainerParagraph="Set Your Privacy Here!" ></ContainerInfo>
          <p className='text-[12px] text-TextColor leading-[150%]'>
            This Privacy Policy describes how [Your Company Name] ("we," "us," or "our") collects, uses, and discloses information that we obtain about visitors to our website and users of our services.
          </p>
          <h3 className='!text-[25px] text-white mt-[25px] mb-[10px]'>Information We Collect</h3>
          <p className='text-[12px] text-TextColor leading-[150%]'>
             We may collect personal information about you, such as your name, email address, and phone number, when you provide it to us. We may also collect non-personal information, such as your IP address, browser type, and operating system.
          </p>
          <h3 className='!text-[25px] text-white mt-[25px] mb-[10px]'>How We Use Your Information</h3>
          <p className='text-[12px] text-TextColor leading-[150%]'>
             We may collect personal information about you, such as your name, email address, and phone number, when you provide it to us. We may also collect non-personal information, such as your IP address, browser type, and operating system.
          </p>
      </div>
    </div>
  )
}
