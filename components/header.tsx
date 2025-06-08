"use client"

import TransitionLink from "@/components/transition-link"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { LINKS } from "@/constants/navigation"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = Object.values(LINKS).filter((l) => l.url !== LINKS.call.url)

  const callback = () => setIsOpen(false)

  const handleRedirect = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement
    const isInput =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable
    if (isInput) return

    if (e.key.toLowerCase() === "b" && pathname !== LINKS.call.url)
      router.push(LINKS.call.url)
  }

  useEffect(() => {
    window.addEventListener("keypress", handleRedirect)

    return () => window.removeEventListener("keypress", handleRedirect)
  }, [])

  return (
    <header className="sticky z-30 flex w-full items-center px-9 pt-6">
      <div className="flex min-w-fit flex-1 justify-start">
        <TransitionLink
          {...{ callback }}
          href="/"
          className="flex font-serif font-bold text-2xl "
        >
          LaSource
        </TransitionLink>
      </div>
      <nav className="hidden items-center justify-center gap-1.5 lg:flex">
        {links.map((link) => (
          <TransitionLink
            key={link.url}
            href={link.url}
            data-state={pathname === link.url && "active"}
            className="text-cobalt bg-beige data-[state=active]:bg-cobalt hover:bg-cobalt data-[state=active]:text-white hover:text-white  dark:text-cobalt rounded-sm px-5 py-1.5 uppercase transition-all hover:rounded-full data-[state=active]:rounded-full "
          >
            {link.label}
          </TransitionLink>
        ))}
      </nav>

      <div className="hidden min-w-fit flex-1 justify-end lg:flex">
        <TransitionLink
          href={LINKS.call.url}
          className="bg-beige text-cobalt dark:bg-background dark:text-cobalt dark:border-cobalt/25 lg:flex hidden items-center rounded p-2 text-sm font-light uppercase dark:border"
        >
          <span className="bg-cobalt text-background font-serif mx-2 flex aspect-square size-6 items-center justify-center rounded-sm">
            B
          </span>
          pour prendre rdv
        </TransitionLink>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="block lg:hidden">
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="bg-cobalt text-white  mx-auto w-[calc(100%-2.25rem)]">
          <VisuallyHidden>
            <DrawerTitle />
            <DrawerDescription />
            <DrawerFooter />
          </VisuallyHidden>
          <DrawerHeader className="gap-2">
            {Object.values(LINKS).map((link) => (
              <TransitionLink
                key={link.url}
                href={link.url}
                data-state={pathname === link.url && "active"}
                onClick={() => setIsOpen(false)}
                className="text-foreground bg-background data-[state=active]:bg-foreground hover:bg-foreground data-[state=active]:text-background hover:text-background dark:bg-background dark:text-foreground dark:border-foreground/25 mx-auto w-52 rounded-sm px-5 py-1.5 text-center uppercase transition-all hover:rounded-full data-[state=active]:rounded-full dark:border"
              >
                {link.label}
              </TransitionLink>
            ))}
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

export default Header

// B call RDV
{
  /* <TransitionLink
          href={LINKS.call.url}
          className="bg-beige text-cobalt dark:bg-background dark:text-cobalt dark:border-cobalt/25 lg:flex hidden items-center rounded p-2 text-sm font-light uppercase dark:border"
        >
          <span className="bg-cobalt text-background font-serif mx-2 flex aspect-square size-6 items-center justify-center rounded-sm">
            B
          </span>
          pour prendre rdv
        </TransitionLink> */
}

// ;<nav
//   data-status={isOpen ? "open" : "closed"}
//   className="flex max-w-[100vw] justify-between items-center transition-colors duration-500 p-4 data-[status=closed]:text-cobalt bg-white data-[status=open]:bg-transparent data-[status=open]:text-stone-200 dark:text-yellow-400"
// >
//   <TransitionLink
//     {...{ callback }}
//     href="/"
//     className="font-serif font-bold text-2xl"
//   >
//     LaSource
//   </TransitionLink>
//   <button
//     onClick={() => setIsOpen((p) => !p)}
//     className="hidden lg:block"
//   >
//     ( {isOpen ? "close" : "menu"} )
//   </button>

// <Drawer open={isOpen} onOpenChange={setIsOpen}>
//   <DrawerTrigger className="block lg:hidden">
//     <Menu />
//   </DrawerTrigger>
//   <DrawerContent className="bg-cobalt text-white  mx-auto w-[calc(100%-2.25rem)]">
//     <VisuallyHidden>
//       <DrawerTitle />
//       <DrawerDescription />
//       <DrawerFooter />
//     </VisuallyHidden>
//     <DrawerHeader className="gap-2">
//       {Object.values(LINKS).map((link) => (
//         <TransitionLink
//           key={link.url}
//           href={link.url}
//           data-state={pathname === link.url && "active"}
//           onClick={() => setIsOpen(false)}
//           className="text-foreground bg-background data-[state=active]:bg-foreground hover:bg-foreground data-[state=active]:text-background hover:text-background dark:bg-background dark:text-foreground dark:border-foreground/25 mx-auto w-52 rounded-sm px-5 py-1.5 text-center uppercase transition-all hover:rounded-full data-[state=active]:rounded-full dark:border"
//         >
//           {link.label}
//         </TransitionLink>
//       ))}
//     </DrawerHeader>
//   </DrawerContent>
// </Drawer>
// </nav>
