"use client"

import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-cobalt text-white font-semibold flex flex-col items-center justify-center">
          <ul className="space-y-6 text-2xl text-center">
            <li>Home</li>
            <li>About us</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      {/* Navbar */}
      <div className="sticky top-0 z-20 dark:bg-black">
        <nav
          data-status={isOpen ? "open" : "closed"}
          className="flex justify-between items-center p-4 data-[status=closed]:text-cobalt data-[status=open]:text-stone-200 dark:text-yellow-400"
        >
          <button onClick={() => setIsOpen((p) => !p)}>
            ( {isOpen ? "close" : "menu"} )
          </button>
          <span className="font-serif font-bold text-2xl">LaSource</span>
          <span>( work )</span>
        </nav>
      </div>
    </>
  )
}

export default Header
