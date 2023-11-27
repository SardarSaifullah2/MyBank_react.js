import React from 'react'
import styled from 'styled-components'
import { FaqBox } from './FaqBox'
import { ContainerInfo } from '../../GlobalComponent/ContainerInfo'
import { FaqsData } from '../../Data/Data'
export const Faqs=()=>{
    return(
        <div className='py-[100px]'> 
            <div className='max-w-7xl mx-auto'>
                <div className='p-[20px] grid grid-cols-1 gap-[10px] text-center md:text-left'>
                   
                    <ContainerInfo ContainerId="frequently_asked_question" ContainerHeading="Frequently" SpanHeading = "Asked Question"  ContainerParagraph="Still you have any questions? Contact our Team via support@yourbank.com
"/> 
                   <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] pt-[40px] text-left'>
                    {
                        FaqsData.map(item=>{
                            return(
                                <FaqBox Title={item.Title} Detail={item.Detail}/>
                            )
                        })
                    }
                   </div>

                </div>
            </div>
        </div>
    )
}
const Main = styled.div`
    padding:200px 0 ;
`
const Max_Width = styled.div`

    max-width:1280px;
    margin:0 auto;
`
const Content = styled.div`
    padding:20px;
    display:grid;
    grid-template-columns:1fr;
    gap:10px;
    @media(max-width:786px){
        text-align:center;
    }
`
// const Heading = styled.div`
//     font-size:48px;
//     color:white;
//     span{
//         color:#caff33;
//     }
//     @media(max-width:786px){
//       font-size:38px;
      
//     }
// `
// const Paragraph = styled.div`
//     color:#b3b3b3;
//     font-weight:300;
//     line-height:200%;
// `
const FaqContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
padding-top:40px;
text-align:left;
@media(max-width:786px){
    grid-template-columns:1fr;
}
`