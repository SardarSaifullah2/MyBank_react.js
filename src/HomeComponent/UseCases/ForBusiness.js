import React from 'react'
import Managing from '../../Svg/Svgone.svg'
import Saving from '../../Svg/Saving.svg'
import HomeOwnerShip from '../../Svg/Homeownership.svg'
import Education from '../../Svg/Education.svg'
import { SingleCaseBox } from './SingleCaseBox'
import { SingleCaseBoxText } from './SingleCaseBoxText'


export const ForBusiness = () => {
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
            Heading:"For Business",
            Paragraph:" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
        },
            {
                Percents:[
                    {
                        Percent:'82%',
                        PercentText:'Cash Flow Management',
                    },
                    {
                        Percent:'82%',
                        PercentText:'Drive Business Expansion',
                    },
                    {
                        Percent:'80%',
                        PercentText:'Streamline payroll processing',
                    }
                ]
            }
            
        ]

        const PercentDetail = DetailData[1].Percents
  return (
    <div>
    <div className='max-w-7xl m-auto flex flex-col gap-[20px] lg:gap-[4%] md:flex-row p-[0px]'>
    <div className='w-[100%] md:w-[45%] lg:w-[56%]'>
            <SingleCaseBoxText Heading={DetailData[0].Heading} Paragraph = {DetailData[0].Paragraph} PercentDetail = {PercentDetail}></SingleCaseBoxText>
        </div>
        <div className='p-[20px] lg:p-[40px] bg-Grey/11 rounded-[20px] md:w-[55%] lg:w-[40%] m-auto'>
            <div className='text-white flex flex-row flex-wrap justify-center gap-[10px] '>
                { Data?.map(item=>{
                    return(
                        <SingleCaseBox Img={item.Icon} Text={item.Text} key={item.Text} />
                    )
                })}
            </div>
        </div>
        
    
    </div>
    </div>
  )
}
