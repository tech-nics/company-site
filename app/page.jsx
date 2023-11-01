"use client"
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import ContactUs from './components/ContactUs'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './components/Portfolio'



export default function Home() {
    useEffect(() => {
        AOS.init({
          once:true
        });
      }, []);
    
  return (
    <main >
        <Hero/>
        <About/>
        <Service/>
        <Portfolio/>
        {/* <Blogs/> */}
        <ContactUs/>

    </main>
  )
}
