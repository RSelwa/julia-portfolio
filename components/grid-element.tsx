/* eslint-disable @next/next/no-img-element */
import TransitionLink from "@/components/transition-link"
import { cn, formatDate } from "@/lib/utils"
import { Project } from "@/types"
import { ComponentProps } from "react"

export type ProjectGrid = Project & {
  type: string
  img: string
}

const GridElement = ({
  className,
  project
}: ComponentProps<"div"> & {
  project: ProjectGrid
}) => {
  return (
    <TransitionLink
      href={`/projets/${project.id}`}
      className={cn(
        "peer relative size-fit text-white overflow-hidden bg-red-300",
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
      <div className="absolute bg-black/60 inset-0 flex py-2 flex-col items-center justify-between">
        <p>{formatDate(project.date)}</p>
        <p>{project.title}</p>
      </div>
    </TransitionLink>
  )
}

export default GridElement
