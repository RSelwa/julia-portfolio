"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Page = () => {
    useGSAP(() => {
        gsap.to(".box", {
            rotation: 1000,
            scrollTrigger: {
                trigger: ".box",
                start: "top top",
                scrub: 1,
                end: "bottom bottom",
                // markers: true,
            },
            // scrollTrigger: {
            //     trigger: ".box",
            //     start: "top top",
            //     scrub: 1,
            //     pin: true,
            //     end: "bottom bottom",
            // },
        })
    })
    return (
        <div className="container mt-[100vh] bg-green-500">
            <div className="box aspect-square w-fit bg-red-600">Hello</div>
        </div>
    )
}

export default Page
