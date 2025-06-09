import FollowMouse from "@/components/follow-mouse"
import GridElement from "@/components/grid-element"
import { PROJECTS } from "@/constants"

const Gallery = () => {
  const projects = Object.values(PROJECTS)

  return (
    <section className="min-h-full-height my-40 overflow-hidden">
      <article className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <GridElement project={projects[0]} className="lg:col-span-4" />
        <GridElement
          project={projects[1]}
          className="lg:col-[9_/_span_4] lg:mt-80 lg:-ml-5"
        />
        <GridElement
          project={projects[2]}
          className="lg:col-[4_/_span_4] lg:-mt-32 lg:ml-9"
        />
        <GridElement
          project={projects[3]}
          className="lg:col-[7_/_span_4] lg:mt-40 lg:-mr-5"
        />
        <GridElement
          project={projects[4]}
          className="lg:col-[1_/_span_4] lg:-mt-48 lg:ml-9"
        />
        <GridElement
          project={projects[5]}
          className="lg:col-[9_/_span_4] lg:row-start-5 lg:mt-28 lg:ml-9"
        />
        {/* ROW 1  */}
        <GridElement project={projects[6]} className="lg:col-[9_/_span_4]" />
        <GridElement
          project={projects[7]}
          className="lg:col-[3_/_span_4] lg:-mt-32 lg:-ml-5"
        />
        <GridElement
          project={projects[8]}
          className="lg:col-[2_/_span_4] lg:row-start-6 lg:-mt-32 lg:ml-9"
        />
        <GridElement
          project={projects[9]}
          className="lg:col-[7_/_span_4] lg:mt-40 lg:-mr-5"
        />

        <FollowMouse />
      </article>
    </section>
  )
}

export default Gallery
