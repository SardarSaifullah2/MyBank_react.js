import React from 'react'
import styled from 'styled-components'
import { Card } from './OurFeatureCard'
import { ContainerInfo } from '../../GlobalComponent/ContainerInfo'
import { useState } from 'react'
export const OurFeatureTab = () =>{
    const [ToggleValue , setToggleValue] = useState(1)
    return(
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col gap-[40px] p-[20px]'>
                    <ContainerInfo ContainerId='our_feature' ContainerHeading='Our' SpanHeading='Featuress' ContainerParagraph='Experience a host of poweful features at YourBank, including seamles online banking, secure transactions, and personalized fiancial insights, all designed to enhance your banking experience'/>
                    <div className='flex flex-col md:flex-row gap-[30px] md:gap-[10px] lg:gap-[30px] w-[100%]'>
                        <div className='bg-Grey/11 rounded-[12px] h-fit overflow-scroll md:overflow-visible scrollbar-hide px-[20px]'> {/*scrollbar Hide css is on index.css*/}
                            <div className='w-fit md:w-[200px] lg:w-[200px] flex flex-row md:flex-col justify-center items-center my-[40px] lg:my-[60px] gap-[20px]'>
                                <div onClick={()=> setToggleValue(1)} className={`${ToggleValue === 1 ? "color_caff33" : ""} bg-Main w-[180px] h-[50px]  rounded-[40px] flex justify-center items-center border-[1px] border-Secondary border-solid text-white`}>Online Banking</div>
                                <div onClick={()=> setToggleValue(2)} className={`${ToggleValue === 2 ? "color_caff33" : ""} bg-Main w-[180px] h-[50px]  rounded-[40px] flex justify-center items-center border-[1px] border-Secondary border-solid text-white`}>Financial Tools</div>
                                <div onClick={()=> setToggleValue(3)} className={`${ToggleValue === 3 ? "color_caff33" : ""} bg-Main w-[180px] h-[50px]  rounded-[40px] flex justify-center items-center border-[1px] border-Secondary border-solid text-white`}>Customer Support</div>
                            </div>
                        </div>
                        <div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] w-fit">
                            {
                                ToggleValue === 1 ? (
                                <>
                                    <Card Title ='24/7 Account Access' Desc = 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'/>
                                    <Card Title = 'Mobile Banking App' Desc = 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'/>
                                    <Card Title = 'Secure Transcation' Desc = 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'/>
                                    <Card Title = 'Bill Pay and Transfers' Desc = 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'/>
                                </> ):ToggleValue === 2 ?  (
                                <>
                                    <Card Title = 'Smart Banking Tools' Desc="Simplify your financial life with our innovative and user-friendly tools that make managing your money a breeze."/>
                                    <Card Title = 'Empowering Financial Solutions' Desc = 'Access a comprehensive suite of financial solutions tailored to your unique needs, helping you achieve your financial goals with confidence.'/>
                                    <Card Title = 'Manage Your Money ' Desc = 'Take control of your finances effortlessly with our intuitive tools and resources, designed to streamline your financial management experience.'/>
                                    <Card Title = 'Manage Your Transcation' Desc = 'Gain financial independence and make informed financial decisions with our empowering tools and expert guidance.'/>
                                </> )
                                
                                 :  (
                                    <>
                                        <Card Title ='24/7 Account Access' Desc = 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'/>
                                        <Card Title = 'Mobile Banking App' Desc = 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'/>
                                        <Card Title = 'Secure Transcation' Desc = 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'/>
                                        <Card Title = 'Bill Pay and Transfers' Desc = 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'/>
                                    </> )
                                
                            }
                           
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

