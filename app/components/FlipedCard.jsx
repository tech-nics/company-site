import React from 'react'
import "../globals.css"


const FlipedCard = ({data, index}) => {
  return (
    <div class={`flip-card ${index === 0 && "lg:translate-y-14"} ${index === 2 && "lg:translate-y-14"} cursor-pointer`}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h4 className=' text-2xl'>{data.heading}</h4>
                        {/* <p>{data.desc1}</p> */}
                    </div>
                    <div class="flip-card-back">
                        <p>{data.desc2}</p>
                    </div>
                </div>
            </div>

    )
  

}

export default FlipedCard