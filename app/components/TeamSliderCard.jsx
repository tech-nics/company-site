import Image from 'next/image'
import React from 'react'

const TeamSliderCard = ({member}) => {
  return (
    <div className='w-full h-full p-4 text-white flex flex-col gap-5'>
        {/* w-full h-full p-4 text-white flex flex-col */}
        {/* Image and description */}
        <div className=' flex gap-4 border-b-2 pb-5'>
            {/* Profile image */}
            <div className=' lg:w-20 lg:h-20 md:w-20  md:h-20 h-10 w-20
            relative rounded-full overflow-hidden'>
                <Image
                alt='usr-img'
                    className=' object-cover'
                    src={member.image}
                    fill
                />
            </div>

            {/* Name and description */}
            <div>
                <h6 className=' lg:text-xl  md:text-xl text-lg font-bold'>
                    {member.name}
                </h6>
                <p className=' text-sm'>
                    {member.description}
                </p>
            </div>
        </div>

        {/* Expertise */}
        <div>
            <p className=' text-lg font-bold mb-1'>Expertise</p>
            <ul className=' text-blue-400 font-extrabold'>
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