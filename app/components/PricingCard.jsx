import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PricingCard = ({plan}) => {
  return (
    <div href="/price" className={` flex relative flex-col gap-4 items-center min-w-[200px]  p-6  rounded-lg border-2  text-white group  lg:hover:text-white lg:hover:border-white ${plan.level === "Standart Plan" ? "lg:scale-110 bg-orange-500 lg:hover:bg-black lg:hover:bg-opacity-90 lg:hover:scale-110" : "bg-black bg-opacity-90 lg:hover:scale-105 lg:hover:bg-orange-500"}     tansition-all duration-200 cursor-pointer`}>

                        {
                            plan.level === "Standart Plan" &&
                            <Image 
                            // className=' absolute -top-10 left-3 rotate-[-50deg]'

                            src="/plans/crown2.png"
                            className='absolute -top-[6%] -left-5 hidden lg:block md:block'
                            width={500}
                            height={500}
                            />
                        }

                        <div className="flex gap-3 ">
                            <Image 
                            alt={`${plan.level}-plan`}
                            src={ plan.image}
                            width={70}
                            height={70}
                            />
                            <div>
                                <h2 className=' text-2xl font-semibold' >{ plan.level }</h2>
                                <h3 className=''>{ plan.type}</h3>
                            </div>
                        </div>

                        <div className=' flex flex-col gap-1 items-center'>
                            <div className='flex gap-2'>
                                <s><p className=' opacity-80'>{ plan.realPrice}</p></s>
                                <p>25% off</p>
                            </div>
                            <p className=' opacity-80 group-hover:animate-blink text-lg'>{ plan.discountPrice}</p>
                        </div>

                        <Link href="/#contact-us" 
                        className={`px-4 py-2  ${plan.level === "Standart Plan" ? "bg-white text-orange-500  lg:group-hover:bg-orange-500 lg:group-hover:text-white " : "bg-orange-500 group-hover:bg-white group-hover:text-orange-500 hover:text-white hover:bg-red-600 hover:border-white"}   font-bold hover:scale-110 w-fit rounded-xl transition-all duration-500`}
                        >More Details</Link>

                        <p className=' text-sm opacity-80'> { plan.desciption} </p>

                        <div className=" w-full flex items-center gap-2">
                            <div className=" w-full  border-t-2 group-hover:border-orange-400 border-white"></div>
                            <p className="w-fit">Features</p>
                            <div className=" w-full border-t-2 group-hover:border-orange-400 border-white"></div>
                        </div>

                        <ul>
                            {
                                plan.features.map( (feature, index) => (
                                    <li key={index} className="flex gap-2 font-semibold">
                                        <p>✓</p> <p>{ feature }</p>
                                    </li>
                                ))
                            }
                        </ul>

                        
                    </div>
  )
}

export default PricingCard