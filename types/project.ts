import { StaticImageData } from "next/image"
import { ReactNode } from "react"

type ImageProps = {
    src: StaticImageData
    alt: string
}

export type Project = {
    leftImage: ImageProps
    rightImage: ImageProps
    children: ReactNode
}
