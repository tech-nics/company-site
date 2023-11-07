import Image from 'next/image'
import React from 'react'

const TeamSliderCard = ({member}) => {
  return (
    <div className='w-full h-full p-4 text-white flex flex-col gap-5'>
        {/* w-full h-full p-4 text-white flex flex-col */}
        {/* Image and description */}
        <div className=' flex flex-col items-center gap-4 border-blue-300 lg:border-b-2 md:lg:border-b-2 pb-5'>
            {/* Profile image */}
            <div className=' lg:w-20 lg:h-20 md:w-20  md:h-20 h-20 w-20
            relative rounded-full overflow-hidden'>
                <Image
                    alt={member.name}
                    className=' object-cover'
                    src={member.image}
                    fill
                />
            </div>

            {/* Name and description */}
            <div>
                <h6 className=' text-center mb-1 lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  md:text-xl text-sm font-bold'>
                    {member.name}
                </h6>
                <p className=' text-center text-sm  text-slate-200'>
                    {member.description}
                </p>
            </div>
        </div>

        {/* Expertise */}
        <div className=' hidden lg:block md:block'>
            <p className=' text-lg font-bold mb-1  '>Expertise</p>
            <ul className=' font-extrabold'>
            {
                member.role.map( (exp, index) => (
                    <li key={index}>✔ {exp}</li>
                ))
            }
        </ul>
        </div>
    </div>
  )
}

export default TeamSliderCard