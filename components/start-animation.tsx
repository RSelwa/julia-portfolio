"use client"

import { motion } from "motion/react"

const StartAnimation = () => {
  return (
    <motion.div
      initial={{ height: "100%" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      className="fixed inset-0 z-50 bg-cobalt overflow-hidden text-white font-semibold flex flex-col items-center justify-center"
    >
      HI
    </motion.div>
  )
}

export default StartAnimation
