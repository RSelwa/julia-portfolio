"use client"

import TransitionLink from "@/components/transition-link"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const callback = () => setIsOpen(false)

  return (
    <>
      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-10 bg-cobalt overflow-hidden text-white font-semibold flex flex-col items-center justify-center"
          >
            <ul className="space-y-6 text-2xl text-center animate-[fadeIn_0.5s_ease-in-out]">
              <li>
                <TransitionLink {...{ callback }} href="/test">
                  TEST
                </TransitionLink>
              </li>
              <li>
                <TransitionLink {...{ callback }} href="/">
                  Home
                </TransitionLink>
              </li>

              <li>
                <TransitionLink {...{ callback }} href="about">
                  About us
                </TransitionLink>
              </li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <div className="sticky top-0 z-20 dark:bg-black">
        <nav
          data-status={isOpen ? "open" : "closed"}
          className="flex justify-between items-center transition-colors duration-500 p-4 data-[status=closed]:text-cobalt bg-white data-[status=open]:bg-transparent data-[status=open]:text-stone-200 dark:text-yellow-400"
        >
          <button onClick={() => setIsOpen((p) => !p)}>
            ( {isOpen ? "close" : "menu"} )
          </button>
          <TransitionLink
            {...{ callback }}
            href="/"
            className="font-serif font-bold text-2xl"
          >
            LaSource
          </TransitionLink>
          <span>( work )</span>
        </nav>
      </div>
    </>
  )
}

export default Header
