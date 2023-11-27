import React from 'react'
import LogoImg from '../../Images/Logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import {MdGridGoldenratio} from 'react-icons/md'
import { MainMenu } from '../Menus';
export const HeaderSide = ({SetOpened}) => {
  return (

    <>
    
    <div className='fixed bg-Grey/11 w-[400px] h-[100vh] top-0 right-0 text-white border-l-2 border-Secondary overflow-y-auto scrollbar-hide block  z-9999 ' >
    <div className='content flex flex-col gap-[20px] !p-[40px]'>   
      <div className='exit_menu absolute top-[30px] right-[30px] '>
        <MdGridGoldenratio className='rotate-45'onClick={()=>SetOpened(false)}/>
      </div>
      <div className='h-[50px]'>
        <img src={LogoImg} alt='logo_img'/>
      </div> 
      <div className=''>
          <h1 className='border-bottom-1 border-Secondary leading-normal text-[20px] font-semibold'>Who we Are</h1>
          <p className='leading-loose text-[14px] font-normal pb-[10px] border-b-2 border-TextColor'>lorem isump Iusrem lorem heas has darte watte. bitte</p>
      </div>
    
      <div className='pb-[20px]' border-b-1 border-Secondary>
        <h3 className='text-[24px] m-0 pb-[20px] border-b-1 border-TextColor'>Menu Links</h3>
        <ul className='flex flex-col gap-[30px] p-0 cursor-pointer'>
          {
            MainMenu?.map((item , index)=>{
              return(
                <li key={item.index} className='text-[18px] text-white' onClick={()=>SetOpened(false)}>
                 <Link to={item.Link}> {item.Name} </Link>    
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className='flex gap-[30px] mt-[20px] text-[20px]'>
          <FaFacebook/>
          <FaFacebookMessenger/>
          <AiOutlineInstagram/>
          <FaTwitter/>
      </div>
    </div>
</div>
    </>
   
  )
}

