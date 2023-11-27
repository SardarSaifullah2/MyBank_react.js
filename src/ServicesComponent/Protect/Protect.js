import React from 'react'
import styled from 'styled-components'
import WindowIconSvg from '../../Svg/Window.svg'
import BackgroundImg from '../../Images/Background_Image.png'
import { ContainerInfo } from '../../GlobalComponent/ContainerInfo'
import FraudMonitoringSvg from '../../Svg/Fraud_Monitoring.svg'
import AuthenticationSvg from '../../Svg/Authentication.svg'
import MobileBankingSvg from '../../Svg/Mobile_Banking.svg'
import { ProjectData } from '../../Data/Data'
export const Protect = () => {
    console.log({BackgroundImg})
 
  return (
    <div className='pt-[50px]'>
        <div className='max-w-7xl mx-auto'>
            <div className='p-[20px] flex flex-col gap-[50px]'>
            <ContainerInfo ContainerId='protect_you' ContainerHeading="How We" SpanHeading='Protect You' ContainerParagraph="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times."  />
                <div className={`py-[50px] lg:pt-[50px] px-[20px] lg:px-[50px] grid grid-cols-1 md:grid-cols-2 gap-[20px]`} style={{ backgroundImage: "url(http://localhost:3000/static/media/Background_Image.32ac11337f3c43ccbd3b.png)" , backgroundRepeat: "no-repeat",
  backgroundSize: "contain"}}>
                    {
                        ProjectData.map(item =>{
                        return(
                            <div className='p-[20px] md:p-[40px] rounded-[20px] border-[1px] border-solid border-Secondary flex flex-col gap-[10px]' style={{backgroundImage: "linear-gradient(180deg, rgba(202, 255, 51, 0.02) -66.22%, rgba(202, 255, 51, 0) 85.46%), url('../../Images/Background Image.png')"}}>
                                <div className='flex gap-[20px] items-center text-white'>
                            <div className='w-[60px] lg:w-[90px]'>
                                <img src={WindowIconSvg} className='w-full'></img>
                            </div>
                            <h6 className='text-white font-normal sm:!text-[18px]'>{item.Heading}</h6>
                                </div>
                                <div className='text-TextColor '>
                             <p className='small'>
                                {item.Paragraph}
                            </p>
                                </div>
                            </div>
                         )
                        })
                    }                  
                </div>
            </div>
        </div>
    </div> 

  )
}












