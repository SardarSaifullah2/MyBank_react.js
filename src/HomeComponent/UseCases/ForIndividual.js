import React from 'react'
import Managing from '../../Svg/Svgone.svg'
import Saving from '../../Svg/Saving.svg'
import HomeOwnerShip from '../../Svg/Homeownership.svg'
import Education from '../../Svg/Education.svg'
import { SingleCaseBox } from './SingleCaseBox'
import { SingleCaseBoxText } from './SingleCaseBoxText'


export const ForIndividual = () => {
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
            Text:"HomeOwner Ship"
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
    // <div className='flex flex-col md:flex-row gap-[40px] bg-pink-50'>
    //     <div className='bg-Grey/11 w-[400px] flex flex-row justify-center items-centerflex-wrap gap-[20px] p-[30px] rounded-[12px]'>
    //   {  Data?.map(item =>{
    //       return (
    //             <SingleCaseBox Img={item.Icon} Text={item.Text} key={item.Text} />
    //       )
    //     })}
    //         </div>
    //         <SingleCaseBoxText Heading={DetailData[0].Heading} Paragraph = {DetailData[0].Paragraph} PercentDetail = {PercentDetail}></SingleCaseBoxText>
    // </div>

<div>
<div className='max-w-7xl m-auto flex flex-col gap-[20px] lg:gap-[4%] md:flex-row p-[0px]'>
    <div className='p-[10px] md:p-[20px] lg:p-[40px] bg-Grey/11 rounded-[20px] md:w-[55%] lg:w-[40%] m-auto'>
        <div className='text-white flex flex-row flex-wrap justify-center gap-[10px] '>
            { Data?.map(item=>{
                return(
                    <SingleCaseBox Img={item.Icon} Text={item.Text} key={item.Text} />
                )
            })}
        </div>
    </div>
    <div className='w-[100%] md:w-[45%] lg:w-[56%]'>
        <SingleCaseBoxText Heading={DetailData[0].Heading} Paragraph = {DetailData[0].Paragraph} PercentDetail = {PercentDetail}></SingleCaseBoxText>
    </div>

</div>
</div>
  )
}
