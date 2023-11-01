"use client"
import { services } from '../data/service'
import Image from 'next/image'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 


const Service = () => {

  

  return (
    <div id='services-offered' className=' bg-white text-black py-20'>
        {/*  */}
        <h1  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" className=' text-center mb-28 text-[2rem] font-extrabold  w-10/12 mx-auto'>
            See What Our Agency 
            <br/>
            <span className=' text-blue-500'>Offer</span> 
        </h1>

        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 gap-y-12 md:gap-y-16  w-10/12 mx-auto'>
            {
                services.map( (service, index )=> (
                    <div
                    data-aos="fade-right"
                    data-aos-delay={`${index*300}`}
                    className=' relative h-[15rem] group lg:cursor-pointer md:cursor-pointer rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                    key={index}>
                        {/* Title and description */}
                        <div className=' lg:group-hover:-translate-y-14 md:group-hover:-translate-y-14 transition-all duration-300 absolute rounded-3xl p-4 h-full
                        flex flex-col items-center bg-gradient-to-r from-[rgba(255,77,30,1)] to-[rgba(255,44,109,1)] text-white '>
                            <h5 className=' text-xl font-extrabold'>
                                {service.title}
                            </h5>
                            <p>
                                {service.description}
                            </p>
                        </div>
                        {/* Image */}
                        <div className=' group-hover:translate-y-14 transition-all duration-300 bg-white absolute hidden lg:flex md:flex items-center justify-center
                        w-full h-full rounded-3xl '>
                            <Image
                            alt='svc-img'
                            className='w-30 h-30 '
                            src={service.image}
                            width={100}
                            height={100}
                            />
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Service