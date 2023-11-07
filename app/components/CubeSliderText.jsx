"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay,  EffectCube, FreeMode, } from 'swiper/modules';
import { homeAboutData } from '../data/homeAbout';
import { services } from '../data/service';

const CubeSliderText = () => {
  return (
        <div className=" w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] mx-auto lg:ml-0 md:ml-0 pointer-events-none">
            <Swiper
                    // effect={'cube'}
                    grabCursor={true}
                    speed={4000}
                    loop={true}
                    simulateTouch={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper pointer-events-none"
                > 
                    {
                        services.map( (data, index) => (
                            <SwiperSlide key={index} >
                                <p className="p-2 pointer-events-none">{data.description}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </div>
  )
}

export default CubeSliderText