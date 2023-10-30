import React from 'react'
import Image from 'next/image'
import TeamSlider from './TeamSlider'



const About = () => {
  return (
    <div className=' lg:bg-about-background bg-no-repeat  bg-white min-h-[90vh] h-auto py-10 min-w-[100%]'>

        <div className='lg:w-10/12 md:w-10/12 w-full  mx-auto'>
            {/* Company Description */}
            <div className=' text-black flex  flex-col items-center gap-5 mb-5'>

            <h2 className=' text-[3rem] font-extrabold  text-orange-400'>Tech<span className=' text-blue-500'>nics</span></h2>
            <p className=' font-bold lg:text-white p-2 '>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nunc pretium, pellentesque metus non, finibus metus. Quisque tincidunt dolor at ligula ultrices tristique. Maecenas scelerisque lectus sit amet arcu scelerisque condimentum. Cras sit amet dolor lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum convallis ante sed pulvinar gravida. Duis orci nisl, rutrum vel velit eu, porta malesuada tellus."
            </p>

            </div>

            {/* Image and meet your team section */}
            <div className=' flex flex-col lg:flex-row  lg:justify-evenly md:justify-evenly items-center lg:gap-0 gap-5'>

            {/* Rigth image */}
            <Image 
            className=' w-[250] h-[250] lg:w-[400px] lg:h-[400px] md:w-[500px] md:h-[500px]'
                src="/about-left-image.png"
                width={300}
                height={300}
            />

            {/* Team image slider */}
            <div className=' flex flex-col items-center'>
                <h3 className=' text-center mb-5 text-[2rem] font-extrabold lg:text-white p-4'> Meet Your team</h3>
                <TeamSlider/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About