import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import ContactUs from './components/ContactUs'

export default function Home() {
  return (
    <main className=''>
        <Hero/>
        <About/>
        <Service/>
        <Portfolio/>
        <Blogs/>
        <ContactUs/>
    </main>
  )
}
