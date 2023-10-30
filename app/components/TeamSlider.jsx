'use client'

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"
import "../globals.css"
import { teamProfile } from "../data/teamData"
import TeamSliderCard from "./TeamSliderCard"

const TeamSlider = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

  return (
    
    <div className=" lg:w-[25rem] md:w-[25rem] sm:w-[25rem] w-[15rem] lg:h-[25rem] md:h-[25rem] sm:h-[25rem] h-[15rem] overflow-hidden cursor-pointer rounded-2xl">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {
            teamProfile.map( (member, index) => (
                <div className="keen-slider__slide bg-gradient-to-b from-orange-400 to-red-500 w-full h-full">
                    <TeamSliderCard member={member} />
                </div>
            ))
        }
      </div>
    </div>

  )
}

export default TeamSlider