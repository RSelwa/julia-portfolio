/* eslint-disable @next/next/no-img-element */
import TransitionLink from "@/components/transition-link"
import { cn } from "@/lib/utils"
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
          className="aspect-[0.73/1] h-[calc(100%+75px)] object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/60 font-serif">
        <p className="w-full bg-gradient-to-b from-black/50 to-transparent py-4 text-center">
          ( {project.title} )
        </p>
      </div>
    </TransitionLink>
  )
}

export default GridElement
