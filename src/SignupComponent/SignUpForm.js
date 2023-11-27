import React from 'react'
import styled from 'styled-components'
import BgImg from '../Images/Login.png'
import GoogleSvg from '../Svg/Google.svg'
import FacebookSvg from '../Svg/FacebookLogin.svg'
import AppleSvg from '../Svg/Apple.svg'

export const SignUpForm = () => {
  return (
    <div>
        <div className='max-w-7xl my-[20px] mx-auto'>
            <div className='w-[80%] mx-auto py-[80px] px-[20px] rounded-[20px] flex flex-col items-center gap-[40px] justify-center' style={{backgroundImage :`url(${BgImg})`}}>
                <div className='text-TextColor flex flex-col gap-[10px] text-center'>
                    <h1 className='text-Green/60'>Sign Up</h1>
                    <p className='text-[12px] md:text-[16px]'>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                </div>
                <div className='flex justify-center items-center w-[100%]'>
                <form class="GridClass">


                    <input type="text" placeholder="Enter Your UserName" className=' w-[100%] outline-none p-[20px] rounded-[30px] bg-Main border-[1px] border-Secondary border-solid  text-white tracking-[1px]'></input>

                    <input type="text" placeholder="Enter Your UserName" className=' w-[100%] outline-none p-[20px] rounded-[30px] bg-Main border-[1px] border-Secondary border-solid  text-white tracking-[1px]'></input>

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



const ContinueText = styled.div`
    background:transperant;
    padding:0 20px;
    width:fit-content;
    text-align:center;
    position:relative;
    font-size:14px;
    &::before{
        position:absolute;
        content:'';
        width:100%;
        height:1px;
        background:white;
        top:50%;
        left:100%;
        transform:translate(0 , -50%;)
    }
    &::after{
        position:absolute;
        content:'';
        width:100%;
        height:1px;
        background:white;
        top:50%;
        right:100%;
        transform:translate(0 , -50%;)
    }
`


const Main =styled.div``
const Max_Width =styled.div`
    max-width:1280px;
    margin:20px auto;
`
const Content =styled.div`
    width:80%;
    margin:0 auto;
    background:url(${BgImg});
    padding:100px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    gap:40px;
    align-items:center;
    justify-content:center;
    padding:80px 20px;

    @media(max-width:900px){
        width:90%;
    }
`
const ContainerInfo =styled.div`
    text-align:center;
    color:#b3b3b3;
    display:flex;
    flex-direction:column;
    gap:20px;
`
const ContainerHeading =styled.div`
    color:#caff33;
    font-size:48px;
`
const ContainerParagraph =styled.div`
    @media(max-width:786px){
        font-size:12px;
    }
`
const Form =styled.form`
    display:grid;
    grid-template-columns:300px 300px;
    gap:30px;
    margin-top:40px;
    @media(max-width:786px){
        grid-template-columns:1fr;
        width: 90%;
        margin:0 auto;
    }
`
const UserName =styled.input`
    outline:none;
    padding:20px;
    border-radius:30px;
    width:300px;
    background:#1a1a1a;
    border-radius:#262626;
    border:1px solid #262626;
    color:white;
    letter-spacing:1px;
    font-size:14px;

    @media(max-width:786px){
        width:100%;


    }
               
`
const Password =styled.input`
    outline:none;
    padding:20px;
    border-radius:30px;
    width:300px;
    background:#1a1a1a;
    border:1px solid #262626;
    color:white;
    letter-spacing:1px;
    font-size:14px;
    @media(max-width:786px){
        width:100%;
    }
`
const Forget = styled.div`
    text-align:center;
    color:white;
    font-weight:500;
    text-decoration:underline;

`

const ButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
    align-items:center;
`
const LogInBtn = styled.button`
    padding:18px 20px;
    width:400px;
    border-radius:50px;
    background:#caff33;
    border:1px solid #caff33;
    color:#1a1a1a;
    font-size:18px;
     @media(max-width:786px){
        width:90%;

    }
`
const SignUpBtn = styled.button`
    padding:18px 20px;
    width:400px;
    background:#262626;
    border:1px solid #333333;
    color:#FFFFFF;
    border-radius:50px;
    font-size:18px;
     @media(max-width:786px){
        width:90%;

    }

`
const Continue = styled.div`
    position: relative;
    color: white;
    font-size: 16px;
    width: 100%;
    display:flex;
    justify-content:center;
    background:transperant;
    overflow:hidden;

`

const SocialIcon = styled.div`
    display:flex;
    gap:10px;
    justify-content:space-between;
`
const Img = styled.img`
    width:80px;
`