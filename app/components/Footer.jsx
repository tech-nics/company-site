import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsTwitter, BsLinkedin, BsInstagram, BiLogoFacebook, BsWhatsapp, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineMail} from "react-icons/ai"
import { LiaTelegram } from "react-icons/lia"
import {FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { MdRateReview } from "react-icons/md"

const Footer = () => {
  return (
    <section 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
    className=' w-10/12 mx-auto py-16 flex flex-col gap-10' >
        <div 
        className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 '>

            {/* Logo and description */}
            <div className=' flex flex-col gap-2'>
                <div className=' flex items-center text-red-500 font-bold text-xl'>
                <Image 
                    alt='techplusnics-logo'
                    src="/logo.png"
                    width={80}
                    height={80}
                />
                <p>TechPlusNics</p>
                </div>

                <p>Tech-Plus-Nics is your expert ally for a powerful online presence. Our team of skilled tailors solutions to your unique needs.</p>
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
                <Link href="/" scroll={true} >Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/service">Service</Link>
                <Link href="/contact">Contact Us</Link>
            </div>

            {/* Address and email address */}
            <div className=' flex flex-col gap-2'>
                <header className=' font-bold text-lg'>Address & Email</header>
                <p className=' flex gap-2 items-center'><BsTelephoneFill className=' text-blue-800' size={20}/><a href='tel:8668679847'>+91 8668679847</a></p>
                <p className=' flex gap-2 items-center'><BsWhatsapp className=' text-green-600' size={20} /> <a href="https://api.whatsapp.com/send?phone=7769964872">7769964872</a></p>
                <p className=' flex gap-2 items-center' ><AiOutlineMail className=' text-orange-700' size={20} /><a href="mailto:techplusnics@gmail.com">techplusnics@gmail.com</a></p>
                <p className=' flex gap-2 items-center' ><MdRateReview className=' text-pink-700' size={20} /><a target="_blank" href="https://g.page/r/CWy8VDbA0-lcEBM/review">Review our Site</a></p>
            </div>
        </div>

        {/* Copyright issue and social media handles */}
        <div className=' flex flex-col-reverse lg:flex-row md:flex-row gap-y-4 justify-between'>
            <div>
                <p>ⓒ All rights reserved to TechPlusNics </p>
            </div>

            <div className=' flex  gap-2'>
                <Link 
                className=' text-blue-400 p-2 hover:bg-blue-400 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' target='_blank' href="https://twitter.com/TechPlusNics?t=ehMP3jB2bG-9j6zsJDR37A&s=08"> <BsTwitter size={25} /> </Link>

                <Link 
                className=' text-blue-600 p-2 hover:bg-blue-600 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' target='_blank' href="https://www.facebook.com/profile.php?id=61552895097857&mibextid=ZbWKwL"> <FaFacebookF size={25} /> </Link>

                <Link 
                className=' text-blue-800 p-2 hover:bg-blue-900 hover:bg-opacity-60 rounded-full hover:text-white  transition-all duration-300' 
                target='_blank' href="https://www.linkedin.com/in/techplusnics/"> <FaLinkedinIn size={25} /> </Link>

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