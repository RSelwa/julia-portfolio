"use client"

import Logo from "@/components/logo"
import { motion } from "motion/react"

const StartAnimation = () => {
  return (
    <motion.div
      initial={{ height: "100%" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      className="bg-cobalt fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden font-semibold text-white"
    >
      <Logo className="h-40" />
    </motion.div>
  )
}

export default StartAnimation
