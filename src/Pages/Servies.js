import React from 'react'
import { PageHero } from '../GlobalComponent/PagesHero'
import { Protect } from '../ServicesComponent/Protect/Protect'
import { Faqs } from '../GlobalComponent/Faqs/Faqs'
import { SecurityData } from '../Data/Data'
export const Servies = () => {
  const Data = SecurityData[0]
  return (
    <>
        <PageHero Heading={Data.Heading} SpanHeading={Data.SpanHeading} Paragraph={Data.Paragraph}/>
        <Protect/>
        <Faqs></Faqs>
    </>
  )
}
