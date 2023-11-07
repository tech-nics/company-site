import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import CubeSlider from './CubeSlider'
import CubeSliderText from "./CubeSliderText"

const HomeAbout = ({direction, heading}) => {
  return (
    <div id="about-us" className=' text-black my-[5rem] flex flex-col gap-16   p-2 md:w-10/12 lg:w-10/12 mx-auto'>

        {/* Right carusole */}
        <div 
        className={`flex flex-col gap-10 justify-center ${direction}`}>
            <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className='lg:w-[40%] flex flex-col gap-5'>
                <div className='flex lg:flex-col md:flex-col leading-[3.5rem] justify-center gap-x-2 font-bold text-[4rem]'>
                    {
                        heading ? 
                        <p className=' text-orange-500'> {heading}</p>
                        : 
                        <>
                            <p className=' text-blue-500'>About</p>
                            <p className=' text-red-500'>Us</p>
                        </>
                    }
                </div>
                <p>
                    Tech Plus Nics, also known as TPN, is your gateway to success in the digital realm. Our  services encompass website development, digital marketing, cybersecurity, content creation, app development, digital asset management, and accounting support.   Contact TPN today for a brighter online future. 
                </p>
                <Link 
                className=" px-4 py-2 border-2 border-red-600 w-fit rounded-xl hover:text-white hover:bg-red-600 hover:border-white transition-all duration-500"
                href="/about"
                >
                    Know more
                </Link>
            </div>
            
            {/* <div className=" lg:w-[60%]  grid items-center grid-cols-4 bg-red-500 p-5 rounded-l-3xl">
                
                <div className="h-fit">
                    <p>+</p>
                    <p>Text </p>
                </div>

                <Image 
                className="  w-[12rem]"
                src="/homeAboutSEO.png" width={100} height={100} />

                <Image
                className=" w-[12rem]"
                src="/homeAboutDigital.png" width={100} height={100} />

                
                <div className="h-fit">
                    <p className="h-fit">
                        Text
                    </p>
                </div>
            </div> */}

            <CubeSlider heading={heading}/>
        </div>



    </div>
  )
}

export default HomeAbout