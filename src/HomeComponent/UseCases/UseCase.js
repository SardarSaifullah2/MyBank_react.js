import React from 'react'
import styled from 'styled-components'
import { ContainerInfo } from '../../GlobalComponent/ContainerInfo'
import { ForIndividual } from './ForIndividual'
import { ForBusiness } from './ForBusiness'
export const UseCase = () =>{
    return(
        <div className='py-[80px] px-[20px]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col gap-[80px]'>
                     <ContainerInfo ContainerId='use_case' ContainerHeading='Use' SpanHeading='Case' ContainerParagraph="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions ." />
                    <ForIndividual/>
                    <ForBusiness/>
                </div>
            </div>
        </div>
    )
}

const Main = styled.div`
    padding:200px 20px;
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
