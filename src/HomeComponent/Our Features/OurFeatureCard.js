import React from "react"
import styled from "styled-components"
import FeaturedIconSvg from '../../Svg/featureIconSvg.svg'

export const Card = ({Title , Desc}) =>{
    return(
        < div className="bg-Main border-Secondary border-[1px] border-solid py-[45px] px-[25px] md:py-[30px] md:px-[25px] lg:py-[30px] lg:px-[25px] rounded-[20px] flex flex-col gap-[15px] w-[100%]">
            <h6 className="flex justify-between items-center text-white sm:!text-[20px] md:!text-[15px] lg:!text-[20px] ">{Title}<span><img src={FeaturedIconSvg} alt='Icon'></img></span></h6>
            <p className="small md:!text-[12px] lg:!text-[16px] !text-left">{Desc}</p>
        </div>
    )
}

const ContentHeading = styled.div`
    color:#FFFFFF;
    font-size:20px;
    line-height:150%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
        width:18px;
    }
`
const ContentParagraph = styled.p`
  
`
