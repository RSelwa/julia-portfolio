"use client"

import { useTheme } from "next-themes"
import React from "react"

const Header = () => {
  const { setTheme } = useTheme()


  return (
    <nav className="flex justify-between items-center p-4 bg-stone-200 text-black dark:bg-black dark:text-yellow-400
    ">
      <button>( menu )</button>
      <button>LaSource</button>
      <button>( close )</button>

      <button onClick={()=>{
        console.log("light");
        
        setTheme("light")}}>Light</button>
      <button onClick={()=>{
        console.log("dark");
        
        setTheme("dark")}}>DARK</button>
      <button onClick={()=>{
        console.log("system");
        
        setTheme("system")}}>SYSTEM</button>
    </nav>
  )
}

export default Header
