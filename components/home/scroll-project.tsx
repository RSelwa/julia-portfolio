"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    IMAGE_END_ANGLE,
    IMAGE_END_X,
    IMAGE_START_ANGLE,
    IMAGE_START_X,
    SCRUB,
    SHOW_MARKERS,
    TOGGLE_ACTIONS,
} from "@/constants/gsap"
import { cn } from "@/utils/tailwind"
import { Project } from "@/types/project"

const ScrollProject = ({ leftImage, rightImage, children }: Project) => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    const imagesClasses = ["left", "right"]

    useGSAP(() => {
        tl.from(`.${imagesClasses[0]}`, {
            rotation: IMAGE_START_ANGLE,
            x: IMAGE_START_X,
        }).to(`.${imagesClasses[0]}`, {
            rotation: IMAGE_END_ANGLE,
            x: `-${IMAGE_END_X}`,
            scrollTrigger: {
                toggleActions: TOGGLE_ACTIONS,
                trigger: `.${imagesClasses[0]}`,
                start: "top 80%",
                end: "bottom bottom",
                scrub: SCRUB,
                markers: SHOW_MARKERS,
            },
        })

        tl.from(`.${imagesClasses[1]}`, {
            rotation: -IMAGE_START_ANGLE,
            x: `-${IMAGE_START_X}`,
        }).to(`.${imagesClasses[1]}`, {
            rotation: -IMAGE_END_ANGLE,
            x: IMAGE_END_X,
            scrollTrigger: {
                toggleActions: TOGGLE_ACTIONS,
                trigger: `.${imagesClasses[1]}`,
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
                className={cn(
                    imagesClasses[0],
                    "z-20 h-full min-w-[600px] overflow-hidden"
                )}
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
                className={cn(
                    imagesClasses[1],
                    "z-20 h-full min-w-[600px] overflow-hidden"
                )}
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
