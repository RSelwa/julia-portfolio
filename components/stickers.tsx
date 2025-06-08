"use client"

import { cn } from "@/lib/utils"
import gsap from "gsap"
import { Draggable, InertiaPlugin } from "gsap/all"
import { useEffect, useRef } from "react"

gsap.registerPlugin(Draggable, InertiaPlugin)

type Props = {
  path: string
  className: string
}

export const Sticker = ({ path, className }: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    Draggable.create(ref.current, {
      bounds: "#draggable-container",
      inertia: true,
      force3D: true
    })
  }, [])

  return (
    <img
      src={`/img.avif`}
      alt={path}
      ref={ref}
      className={cn(
        `absolute z-10 hidden h-36 w-fit -translate-x-1/2 -translate-y-1/2 lg:block`,
        className
      )}
    />
  )
}

export const Stickers = () => {
  return (
    <>
      <Sticker path="prisma" className="top-[50%] left-[65%] rotate-6" />
      <Sticker path="supabase" className="top-[15%] left-[70%] -rotate-6" />
      <Sticker path="tailwind" className="top-[60%] left-[30%] rotate-3" />
      <Sticker path="vercel" className="top-[80%] left-[50%] -rotate-6" />
      <Sticker path="next" className="top-[25%] left-[50%] -rotate-3" />
      <Sticker path="react" className="top-[95%] left-[85%] rotate-2" />
      <Sticker path="seo" className="top-[45%] left-[75%] -rotate-2" />
    </>
  )
}
