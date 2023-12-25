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
        className={`flex flex-col gap-10 gap-y-20 justify-between  ${direction}`}>
            <div 
            className='lg:w-[40%] flex flex-col  gap-10 justify-center'>
                <div className='flex lg:flex-col md:flex-col leading-[3.5rem] justify-center gap-x-2 font-bold text-[4rem]'>
                    <p className=' text-orange-500'> Services </p>
                </div>
                <p>
                    Empower Your Online Presence with Tech Plus Nics: Our array of digital services includes web design, cybersecurity, digital marketing, SEO, social media marketing, social media advertising, and streamlined digital registration. Dive into the specifics of each service to enhance your online success.
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

            {/* <CubeSlider heading={heading}/> */}

            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                <div className=' w-80 p-2 flex flex-col items-center rounded-2xl mx-auto'>
                    <img className=' w-52 mb-5 ' src='/home-service1.png' alt='service1' />
                    <h2 className=' font-bold'>WEB DESIGNING</h2>
                    <p className=' text-center'>Crafting visually stunning websites for a seamless user experience</p>
                </div>
                <div className=' w-80 p-2 flex flex-col items-center rounded-2xl lg:translate-y-20 mx-auto'> 
                    <img className='w-52 md:w-48 mb-5' src='/home-service2.png' alt='service1' />
                    <h2 className=' font-bold'>WEB DEVELOPMENT</h2>
                    <p className=' text-center'>Transforming ideas into powerful online experiences</p>
                </div>
                <div className=' w-80 p-2 flex flex-col items-center rounded-2xl mx-auto'>
                    <img className='w-52 md:w-48 mb-5' src='/home-service2.png' alt='service1' />
                    <h2 className=' font-bold'>WORDPRESS DESIGN</h2>
                    <p className=' text-center'>Tailored solutions for effortless content management.</p>
                </div>
                <div className=' w-80 p-2 flex flex-col items-center rounded-2xl lg:translate-y-20 mx-auto'>
                    <img className='w-52  mb-5' src='/home-service1.png' alt='service1' />
                    <h2 className=' font-bold'>MERN STACK</h2>
                    <p className=' text-center'>Cutting-edge, scalable solutions with MERN Stack expertise.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeAbout