/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type Props = {
  project: {
    date: Date
    title: string
    type: string
    img: string
  }
}

const GridElement = ({ className, project }: ComponentProps<"div"> & Props) => {
  return (
    <li
      className={cn(
        "relative size-fit text-white overflow-hidden bg-red-300",
        className
      )}
    >
      <div className="grid overflow-hidden">
        <img
          src={"/img.avif"}
          alt={project.title}
          className="aspect-[0.73/1] object-cover h-[calc(100%+75px)]"
        />
      </div>
      <div className="absolute bg-black/60 inset-0 flex flex-col items-center justify-between">
        <p>{project.date.toDateString()}</p>
        <p>{project.title}</p>
      </div>
    </li>
  )
}

export default GridElement
