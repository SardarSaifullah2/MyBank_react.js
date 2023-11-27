import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../Images/Logo.png'
import EmailImg from '../../Svg/email.svg'
import Facebook from '../../Svg/Facebook.svg'
import Twitter from '../../Svg/Twitter.svg'
import Linkedin from '../../Svg/Linkedin.svg'
import { MainMenu } from '../Menus'
import { Link } from 'react-router-dom'
import { Dialog } from '@mui/material'
import { useState } from 'react'
import { Privacy } from '../Privacy'
import { Terms } from '../Terms'
import  phoneImg  from '../../Svg/footerPhone.svg'
import   AddressImg  from '../../Svg/Adress.svg'
import '../../index.css'
export const Footer = ()=>{
    const [Open , setOpen] = useState(false)
    const [TermsOpen , setTermsOpen] = useState(false)
    const ContactDetail = [
        {
            Text:'info@domain.com',
            img:EmailImg
        },
        {
            Text:'+992 0000 0000',
            img:phoneImg
        },
        {
            Text:'Somewhere in the Worldin',
            img:AddressImg
        },
    ]
    return(
        <div className='bg-Grey/11'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-[60px] px-[20px] flex flex-col gap-[40px] items-center'>
                    <div className='text-center flex flex-col items-center gap-[20px]'>
                        <img src={LogoImg} alt="logo_img" className='w-[155px]'></img>
                        <div className='flex gap-[40px] list-none text-[20px] md:text-[18px] text-white p-0 '>
                      
                    {
                        MainMenu?.map((item , index)=>{
                            return(
                                <li key={index} className=''>
                                <Link to={item.Link} className='text-white no-underline text-[12px]	md-text-[16px]'>{item.Name}</Link>
                                </li>
                            )
                        })
                    }
                        </div>
                    </div>
                    {/* Contact Detail  */}
                    <div className='flex justify-center py-[40px] gap-[20px] md:gap-[50px] border-y-[1px] border-Secondary border-solid width-full flex-wrap'>
                        {/* <div className='flex items-center gap-3 text-white text-[12px] md:text-[16px] '><img src={EmailImg} alt='email'/> info@domain.com</div>
                        <div className='flex items-center gap-3 text-white text-[12px] md:text-[16px] '><img src={EmailImg} alt='email'/> info@domain.com</div>
                        <div className='flex items-center gap-3 text-white text-[12px] md:text-[16px] '><img src={EmailImg} alt='email'/> info@domain.com</div> */}
                      {
                        ContactDetail.map(item=>{
                            return(
                                <div className='flex items-center gap-3 text-white text-[12px] md:text-[16px]'>
                                    <img src={item.img}></img> {item.Text}
                                </div>
                            )
                        })
                      }
                    </div>
                    <div className='bg-Main w-full py-[15px] px-[20px] rounded-[50px] flex flex-col md:flex-row justify-between items-center gap-[20px]'>
                        <div className='flex gap-[8px] items-center'>
                            <img src={Facebook} className='w-40px'/>
                            <img src={Twitter}/>
                            <img src={Linkedin}/>
                        </div>
                        <p className='small'>YourBank All Rights Reserved</p>
                        <div className='flex gap-[8px] items-center'>
                            <p className='text-TextColor tracking-[1px] px-[20px] border-r-[1px] border-solid border-Privacy' onClick={() => setOpen(true)}>Privacy Policy</p>
                            <Dialog open={Open} onClose={()=> setOpen(false)} className='dialog'>
                                <Privacy setOpen={setOpen}/>
                            </Dialog>
                            <Dialog open={TermsOpen} onClose={()=> setTermsOpen(false)}>
                                <Terms/>
                            </Dialog>
                                <p className="small  px-[10px]" onClick={()=>setTermsOpen(true)}>Terms of Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Main = styled.div`
    background:#1c1c1c;
`
const Max_Width = styled.div`
    max-width:1200px;
    margin:0 auto;
`
const Content = styled.div`
    padding:60px 20px;
    display:flex;
    flex-direction:column;
    gap:40px;
    align-items:center;

`
const FooterLink = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    
`
const Logo = styled.img`
    width:155px;
`
const Menu = styled.ul`
    display:flex;
    gap:40px;
    list-style:none;
    font-size:20px;
    color:white;
    padding:0;
    @media(max-width:786px){
        font-size:14px;
        gap:20px;
    }
`
const List = styled.li`
    a{
        color:#ffff;
        text-decoration:none;
    }
`
const ContactDetail = styled.div`
    display:flex;
    justify-content:center;
    padding:40px 0;
    gap:50px;
    border-top:1px solid #262626;
    border-bottom:1px solid #262626;
    width:100%;
    flex-wrap:wrap;
    @media(max-width:786px){
        gap:20px;
    }
`
const Email = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    color:white;
    img{

    }
    @media(max-width:786px){
        font-size:8px;
        img{
            width:15px;
        }
    }
`
const UnderFooter = styled.div`
    background:#1a1a1a;
    width:100%;
    padding:15px 20px;
    border-radius:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width:786px){
        flex-direction:column;
        gap:20px;
    }
` 
const Social_Icons = styled.div`
    display:flex;
    gap:8px;
    align-items:center;
    img{
        width:40px;
    }
`
const Text = styled.div`
    font-size:14px;
    color:#b3b3b3;
    word-spacing:1px;
`
const PrivacyText = styled.div`
    font-size:14px;
    color:#b3b3b3;
    word-spacing:1px;
    padding:0 20px;
    border-right:1px solid #a3a3a3;
`
const TermText = styled.div`
    font-size:14px;
    color:#b3b3b3;
    word-spacing:1px;
    padding:0 10px;
`