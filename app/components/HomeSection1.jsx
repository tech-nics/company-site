import React from 'react'
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const HomeSection1 = () => {
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 lg:w-10/12  md:w-10/12 mx-auto p-4 py-20'>
        
        {/* Left cards */}
        <div className=' lg:grid md:grid  grid-cols-1 gap-4 '>
            <div className='  flex items-end rounded-2xl relative  min-h-[10rem]'>
                <div className=' absolute flex items-center justify-center lg:top-0 md:top-0 -top-5 right-1/2 translate-x-1/2 w-16 h-16 p-2  bg-gray-700 rounded-full'>
                    <img src='/logo.png'/>
                </div>
                <div className=' bg-gray-300 p-4  rounded-2xl font-bold lg:text-xl text-base  w-full h-[80%] flex justify-center items-center text-center'>
                    Cost-Effectiveness and Responsiveness
                </div>
            </div>
            <div className=' h-4 block lg:hidden md:hidden'>
                
            </div>
            <div className=' row-span-2 bg-red-600 text-white tracking-wider rounded-2xl flex flex-col gap-2 justify-end p-4   min-h-[10rem]'>
                <p className=' lg:text-xl text-lg font-bold'>Know More <br></br> About Us</p>
                <Link className=' w-fit'  href={"about"}><FaRegArrowAltCircleRight size={40} /></Link>
            </div>
        </div>

        {/* mid four cards */}
        <div className=' lg:grid md:grid grid-cols-1 lg:grid-cols-2 gap-4 col-span-2 hidden'>
            <div className=' bg-orange-500 hidden lg:flex text-white rounded-2xl p-4 h-[15rem] items-end relative'>
                <div className=' absolute top-4 right-4  p-1 rounded-full'>
                    <FaPlusCircle size={20} color='white'/>
                </div>
                <p className='lg:text-xl text-lg font-bold'>Branding & Marketing</p>
            </div>

            <div className=' bg-gray-200 rounded-2xl hidden p-4 h-[15rem] lg:flex items-end relative'>
                <div className=' absolute text-purple-600 top-4 right-4  p-1 rounded-full'>
                    <FaPlusCircle size={20}/>
                </div>
                <p className=' text-2xl font-bold'>Inovation & Effecency</p>
            </div>

            <div className=' bg-gray-200 rounded-2xl p-4 h-[15rem] flex items-end relative'>
                <div className=' absolute top-4 text-red-600 right-4  p-1 rounded-full'>
                    <FaPlusCircle size={20}/>
                </div>
                <p className=' text-2xl font-bold'>Adaptability and Engagement</p>
            </div>

            <div className=' bg-purple-600 text-white rounded-2xl p-4 h-[15rem] flex items-end relative'>
                <div className=' absolute top-4 right-4  p-1 rounded-full'>
                    <FaPlusCircle size={20} color='white'/>
                </div>
                <p className=' text-2xl font-bold'> Learning & Developing community</p>
            </div>
        </div>

        {/* right cards */}
        <div className=' grid grid-cols-1   gap-4'>
            <div className='  bg-red-600 text-white rounded-2xl flex items-end p-4 relative  min-h-[10rem]'>
                <div className=' absolute top-4 right-4  p-1 rounded-full'>
                    <FaPlusCircle size={20} color='white'/>
                </div>

                <p className=' lg:text-xl text-base font-bold'>Consistency and Credibility</p>
            </div>

            <div className=' row-span-2 bg-blue-600 rounded-2xl flex items-end relative  min-h-[10rem]'>
                <div className=' h-full w-full rounded-2xl grayscale bg-[url("../public/home-about.jpg")]'>

                </div>
                <div className=' absolute top-4 right-4  p-1 rounded-full '>
                    <FaPlusCircle size={20} color='orange'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection1