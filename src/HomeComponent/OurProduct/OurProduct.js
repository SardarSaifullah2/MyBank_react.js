import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import '../../index.css'
import { motion } from "framer-motion"
import { TabSection } from './TabSection'
import { TabButton } from './TabButton'
import { ContainerInfo } from '../../GlobalComponent/ContainerInfo'

export const OurProduct = ()=>{
  const [Active , SetActive] = useState(false)
   
  return(

    <div>
      <div className='max-w-7xl mx-auto py-[80px]'>
        <div className='content flex flex-col gap-[100px] items-center justify-center w-full'>
          <div className='flex flex-col md:flex-row items-center md:items-end justify-between gap-[30px] text-center md:text-left p-[20px] w-full'>
            <ContainerInfo ContainerId='our_products' ContainerHeading='Our' SpanHeading='Products' ContainerParagraph="A quick brown fox jumps over the lazy dog. A quick brown for jumps over the lazy dogs ." />
            <TabButton Active={Active} SetActive={SetActive}></TabButton>
          </div>
          <TabSection Active={Active}></TabSection>
        </div>
      </div>
    </div>

  )
}


