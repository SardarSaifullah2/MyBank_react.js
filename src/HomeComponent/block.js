import React from 'react'
import Managing from '../Svg/Svgone.svg'
import Saving from '../Svg/Saving.svg'
import HomeOwnerShip from '../Svg/Homeownership.svg'
import Education from '../Svg/Education.svg'
import { SingleCaseBoxText } from './UseCases/SingleCaseBoxText'
export const Block = () => {
    const Data = [
        {
            Icon:Managing,
            Text:"Managing Personal Account"
        },
        {
            Icon:Saving,
            Text:"Saving for the Future"
        },
        {
            Icon:HomeOwnerShip,
            Text:"HomeOwnerShip"
        },
        {
            Icon:Education,
            Text:"Education Funding"
        },
    ]
    const DetailData = [
        {
            Heading:"For Individual",
            Paragraph:"For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
        },{
           Percents:[
                {
                    Percent:'78%',
                    PercentText:'Secure Retirement Planing'
                },
                {
                    Percent:'65%',
                    PercentText:'Manageable Debt Consolidation'
                },
                {
                    Percent:'98%',
                    PercentText:'Reducing financial burdens'
                }    
           ] 
        }
    ]
    const PercentDetail = DetailData[1].Percents
    
  return (
    <div>
        <div className='max-w-7xl m-auto flex flex-col gap-[20px] lg:gap-[4%] md:flex-row p-[20px]'>
            <div className='p-[20px] lg:p-[40px] bg-Grey/11 rounded-[20px] md:w-[55%] lg:w-[40%] m-auto'>
                <div className='text-white flex flex-row flex-wrap justify-center gap-[20px] '>
                    <div className='w-[45%]  h-[150px] bg-Main rounded-[20px]'>ColOne</div>
                    <div className='w-[45%]  h-[150px] bg-Main rounded-[20px] '>ColTwo</div>
                    <div className='w-[45%]  h-[150px] bg-Main rounded-[20px] '>ColThree</div>
                    <div className='w-[45%]  h-[150px] bg-Main rounded-[20px] '>ColFour</div>
                </div>
            </div>
            <div className='w-[100%] md:w-[45%] lg:w-[56%]'>
                <SingleCaseBoxText Heading={DetailData[0].Heading} Paragraph = {DetailData[0].Paragraph} PercentDetail = {PercentDetail}></SingleCaseBoxText>
            </div>

        </div>
    </div>
  )
}
