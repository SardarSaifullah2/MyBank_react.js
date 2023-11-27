import React from 'react'
import styled from 'styled-components'
import { VisionContainer } from '../AboutComponent/VisionContainer'
import { PressRelease } from '../AboutComponent/PressRelease'
import { PageHero } from '../GlobalComponent/PagesHero'
import { AboutData } from '../Data/Data'
export const About =() =>{
    const Data = AboutData[0]
    return(
        <Main>
            <PageHero Heading={Data.Heading} SpanHeading={Data.SpanHeading} Paragraph={Data.Paragraph}></PageHero>  
            <VisionContainer></VisionContainer>
            <PressRelease/>
        </Main>
    )
}


const Main = styled.div``