import React from 'react'
import { ContainerInfo } from '../GlobalComponent/ContainerInfo'
export const MakingAccount = () => {

  return (
    <div className='my-[50px]'>
        <div className='max-w-7xl mx-auto p-[20px]'>
            <div className='content bg-gradient px-[20px] md:px-[60px] py-[40px] md:py-[100px] flex flex-col md:flex-row items-center gap-[50px] rounded-[20px]'>
                <ContainerInfo className="account_making_account_containerInfo" ContainerHeading='Start your financial journey' SpanHeading='with YourBank today!' ContainerParagraph='Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service'></ContainerInfo>
                <button className='w-[200px] h-fit bg-Green/60 text-black p-[15px] rounded-[50px]' >Open Account</button>
            </div>
        </div>
    </div>
  )
}

