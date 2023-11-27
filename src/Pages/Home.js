import React from 'react'
import {Hero} from '../HomeComponent/Hero'
import { OurProduct } from '../HomeComponent/OurProduct/OurProduct'
import { UseCase } from '../HomeComponent/UseCases/UseCase'
import { OurFeatureTab } from '../HomeComponent/Our Features/OurFeatureTab'
import { Footer } from '../GlobalComponent/Footer/Footer'
import { Faqs } from '../GlobalComponent/Faqs/Faqs'
import { MakingAccount } from '../HomeComponent/MakingAccount'
import { Testimonial } from '../HomeComponent/Testimonial/Testimonial'
// import { Block } from '../HomeComponent/block'
export const Home=() =>{
    return(
        <>
            <Hero/>
            <OurProduct/>
            <UseCase/>
            <OurFeatureTab/>
            <Faqs/>
            <MakingAccount/>
            <Testimonial/>
            {/* <Block/> */}
        </>
    )
}