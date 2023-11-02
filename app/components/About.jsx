"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import TeamSlider from "./TeamSlider";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const About = () => {
  // useEffect( () => {
  //     AOS.init({
  //         duration: 1000,
  //         once: false,
  //         // delay:500
  //     })
  // })

  return (
    <div
      id="about-us"
      className=" lg:bg-about-background bg-cover bg-no-repeat  bg-white min-h-[90vh] h-auto py-10 min-w-[100%]"
    >
      <div className="lg:w-10/12 md:w-10/12 w-full  mx-auto">
        {/* Company Description */}
        <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        className=" text-black flex  flex-col items-center gap-5 mb-5">
          <h2 className=" text-[3rem] mt-5 font-extrabold flex gap-2  text-orange-300">
            Tech<span className=" lg:text-white text-red-500 ">+</span><span className=" text-blue-500">nics</span>
          </h2>
          <p className={`font-bold lg:text-white text-lg   p-4`}>
            Tech Plus Nics, also known as TPN, is your gateway to success in the
            digital realm. Our&nbsp;
              services encompass website development, digital marketing,
              cybersecurity, content creation, app development, digital asset
              management, and accounting support.
            . &nbsp; As your trusted ally, we tailor our expertise to your
            unique business needs. With a focus on reliability, affordability,
            and cutting-edge technology, we {`\'`} re here to propel your online
            presence to new heights. Join us on the path to digital
            transformation. Contact TPN today for a brighter online future.
          </p>
        </div>

        {/* Image and meet your team section */}
        <div className=" flex flex-col lg:flex-row  lg:justify-evenly md:justify-evenly items-center lg:gap-0 gap-5">
          {/* Rigth image */}
          <Image
            loading="eager"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            alt="About image"
            className=" w-[250] h-[250] lg:w-[400px] lg:h-[400px] md:w-[500px] md:h-[500px]"
            src="/about-left-image.png"
            width={300}
            height={300}
          />

          {/* Team image slider */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className=" flex flex-col items-center"
          >
            <h3 className=" text-center mb-5 text-[2rem] font-extrabold lg:text-white p-4">
              {" "}
              Meet Our team
            </h3>
            <TeamSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
