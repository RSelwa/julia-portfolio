"use client"

import { TRANSITION_CLASSNAME, TRANSITION_DURATION } from "@/constants"
import { sleep } from "@/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof Link> & {
  callback?: () => void
}

const TransitionLink = ({ href, children, callback, ...props }: Props) => {
  const router = useRouter()

  const handleOnClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (callback) callback()
    const body = document.querySelector("body")
    body?.classList.add(TRANSITION_CLASSNAME)

    await sleep(TRANSITION_DURATION)

    router.push(href.toString())

    await sleep(TRANSITION_DURATION)

    body?.classList.remove(TRANSITION_CLASSNAME)
  }

  return (
    <Link onClick={handleOnClick} href={href} {...props}>
      {children}
    </Link>
  )
}

export default TransitionLink
