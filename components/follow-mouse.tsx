"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const offset = 10
gsap.registerPlugin(useGSAP) // register the hook to avoid React version discrepancies

const FollowMouse = () => {
  const ref = useRef<HTMLSpanElement | null>(null)

  const handleMove = (e: globalThis.MouseEvent) => {
    if (!ref.current) return

    const tl = gsap.timeline()

    tl.to(ref.current, 0.5, {
      x: `${e.pageX + offset}px`,
      y: `${e.pageY + offset}px`
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <span
      ref={ref}
      className="font-bold bg-black/30 text-white absolute top-0 left-0 flex w-fit items-center gap-4 rounded-full  px-4 py-1 opacity-0 transition-opacity duration-300 peer-hover:flex peer-hover:opacity-100 backdrop-blur-md"
    >
      Voir le Projet
    </span>
  )
}

export default FollowMouse
