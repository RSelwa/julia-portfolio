"use client"

import {
    IMAGE_END_ANGLE,
    IMAGE_END_X,
    IMAGE_START_ANGLE,
    IMAGE_START_X,
    SCRUB,
    SHOW_MARKERS,
    TOGGLE_ACTIONS,
} from "@/constants/gsap"
import { Project } from "@/types/project"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"

const ScrollProject = ({ leftImage, rightImage, children }: Project) => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    useGSAP(() => {
        tl.from(leftRef.current, {
            rotation: IMAGE_START_ANGLE,
            x: IMAGE_START_X,
        }).to(leftRef.current, {
            rotation: IMAGE_END_ANGLE,
            x: `-${IMAGE_END_X}`,
            scrollTrigger: {
                toggleActions: TOGGLE_ACTIONS,
                trigger: leftRef.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: SCRUB,
                markers: SHOW_MARKERS,
            },
        })

        tl.from(rightRef.current, {
            rotation: -IMAGE_START_ANGLE,
            x: `-${IMAGE_START_X}`,
        }).to(rightRef.current, {
            rotation: -IMAGE_END_ANGLE,
            x: IMAGE_END_X,
            scrollTrigger: {
                toggleActions: TOGGLE_ACTIONS,
                trigger: rightRef.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: SCRUB,
                markers: SHOW_MARKERS,
            },
        })
    })

    return (
        <section className="relative flex h-screen items-center justify-center gap-4 overflow-hidden p-24">
            <article
                ref={leftRef}
                className="z-20 h-full min-w-[600px] overflow-hidden"
            >
                <Image
                    priority={false}
                    src={leftImage.src}
                    alt={leftImage.alt}
                    className="h-full rounded-4xl object-cover"
                />
            </article>
            {children}

            <article
                ref={rightRef}
                className="z-20 h-full min-w-[600px] overflow-hidden"
            >
                <Image
                    priority={false}
                    src={rightImage.src}
                    alt={rightImage.alt}
                    className="h-full w-full rounded-4xl object-cover"
                />
            </article>
        </section>
    )
}

export default ScrollProject
