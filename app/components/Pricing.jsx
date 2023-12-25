import React from 'react'
import { pricingData } from '../data/pricing'
import Image from 'next/image'
import Link from 'next/link'
import PricingCard from './PricingCard'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"

const Pricing = () => {
  return (
    <div id='pricing' className=" flex flex-col gap-12 lg:gap-24 md:gap-2 py-10 pb-20 lg:py-20 lg:w-10/12 mx-auto">
        <h1 
        className="text-center text-[2.5rem] font-bold text-orange-600" > Pick Your <span className=" text-blue-500"> Plan</span></h1>
        {/* For laptop view */}
        <div className=" hidden lg:flex gap-8 justify-between" >
            {
                pricingData.map( (plan, index) => ( 
                    <div
                    key={index}
                    // data-aos="fade-right"
                    // data-aos-delay={`${index*300}`}
                    >
                            <PricingCard  plan={plan} />
                    </div>
                ))
            }
        </div>

        {/* For mobile and tablet view */}
        <div className="carousel carousel-center max-w-md p-4 mx-auto w-full space-x-8  rounded-box">
            
            {
                pricingData.map( (plan, index) => (
                    <div 
                    key={index} className="carousel-item w-full lg:hidden flex flex-col gap-2">
                        <PricingCard plan={plan} />
                        {
                            plan.level === "Basic" &&
                            <div 
                            className=' flex gap-2 items-center self-end'>
                                <p>Swipe Right for more</p>
                                <BsFillArrowRightCircleFill/>
                            </div>
                        }

                        {
                            plan.level === "Premium Plan" &&
                            <div className=' flex gap-2 items-center'>
                                 <BsFillArrowLeftCircleFill/>
                                <p>Swipe left for more</p>
                               
                            </div>
                        }
                    </div> 
                ))
            }
            </div>
        </div>
  )
}

export default Pricing