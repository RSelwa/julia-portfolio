"use client"

import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import { ReactNode, useLayoutEffect } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ScrollSmootherComp = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1 // how long (in seconds) it takes to "catch up" to the native scroll position
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

export default ScrollSmootherComp
