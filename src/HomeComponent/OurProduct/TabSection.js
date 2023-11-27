import React from 'react'
import { ProductCard } from './ProductCard'
import SvgOne from '../../Svg/Svgone.svg'
import SvgTwo from '../../Svg/SvgTwo.svg'
import SvgThree from '../../Svg/SvgThree.svg'
export const TabSection = ({Active}) =>{
    return(
        <div className='w-fit'>
            {Active ?    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                <ProductCard Name="Checking Account" Svg={SvgOne}></ProductCard>
                <ProductCard Name="Saving Account" Svg={SvgTwo} style={Border_left_right}></ProductCard>
                <ProductCard Name="Default Account" Svg={SvgThree}></ProductCard>
              
               
            </div> 
            :
                    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                           
                <ProductCard Name="Default Account" Svg={SvgThree}></ProductCard>
                <ProductCard Name="Saving Account" Svg={SvgTwo} style={Border_left_right}></ProductCard>
                <ProductCard Name="Checking Account" Svg={SvgOne}></ProductCard>
                
            </div>
            }
        
        
        </div>
    )
}

const Border_left_right = {
    borderLeft:"1px solid #26262638",
    borderRight:"1px solid #26262638"
}