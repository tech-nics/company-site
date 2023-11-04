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



export default function Home() {
    useEffect(() => {
        AOS.init({
          once:true
        });
      }, []);
    
  return (
    <main >
        <Hero/>
        <HomeAbout/>
        {/* <About/> */}
        <Service/>
        <Portfolio/>
        {/* <Blogs/> */}
        <ContactUs/>

    </main>
  )
}
