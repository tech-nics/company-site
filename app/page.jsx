"use client"
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import ContactUs from './components/ContactUs'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './components/Portfolio'
import HomeAbout from './components/HomeAbout'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import HomeSection1 from './components/HomeSection1'



export default function Home() {
    useEffect(() => {
        AOS.init({
          once:true
        });
      }, []);
    
  return (
    <main className=' overflow-x-hidden'>
        <Hero/>
        {/* <HomeAbout direction={" md:flex-row lg:flex-row"} /> */}
        <HomeSection1/>
        <HomeAbout direction={"  lg:flex-row"}  heading={"Services"}/>
        {/* <About/> */}
        <Service/>
        <Pricing/>
        {/* <Reviews/> */}
        <Portfolio/>
        {/* <Blogs/> */}
        <ContactUs/>

    </main>
  )
}
