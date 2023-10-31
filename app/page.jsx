import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import ContactUs from './components/ContactUs'

export default function Home() {
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
