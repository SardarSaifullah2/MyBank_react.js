import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import BgImg from '../Images/Dot_design.png'
import PhoneSvg from '../Svg/Phone.svg'
import LocationSvg from '../Svg/Adress.svg'
import EmailSvg from '../Svg/Mail.svg'

export const ContactInformation = () => {
  return (
    <div className="flex-2 bg-Grey/11 py-[60px] px-[40px] relative z-10 overflow-hidden rounded-[20px] text-TextColor before:w-[138px] before:h-[138px] before:rounded-[50%] before:bg-TextColor before:opacity-10 before:absolute before:z-[-1] before:content[''] before:bottom-[68px] before:right-[17%]  after:content-[''] after:absolute after:bottom-[-78px] after:right-[-15%] after:w-[269px] after:h-[269px] after:rounded-[50%] after:bg-TextColor after:opacity-10 ">
        <div class="flex flex-col justify-between gap-[50px] h-full afterContactInformationImg">
            <div className='flex flex-col gap-[10px] '>
                <h3 className='text-white'>Contact Information</h3>
                <p className='small' >Say Something to Start a Live Chat!</p>
            </div>
            <div className="flex flex-col gap-[30px] w-fit">
                <div className='flex flex-row  items-center gap-[10px] text-[16px]'>
                    <img src={EmailSvg} alt='phone_svg' />  
                    info@domain.com
                </div>
                <div className='flex flex-row items-center  gap-[10px] text-[16px]'>
                    <img src={PhoneSvg} alt='phone_svg' />  
                    +1012 3456 78908
                </div>
                <div className='flex flex-row items-center gap-[10px] text-[16px]'>
                    <img src={LocationSvg} alt='phone_svg' />  
                    132 Xyz Street City, Appartment 02156 Country
                </div>
            </div>
            <div className='flex gap-[20px] text-[24px]'>
                <FaFacebook/>
                <FaFacebookMessenger/>
                <AiOutlineInstagram/>
                <FaTwitter/>
            </div>
        </div>
    </div>
  )
}

