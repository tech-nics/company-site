import React from 'react'
import About from '../components/About'
import { roadmapInfo, roadmapSymbol } from '../data/aboutUsRoadMap'
import { teamProfile } from '../data/teamData'
import FlipedCard from '../components/FlipedCard'
import { flipedCard } from '../data/flipedCardData'




const page = () => {
  return (
    <div className=' pt-16 '>
        {/* <About/> */}
        {/* Banner */}
        {/* via-[#ff7e0773] via-27% via-[#00bcd41a] via-50% via-[#00bcd442] */}
        <div className='flex justify-end items-center lg:pr-36 md:pr-28 pr-14  lg:h-40 h-28 bg-gradient-to-br from-[#ff2100] from-0% via-58% to-[#005eff] to-100%'>
            <h1 className=' lg:text-[4rem] text-3xl text-white font-bold '>About Us</h1>
        </div>  

        <div className=' lg:p-0 md:p-0 flex flex-col '>
            {/* We Serve Your Need's */}
            <div className='bg-[#F7F7F7] pb-16 p-4'>
                {/* Features and image */}
                <div className='flex items-center justify-between lg:w-10/12 md:w-10/12 mx-auto bg-[#F7F7F7]'>

                    <div className='lg:w-2/3'>

                        <div className='bg-[#F7F7F7] flex gap-4 lg:gap-8 lg:pt-20 py-10 flex-col mx-auto'>
                            <p className=' text-blue-500 font-bold '>About Tech Plusnics</p>
                            <h1 className=' text-2xl lg:text-[2.5rem] md:text-[2.5rem] font-black lg:leading-10 md:lg:leading-10'>Empowering Your Digital Journey</h1>
                            <p className=' text-gray-400'>At Tech Plusnics, we are more than just a digital services company – we are your partners in transforming your business for the online era. Our journey began with a vision to empower businesses of all sizes to thrive in the digital landscape.</p>
                        </div>


                        <div className='flex gap-6 '>
                            {/* Roadmap Symbols */}
                            <div className='grid '>
                                {
                                    roadmapSymbol.map((sym,index) => (
                                        <div key={index} className='  grid place-content-center relative'>
                                            <div className=' p-3 bg-[#7c6efd] rounded-full z-40 text-white '>
                                                {sym}
                                            </div>
                                            {/* <div className={`w-1 h-full border-dotted border-blue-900 border-r-4  ${ index === 3 && "hidden"}`}>

                                            </div> */}
                                            <div className={`absolute top-1/2 h-full border-dotted border-[#7c6efd] border-r-4 right-1/2 translate-x-1/2  z-20 ${ index === 3 && "hidden"}`}>
                                            
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {/* Roadmap Details */}
                            <div className=' grid lg:gap-8 gap-5 relative z-20'>
                                {
                                    roadmapInfo.map( (info, index) => (
                                        <div className=' z-40 flex gap-1 flex-col' key={index}>
                                            <h1 className=' font-bold text-lg'>{info.heading}</h1>
                                            <p className=' text-sm '>{info.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className=' hidden lg:block'>
                        <img alt='aboutImage' className=' object-contain' src='/aboutUs-heroImage.png' />
                    </div>
                </div>
            </div>

            {/* Team members */}

            <div className='lg:w-10/12 md:w-10/12 mx-auto flex flex-col gap-8 py-16'>
                <h2 className=' font-black text-3xl lg:text-[2.5rem] text-center mt-10'>Who we are</h2>
                <p className=' font-light w-[85%] mx-auto text-center'>Tech Plusnics is a dynamic team of visionary individuals, each passionate about leveraging technology to propel businesses to new heights. Founded by six industry experts, our diverse backgrounds converge to form a powerhouse of creativity, innovation, and technical expertise.</p>
                <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16 place-items-center'>
                {
                    teamProfile.map( (member, index) => (
                        <div key={index} className=' flex-col border-2  rounded-lg group  w-[16rem] lg:min-h-[25rem] lg:w-full md:w-full relative'>
                            <div className=' overflow-hidden rounded-lg rounded-b-none'>
                                <img className=' h-full w-full lg:min-h-[22rem] md:min-h-[22rem]' src={member.image} />
                            </div>

                            <div className=' font-bold text-lg p-2'>
                                {member.name}
                            </div>

                            <div className=' p-2'>
                                {member.title}
                            </div>

                            <div className=' flex flex-col backdrop-blur-sm text-white justify-center items-center gap-3 p-4 font-bold absolute bg-orange-600 h-full w-full inset-0 scale-y-0 bg-opacity-70 group-hover:scale-y-100 transition-all duration-500'>
                                <p>{member.bio}</p>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            

            {/* Card */}

            <div className='bg-[#F7F7F7] p-4'>
                <div className=' lg:w-10/12 md:w-10/12 mx-auto py-16 flex gap-10 flex-col '>
                    <h2 className=' text-3xl font-bold text-center lg:text-[2.5rem] '>Our Mission</h2>
                    <p className=' w-[90%] text-center mx-auto font-light'> At the core of Tech Plusnics is a mission to seamlessly blend creativity with technology. We strive to be the catalyst for your digital success, offering a comprehensive suite of services that include digital marketing, web design, graphic design, application management, app design, and app development.</p>

                    <div className='flex flex-col gap-y-20 lg:flex-row'>
                        <div className=' grid lg:grid-cols-2 grid-cols-1 place-items-center lg:place-items-start  gap-8 w-full'>
                            {
                                flipedCard.map( (card, index) => (
                                    <FlipedCard key={index} index={index} data={card}/>
                                ) )
                            }
                        </div>

                        <div className=' lg:w-[60%] w-full flex flex-col gap-6 '>
                            <p className=' text-blue-500 font-bold'>Why Choose Tech Plusnics</p>
                            <h2 className=' text-[2rem] leading-10 font-bold '>Let's Grow Together</h2>
                            <p className=''>Embark on your digital journey with Tech Plusnics. Together, we'll not only navigate the digital landscape but also conquer it. Join us in shaping a future where your business thrives online.</p>
                            <p className=''>Choose Tech Plusnics for a digital partnership that goes beyond services we are here to elevate your business and celebrate your success.</p>
                            <a href="https://api.whatsapp.com/send?phone=7769964872" className=' w-fit bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white font-bold px-6 py-3 rounded-lg self-center'> Contact Us</a>
                            
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page