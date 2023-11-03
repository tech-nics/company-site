import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <section className=' flex flex-col gap-14 w-10/12 mx-auto pb-16'>   

        <h3 
         data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-delay="500"
        className=' text-center text-2xl font-bold'>Meet Our <span className=' text-blue-500'>Clients</span></h3>

        <div 
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="500"
        className=' flex flex-wrap flex-col lg:flex-row items-center gap-y-6 justify-evenly w-full'>
            <Image
            alt='client1'
            src="/client1.jpg"
            width={200}
            height={200}
            />
            <Image
            alt='client2'
            src="/client2.jpg"
            width={200}
            height={200}
            />
            <Image
            alt='client3'
            src="/client3.jpg"
            width={200}
            height={200}
            />
        </div>

    </section>
  )
  

  
}

export default Portfolio