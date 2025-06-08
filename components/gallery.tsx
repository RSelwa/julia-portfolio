import FollowMouse from "@/components/follow-mouse"
import GridElement from "@/components/grid-element"
import { projects } from "@/constants"

const Gallery = () => {
  return (
    <section className="min-h-full-height overflow-hidden my-40">
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <GridElement project={projects[0]} className="lg:col-span-4" />
        <GridElement
          project={projects[1]}
          className="lg:col-[9_/_span_4] lg:mt-80 lg:-ml-5"
        />
        <GridElement
          project={projects[2]}
          className="lg:col-[4_/_span_4] lg:ml-9 lg:-mt-32"
        />
        <GridElement
          project={projects[3]}
          className="lg:col-[7_/_span_4] lg:-mr-5 lg:mt-40"
        />
        <GridElement
          project={projects[4]}
          className="lg:col-[1_/_span_4] lg:ml-9 lg:-mt-48"
        />
        <GridElement
          project={projects[5]}
          className="lg:col-[9_/_span_4] lg:ml-9 lg:row-start-5 lg:-mt-28"
        />

        <FollowMouse />
      </article>
    </section>
  )
}

export default Gallery
