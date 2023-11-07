"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay,  EffectCube, FreeMode, } from 'swiper/modules';
import { services } from '../data/service';

const CubeSlider = ({heading}) => {
  return (
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        className=" w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] mx-auto pointer-events-none">
            <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    speed={6000}
                    loop={true}
                    simulateTouch={false}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false
                    }}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, FreeMode, Autoplay]}
                    className="mySwiper pointer-events-none h-full w-full"
                >
                            <SwiperSlide>
                                {
                                    heading !== "Services" ?
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs1.png" width={500} height={500} /> :
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs2-1.png" width={500} height={500} />
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                            {
                                    heading !== "Services" ?
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs2.png" width={500} height={500} /> :
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs2-2.png" width={500} height={500} />
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                            {
                                    heading !== "Services" ?
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs3.png" width={500} height={500} /> :
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs2-3.png" width={500} height={500} />
                                }
                            </SwiperSlide>
                            <SwiperSlide>
                            {
                                    heading !== "Services" ?
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs4.png" width={500} height={500} /> :
                                    <img alt='techplusnics-about' className=" pointer-events-none select-none object-cover h-[85%]" src="/homeAboutUs/homeAboutUs2-4.png" width={500} height={500} />
                                }
                            </SwiperSlide>
                </Swiper>
        </div>
  )
}

export default CubeSlider