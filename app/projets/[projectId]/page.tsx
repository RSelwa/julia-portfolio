import TransitionLink from "@/components/transition-link"
import { PROJECTS } from "@/constants"
import { LINKS } from "@/constants/navigation"
import Image from "next/image"
import { redirect } from "next/navigation"

export const generateStaticParams = async () => {
  const projects = Object.values(PROJECTS)

  return projects.map((post) => ({
    projectId: post.id
  }))
}

const Page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params

  const project = Object.values(PROJECTS).find((p) => p.id === projectId)

  if (!project) redirect("/404")

  return (
    <main className="min-h-full-height">
      <h1 className="text-cobalt text-size-h2 lg:text-size-h1 my-8 text-center font-serif lg:mt-4">
        {project.title}
      </h1>
      <section className="grid grid-cols-1 justify-between gap-9 p-9 lg:mt-20 lg:grid-cols-5">
        <article className="flex flex-col gap-5 lg:col-span-2">
          <h2 className="font-serif text-2xl font-semibold">Projet</h2>
          <p>{project.description}</p>
        </article>
        <article className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl font-semibold">logiciels</h2>
          <p>
            {project.logiciels?.map((logiciel, i) => (
              <div key={i}>{logiciel}</div>
            ))}
          </p>
        </article>
        <article className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl font-semibold">Compétences</h2>
          <p>{project.skills?.map((skill, i) => <div key={i}>{skill}</div>)}</p>
        </article>
        <article className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl font-semibold">liens</h2>
          <p>{project.link}</p>
        </article>
      </section>
      <Image
        src={project.images.cover}
        height={1080}
        width={1920}
        alt={project.title}
        className="mt-20 aspect-video w-full object-cover"
      />
      <section className="grid grid-cols-1 gap-5 p-9 lg:grid-cols-12">
        <Image
          src={project.images.cover}
          height={700}
          width={700}
          alt={project.title}
          className="lg:col-span-4"
        />
        <Image
          src={project.images.cover}
          height={700}
          width={700}
          alt={project.title}
          className="lg:col-[7_/_span_4] lg:mt-40"
        />
        <Image
          src={project.images.cover}
          height={700}
          width={700}
          alt={project.title}
          className="lg:col-[5_/_span_4] lg:mt-12"
        />
      </section>
      <h2 className="text-size-h3 mx-auto my-12 px-9 text-center font-serif lg:w-1/2 lg:text-6xl">
        {project.description}
      </h2>
      <Image
        src={project.images.cover}
        height={1080}
        width={1920}
        alt={project.title}
        className="mt-20 aspect-video w-full object-cover"
      />

      <h3 className="mx-auto my-12 w-fit">
        <TransitionLink
          href={LINKS.projects.url}
          className="lg:text-size-h1 text-size-h2 text-cobalt mx-auto font-serif"
        >
          Autres projects
        </TransitionLink>
      </h3>
    </main>
  )
}

export default Page
