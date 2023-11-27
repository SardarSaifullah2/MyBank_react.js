import React from 'react'
import styled from 'styled-components'
import { ContactInformation } from '../ContactComponent/ContactInformation'
import { ContactForm } from '../ContactComponent/ContactForm'

export const Contact = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto my-[20px]'>
        <div className='p-[20px]  flex flex-col justify-center lg:flex-row gap-[10px]'>
          <ContactInformation/>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  )
}
const Main = styled.div``
const Max_Width = styled.div`
  max-width:1200px;
  margin:20px auto;
`
const Content = styled.div`
  padding:20px;
  display:flex;
  gap:10px;
  @media(max-width:886px){
    flex-direction:column;
    gap:20px;
  }

`
