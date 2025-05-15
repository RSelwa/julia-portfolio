"use client"

import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky z-20 top-0 flex justify-between text-cobalt items-center p-4 bg-stone-200  dark:bg-black dark:text-yellow-400">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          ( {isOpen ? "close" : "menu"} )
        </button>

        <button>LaSource</button>
        <button>( close )</button>
      </nav>
      {isOpen && (
        <ul className="sticky z-10 h-svh pt-44 top-0 bg-cobalt text-white font-semibold">
          <li>Home</li>
          <li>About us</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  )
}

export default Header
