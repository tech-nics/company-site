import Image from 'next/image'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className=' text-black mt-[5rem] flex flex-col gap-16'>

        {/* Right carusole */}
        <div className=' flex justify-between'>
            <div className=' text-blue-500 flex flex-col font-bold text-3xl w-[40%]'>
                <p>About</p>
                <p>Us</p>
            </div>
            <div className="carousel carousel-center max-w-[55%] space-x-4 self-end   bg-red-500 p-10 rounded-none rounded-l-xl">
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
                <div className="carousel-item">
                    <Image width={200} height={200} src="/profile-aditya.png" />
                </div> 
            </div>
        </div>


        {/* Left carusole */}
        <div className="carousel carousel-center max-w-[55%] space-x-4   bg-red-500 p-10 rounded-none rounded-r-xl">
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
            <div className="carousel-item">
                <Image width={200} height={200} src="/profile-aditya.png" />
            </div> 
        </div>

    </div>
  )
}

export default HomeAbout