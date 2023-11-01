"use client"
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import ContactUs from './components/ContactUs'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
    
  return (
    <main>
        <Hero/>
        <About/>
        <Service/>
        {/* <Portfolio/>
        <Blogs/> */}
        <ContactUs/>

    </main>
  )
}
