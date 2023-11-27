import React from 'react'
import styled from 'styled-components'
import BgImg from '../Images/Login.png'
import GoogleSvg from '../Svg/Google.svg'
import FacebookSvg from '../Svg/FacebookLogin.svg'
import AppleSvg from '../Svg/Apple.svg'

export const LoginForm = () => {
  return (
    <div>
        <div className='max-w-7xl my-[20px] mx-auto'>
            <div className='w-[80%] mx-auto py-[80px] px-[20px] rounded-[20px] flex flex-col items-center gap-[40px] justify-center' style={{backgroundImage :`url(${BgImg})`}}>
                <div  className='text-TextColor flex flex-col gap-[10px] text-center'>
                    <h1 className='text-Green/60'>Login</h1>
                    <p className='text-[12px] md:text-[16px]'>Welcome Back ! Please Login to your account.</p>
                </div>
                <div className='flex justify-center items-center w-[100%]'>
                <form class="GridClass">
                    <input type="text" placeholder="Enter Your UserName" className=' w-[100%] outline-none p-[20px] rounded-[30px] bg-Main border-[1px] border-Secondary border-solid  text-white tracking-[1px]'></input>
                    <input type="password" placeholder="Enter Your Password" className=' w-[100%] outline-none p-[20px] rounded-[30px] bg-Main border-[1px] border-Secondary border-solid  text-white tracking-[1px]'></input>
                </form>
                </div>
                <p className="text-[14px] text-normal text-center text-white">Forget Password?</p>
                <div className='w-full flex flex-col gap-[20px] items-center'>
                    <button className=' w-[90%] md:w-[400px] py-[18px] px-[20px] rounded-[50px] bg-Green/60 text-Main text-[18px]'> Login </button>
                    <button className="w-[90%] md:w-[400px] py-[18px] px-[20px] rounded-[50px] bg-Secondary border-[#333333] text-white"> Sign Up </button>
                </div>
                <div class="relative text-[16px] text-white w-full flex justify-center overflow-hidden  bg-trasnperant">
                    <p className="bg-transperant px-[20px] text-center w-fit relative text-[14px] before:absolute before:content-[''] before:w-full before:h-[1px] before:bg-white before:top-[50%] before:left-[100%]  before:translate-y-[-50%] after:absolute aftere:content-[''] after:w-full after:h-[1px] after:bg-white after:top-[50%] after:right-[100%]  after:translate-y-[-50%]">Or Continue With</p>
                </div>
                <div className='flex gap-[15px] justify-between'>
                    <img src={GoogleSvg} alt="google" className='w-[70px]'/>
                    <img src={FacebookSvg} alt="google" className='w-[70px]'/>
                    <img src={AppleSvg} alt="google" className='w-[70px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}
