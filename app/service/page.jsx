import { services1, services2 } from "../data/service"
import Link from 'next/link'
import {BsTwitter, BsLinkedin, BsInstagram, BiLogoFacebook, BsWhatsapp, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineMail} from "react-icons/ai"
import { LiaTelegram } from "react-icons/lia"
import {FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import { MdRateReview } from "react-icons/md"


const style = {
    "height":"100vh",
    "width":"100vw",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "fontSize": "2rem",
    "fontWeight": "900"
}
export default function BlogPage(){
    return (

        <div className=" ">

            <div className='pt-16 flex justify-end items-center lg:pr-36 md:pr-28 pr-14  lg:h-40 h-40 bg-gradient-to-br from-[#ff2100] from-0% via-58% to-[#005eff] to-100%'>
                <h1 className=' lg:text-[4rem] text-3xl text-white font-bold '>Service</h1>
            </div>  

            {/* Section 1 */}
            <div>
                <div className=" lg:w-10/12 md:w-10/12 p-4 py-20 mx-auto flex justify-center gap-10">
                    {/* Left image */}
                    <div className=" hidden lg:block md:block">
                        <img src="/service-hero.jpg"/>
                    </div>
                    {/* Rigth image */}
                    <div className=" flex flex-col gap-6 lg:w-2/3 w-[90%] ">
                        <p className=" text-blue-500 font-bold ">A Symphony of Services</p>
                        <h2 className="text-2xl lg:text-[2.5rem] md:text-[2.5rem] font-black lg:leading-[1.2] md:leading-10 ">Unlocking Your Digital Potential with Tech Plusnics</h2>
                        <p className="text-gray-400">In a world driven by digital innovation, Tech Plusnics emerges as your guiding light, paving the way for businesses to not just exist but thrive in the expansive digital realm. Welcome to a transformative experience where our comprehensive suite of digital services is meticulously designed to redefine your online presence and propel your business towards unprecedented growth.</p>
                    </div>
                </div>
            </div>

            {/* Section 2 */}   
            <div className="bg-gradient-to-br from-[#1c143a] from-50% to-blue-500 text-white">
                <div className=" lg:w-10/12 md:w-10/12 p-4 py-20 mx-auto flex flex-col gap-y-10">
                    {/* Upper section */}
                    <div className=" flex flex-col gap-6">
                        <p className="text-blue-500 font-bold ">Why Choose Tech Plusnics for Your Digital Needs</p>
                        <h2 className="text-2xl lg:text-[2.5rem] md:text-[2.5rem] font-black lg:leading-[1.2] md:leading-10 ">Explore the possibilities with <br className=" lg:block hidden"/> Tech Plusnics</h2>
                        <p className="text-gray-400  lg:w-2/3">Contact us to discuss how we can tailor our services to meet your unique business needs by letting our services be the catalyst for your digital success.</p>
                        <a href="https://www.instagram.com/techplusnics?igsh=Nmd0bTE4amVzejY=" className=' w-fit bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white font-bold px-6 py-3 rounded-lg'>Follow Us</a>
                    </div>

                    {/* Lower section */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            services1.map( (service, index) => (
                                <div className=" flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg" key={ index}>
                                    {/* <img src={service.image} alt={`service${index}`} /> */}
                                    <div className=" mb-3">
                                        {service.icon}
                                    </div>
                                    <h4 className=" font-bold text-lg text-center">{service.title}</h4>
                                    <p className=" text-center font-light">{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Section 3 Secrvices */}
            <div>
                <div className=" flex flex-col gap-12 lg:w-10/12 md:w-10/12 mx-auto p-4 py-20">
                    <div className=" flex flex-col gap-6 ">
                        <p className="text-blue-500 font-bold ">Service</p>
                        <h2 className="text-2xl lg:text-[2.5rem] md:text-[2.5rem] font-black lg:leading-10 md:leading-10 ">Our Platform Features</h2>
                        <p className="text-gray-400  lg:w-2/3">Tech Plusnics offers a comprehensive array of services, each meticulously designed to empower your business in the digital landscape. Contact us to explore how our tailored solutions can elevate your online presence and drive sustained growth.</p>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {
                            services2.map( (service, index) => (
                                <div className={`flex flex-col items-center gap-2 group border-2 transition-all duration-500 hover:border-blue-500 hover:shadow-2xl cursor-pointer hover:text-white hover:bg-blue-500 rounded-2xl p-4`} key={index}>
                                    <div className=" text-blue-500 group-hover:text-white transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                    <h5 className=" text-center font-bold">{service.title}</h5>
                                    <p  className=" text-center">{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Section 4 Contact us */}
            <div className="  bg-gradient-to-br from-[#1c143a] from-50% to-blue-500 text-white">
                <div className=" flex flex-col lg:flex-row gap-y-10 lg:w-10/12 md:w-10/12 p-4 py-16 mx-auto ">
                    {/* Left side */}
                    <div className=" flex flex-col gap-6">
                        <p className="text-blue-500 font-bold">Follow us</p>
                        <h5 className="text-2xl lg:text-[2.5rem] md:text-[2.5rem] font-black lg:leading-10 md:leading-10 ">A Partnership, Not Just a Service</h5>
                        <p className="text-gray-400  lg:w-2/3">At Tech Plusnics, we don&apos;t just provide services; we build lasting partnerships. Your success is our success, and we walk hand in hand with you on your digital journey. Our client-centric ethos ensures that you are not just a project but a valued collaborator.</p>
                        <div className=' flex  gap-2 self-center lg:self-start'>
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
                    {/* Rigth Side Image */}
                    <div>
                        <img src="/service-follow-us.png" alt="service-contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}