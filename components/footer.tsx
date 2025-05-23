"use client"

import TransitionLink from "@/components/transition-link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { motion } from "motion/react"
import { useRef } from "react"

const Footer = () => {
  gsap.registerPlugin(useGSAP) // register the hook to avoid React version discrepancies

  const container = useRef(null)

  const footerLinks = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ]

  return (
    <footer ref={container} className="bg-black text-white p-10">
      <section className="flex justify-between">
        <article>
          <p>( SITEMAP )</p>
          <ul className="space-y-1 my-2">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <TransitionLink
                  href={link.href}
                  className="group relative text-white/80 transition-colors hover:text-white text-sm"
                >
                  {link.name}
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    exit={{ width: 0 }}
                    className="absolute h-[1px] w-full bottom-0 left-0 bg-red-500"
                  />
                </TransitionLink>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="aaa w-full text-[9vw] text-center font-serif">
        La source
      </section>
    </footer>
  )
}

export default Footer
