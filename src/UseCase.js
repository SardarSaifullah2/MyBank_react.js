import React from 'react'
import styled from 'styled-components'
import OverLayImg from './Abstract Design (1).png'
import SvgOne from './GridIndividualone.svg'
export const UseCase = () =>{
    return(
        <Main>
            <Max_Width>
                <Content>
                    <UseCaseHeadingSection>
                        <Heading>Use <span>Case</span></Heading>
                        <Paragraph>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</Paragraph>
                    </UseCaseHeadingSection>
                    <UseCaseDetailSection>
                        <IndividualSection>
                            <Overlay><img src={OverLayImg} alt='image' /></Overlay>
                            <GridSection> 
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                            </GridSection>
                            <DetailSection>
                                <DetailHeading>For Individual</DetailHeading>
                                <DetailParagraph>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</DetailParagraph>
                                <NumberSection>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    
                                </NumberSection>
                                <Button>Learn More</Button>
                            </DetailSection>
                        </IndividualSection>
                        <BusinessSection>Two</BusinessSection>
                    </UseCaseDetailSection>
                    <UseCaseDetailSection>
                        <IndividualSection>
                          
                            <DetailSection>
                                <DetailHeading>For Business</DetailHeading>
                                <DetailParagraph>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</DetailParagraph>
                                <NumberSection>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    <Article>
                                        <Number>78%</Number>
                                        <Title>Secure Retirement Planning</Title>
                                    </Article>
                                    
                                </NumberSection>
                                <Button>Learn More</Button>
                            </DetailSection>
                            <GridSection> 
                            <Overlay><img src={OverLayImg} alt='image' /></Overlay>

                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                                <Grid>
                                    <img src={SvgOne}></img>
                                    <GridHeading>Managing Personal Finances</GridHeading>
                                </Grid>
                            </GridSection>
                        </IndividualSection>
                        <BusinessSection>Two</BusinessSection>
                    </UseCaseDetailSection>
                </Content>
            </Max_Width>
        </Main>
    )
}

const Main = styled.div`
    padding:100px 20px;
`
const Max_Width = styled.div`
    max-width:1280px;
    margin:0 auto;
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    gap:80px;
`
// Use Case Section Heading Start 
const UseCaseHeadingSection = styled.div`
    display:flex;
    flex-direction:column;
    gap:14px;
`
const Heading = styled.div`
    font-size:38px;
    font-weight:400;
    color:white;
    line-height:150%;
    span{
        color:#caff33;
    }
       @media(max-width:786px){
        text-align: center;
    }
`
const Paragraph = styled.div`
    color:#b3b3b3;
    line-height:150%;
       @media(max-width:786px){
        text-align: center;
    }
`
// Use Case Section Heading End 
// UseCase Detail Section Start 
const UseCaseDetailSection = styled.div`
`
// Individual Section Start 
const IndividualSection = styled.div`
    display:flex;
    gap:50px;
    position:relative;
    z-index:0;
    @media(max-width:786px){
        flex-direction:column;
    }
`
const Overlay = styled.div`
    position:absolute;
    z-index:1;
    
`
const GridSection = styled.div`
    width:50%;
    padding:50px;
    background:#1c1c1c;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    position:relative;
    @media(max-width:880px){
        padding:20px;
    }
    @media(max-width:786px){
        padding:20px;
        width:100%;
    }
`
const Grid = styled.div`
background:#1a1a1a;
border-radius:10px;
position:relative;
z-index:2;
display:flex;
flex-direction:column;
padding:20px 20px;
gap:20px;
align-items:center;
max-width:314px;
img{
    width:70px;
}
@media(max-width:786px){
   padding:10px 10px;
}

`
const GridHeading = styled.div`
    text-align:center;
    font-size:18px;
    font-weight:300;
    line-height:150%;
    color:#ffff;
    @media(max-width:880px){
        font-size:12px;

    }
`
const DetailSection = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    @media(max-width:786px){
        width:100%;
        align-items:center;
    }
`
const DetailHeading= styled.div`
    font-size:38px;
    font-weight:500;                     
    color:white;
       @media(max-width:786px){
        text-align: center;
    }
`
const DetailParagraph= styled.div`
    color:#b3b3b3;
    line-height:150%;
    font-size:14px; 
       @media(max-width:786px){
        text-align: center;
    }
`
const NumberSection = styled.div`
    display:flex;
    gap:20px;
    margin-top:50px;
    @media(max-width:786px){
        flex-direction: column;
        text-align: center;
    }
`
const Article= styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
  
`
const Number= styled.div`
    font-size:38px;
    color:#caff33;
`
const Title= styled.div`
    color:#b3b3b3;
    line-height:150%;
`
const Button = styled.div`
    width:fit-content;
    padding:15px 30px;
    background:transparent;
    border:1px solid #b3b3b3;
    color:#b3b3b3;
    border-radius:40px;
    margin-top:60px;
  
`
// Individual Section End 
// Business Section Start 
const BusinessSection = styled.div``
// Business Section End 
// UseCase Detail Section End 