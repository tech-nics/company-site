"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import TeamSlider from './TeamSlider'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 



const About = () => {

    // useEffect( () => {
    //     AOS.init({
    //         duration: 1000,
    //         once: false,
    //         // delay:500
    //     })
    // })

  return (
    <div id='about-us' className=' lg:bg-about-background bg-cover bg-no-repeat  bg-white min-h-[90vh] h-auto py-10 min-w-[100%]'>

        <div className='lg:w-10/12 md:w-10/12 w-full  mx-auto'>
            {/* Company Description */}
            <div className=' text-black flex  flex-col items-center gap-5 mb-5'>

            <h2 className=' text-[3rem] mt-5 font-extrabold  text-orange-400'>Tech<span className=' text-blue-500'>nics</span></h2>
            <p className={`font-bold lg:text-white  p-4`}>
                  We at Techplusnic are dedicated to empowering businesses in the
                  digital age. We specialize in &nbsp;
                  <em className="font-[600]">
                     SEO,website building and online business setup
                  </em>
                  . &nbsp; Our mission is to help businesses establish a strong online
                  presence, optimize their search engine rankings, and successfully
                  transition their operations online. We believe in the power of the
                  internet to transform businesses and are committed to making this
                  transformation as seamless as possible for our clients.
                </p>

            </div>

            {/* Image and meet your team section */}
            <div className=' flex flex-col lg:flex-row  lg:justify-evenly md:justify-evenly items-center lg:gap-0 gap-5'>

            {/* Rigth image */}
            <Image 
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
            alt='About image'
            className=' w-[250] h-[250] lg:w-[400px] lg:h-[400px] md:w-[500px] md:h-[500px]'
                src="/about-left-image.png"
                width={300}
                height={300}
            />

            {/* Team image slider */}
            <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="500"
            className=' flex flex-col items-center'>
                <h3 className=' text-center mb-5 text-[2rem] font-extrabold lg:text-white p-4'> Meet Our team</h3>
                <TeamSlider/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About