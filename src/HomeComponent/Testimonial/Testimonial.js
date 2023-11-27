import React from 'react'
import { Testimonailbox } from './Testimonailbox'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import { TestimonailData } from '../../Data/Data';
export const Testimonial = () => {
    const setting = {
        dots:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        gap:20,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 786,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ],
    }

   
  return (
    <div className='my-[120px] p-[20px]'>
        <div className='max-w-7xl mx-auto'>
                <Slider {...setting}>
                    {
                      TestimonailData.map(item=>{
                        return(
                          <Testimonailbox Review = {item.Review}/>
                        )
                      })
                    }
                </Slider>
        </div>
    </div>
  )
}


