import React from 'react'
import '../index.css'
import { ContainerInfo } from '../GlobalComponent/ContainerInfo'
import  AboutImgBg  from '../Images/AboutBgdesign.png'
import { VisionContainerData } from '../Data/Data'
export const VisionContainer = () => {

  return (
    <div>
        <div className='max-w-7xl mx-auto'>
            <div className='my-[60px] bg-Main flex flex-col gap-[40px] p-[20px]'>
                <ContainerInfo ContainerId='mission_and_vision' SpanHeading='Mission & Vision' ContainerParagraph="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development."  />
                <div className='flex flex-col gap-[100px] md:gap-[40px]'>

                {
                    VisionContainerData?.map(item =>{
                        return(
                            <div className={`flex flex-col md:flex-row gap-[50px] md:gap-[5%] w-full items-center justify-between ${item.Class}`} style={item.Style}>
                                <div className={`bg-Secondary w-[100%] md:w-[35%] p-[30px] rounded-[12px] h-[400px] relative z-[2] overflow-hidden ${item.ImgTop}`}>
                                <img src={AboutImgBg} className='absolute top-0 left-0 w-full h-full object-cover'></img>
                                <img src={item.Img} alt="img" className={`object-fit w-[100%] h-full relative z-[3] rounded-[12px] `}/>
                                </div>
                                <div className={`text-TextColor w-[100%] md:w-[65%] ${item.class} border-solid ${item.borderSize} border-Green/60 py-[30px] md:py-[30px] lg:py-[50px]`}>
                                <h2 className='!text-Green/60'>{item.Heading}</h2>
                                <p className='small'>{item.Paragraph}</p>
                                </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

