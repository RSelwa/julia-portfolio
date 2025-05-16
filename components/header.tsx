"use client"

import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-cobalt text-white font-semibold flex flex-col items-center justify-center">
          <ul className="space-y-6 text-2xl">
            <li>Home</li>
            <li>About us</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      {/* Navbar */}
      <div className="sticky top-0 z-20 dark:bg-black">
        <nav className="flex justify-between items-center p-4 text-red-500 dark:text-yellow-400">
          <button onClick={() => setIsOpen((p) => !p)}>( menu )</button>
          <span>LaSource</span>
          <span></span>
        </nav>
      </div>
    </>
  )
}

export default Header
