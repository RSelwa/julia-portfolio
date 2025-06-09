/* eslint-disable @next/next/no-img-element */
import TransitionLink from "@/components/transition-link"
import { cn, formatDate } from "@/lib/utils"
import { Project } from "@/types"
import { ComponentProps } from "react"

export type ProjectGrid = Project

const GridElement = ({
  className,
  project
}: ComponentProps<"div"> & {
  project: Project
}) => {
  return (
    <TransitionLink
      href={`/projets/${project.id}`}
      className={cn(
        "peer relative size-fit overflow-hidden bg-red-300 text-white",
        className
      )}
    >
      <div className="grid overflow-hidden">
        <img
          src={project.images.cover}
          alt={project.title}
          className="aspect-[0.73/1] h-[calc(100%+75px)] bg-red-600 object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/60 py-2">
        <p>{formatDate(project.date)}</p>
        <p>{project.title}</p>
      </div>
    </TransitionLink>
  )
}

export default GridElement
