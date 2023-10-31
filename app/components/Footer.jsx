import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsTwitter, BsLinkedin, BsInstagram, BsTelegram, BsWhatsapp, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineMail} from "react-icons/ai"
import { LiaTelegram } from "react-icons/lia"
import {FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <section className=' w-10/12 mx-auto py-16 flex flex-col gap-10' >
        <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-6'>

            {/* Logo and description */}
            <div className=''>
                <Image 
                    src="/logo.png"
                    width={100}
                    height={100}
                />

                <p>Description of the company</p>
            </div>

            {/* Serives  */}
            <div className=' flex  flex-col gap-2'>
                <header className=' font-bold text-lg'>Services</header>
                <p>Website design</p>
                <p>Website modification</p>
                <p>SEO optimization</p>
                <p>Marketing</p>
            </div>
            
            {/* Navigations */}
            <div className=' flex flex-col gap-2'>
                <header className=' font-bold text-lg'>Navigations</header>
                <Link href="#">Home</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Service</Link>
                <Link href="#">Contact Us</Link>
            </div>

            {/* Address and email address */}
            <div className=' flex flex-col gap-2'>
                <header className=' font-bold text-lg'>Address & Email</header>
                <p className=' flex gap-2 items-center'><BsTelephoneFill className=' text-blue-800' size={20}/> 12345677890 / 12345667890</p>
                <p className=' flex gap-2 items-center'><BsWhatsapp className=' text-green-600' size={20} /> 1234567890</p>
                <p className=' flex gap-2 items-center' ><AiOutlineMail className=' text-orange-700' size={20} /> <a href="mailto:someone@example.com"> abc@gmail.con</a></p>
            </div>
        </div>

        {/* Copyright issue and social media handles */}
        <div className=' flex flex-col-reverse lg:flex-row md:flex-row gap-y-4 justify-between'>
            <div>
                <p>Copy  right issues</p>
            </div>

            <div className=' flex  gap-2'>
                <Link 
                className=' text-blue-400 p-2 hover:bg-blue-400 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' target='_blank' href="https://twitter.com/TechPlusNics?t=ehMP3jB2bG-9j6zsJDR37A&s=08"> <BsTwitter size={25} /> </Link>

                <Link 
                className=' text-blue-800 p-2 hover:bg-blue-900 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' 
                target='_blank' href="#"> <FaLinkedinIn size={25} /> </Link>

                <Link 
                className=' text-red-600 p-2 hover:bg-red-600 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' 
                target='_blank' href="https://www.instagram.com/techplusnics?igshid=OGQ5ZDc2ODk2ZA%3D%3D"> <BsInstagram size={25} /> </Link>

                <Link 
                className=' text-blue-600 p-2 hover:bg-blue-600 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' 
                target='_blank' href="https://t.me/techplusnics"> <LiaTelegram size={25} /> </Link>
            </div>
        </div>
    </section>
  )
}

export default Footer