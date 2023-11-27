
import React from 'react'
import Image from '../../Images/Abstract Design.png'
import Logo from '../../Images/Logo.png'
import { MainMenu } from '../../Data/Data.js'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { useState } from 'react'
import { HeaderSide } from './headerSide.js'
import { Drawer } from '@mui/material'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  const [Opened , SetOpened] = useState(false)


  
  return (
    <>

    <div className='w-full'>
      <div className='absolute top-0 z-[-1]'>
          <img src={Image} alt='img'></img>
      </div>
      <div className=" max-w-7xl  items-center text-Green/60 mx-auto mt-[50px] relative z-2 overflow-hidden"> 
          <div className="content flex flex-row justify-between items-center bg-Main px-[30px] py-[20px] rounded-[100px] border-2 border-solid border-Secondary h-full mx-[20px] ">
            <div>
            <img src={Logo} alt='logo' className='h-[25px] sm:h-[40px] '></img>
            </div>
            
            <div className='menus_link hidden lg:block'>
              <ul className='flex flex-row gap-[5px] items-center text-TextColor'>
                {MainMenu.map(item =>{
               return( 
                    <li className="">
                      <NavLink to={item.Link} className="navlink text-[16px] relative z-[1] text-white py-[15px] px-[25px]   bg-transparent hover:bg-Secondary  top-0 left-0 w-full h-full rounded-[30px] transition duration-0 hover:duration-1500">
                       {item.Name}
                      </NavLink>
                    </li>
               )
               })}
              </ul>
            </div>

            <div className='flex flex-row  items-center gap-[10px;] text-sm/[12px] font-medium'>
              <div className='mobile_menu block lg:hidden'>

              <BsFillGrid3X3GapFill onClick={()=>SetOpened(true)}></BsFillGrid3X3GapFill>
              </div>
              <div className='text-xs md:text-sm'>Sign Up</div>
              <div className='md:px-[30px] md:py-[12px] px-[15px] py-[8px] bg-Green/60 text-Main rounded-[30px] text-xs md:text-sm' >Login</div>
            </div>
          </div>
      </div> 
    </div>  
    <Drawer anchor='right' open={Opened} onClosed={()=> SetOpened(false)}>
      <HeaderSide SetOpened={SetOpened}/>
    </Drawer>
          
    </>
  )
}
