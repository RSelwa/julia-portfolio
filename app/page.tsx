/* eslint-disable react/no-unescaped-entities */
import Gallery from "@/components/gallery"
import TransitionLink from "@/components/transition-link"
import { selectedProjects } from "@/constants"
import { LINKS } from "@/constants/navigation"
import { formatDate } from "@/lib/utils"
import Image from "next/image"

export default function Home() {
  return (
    <main className="px-10 text-center">
      <section className="text-cobalt text-center font-serif">
        <h1 className="mx-auto mt-40 w-5/6 text-7xl font-bold">
          La source de Julia Caro
        </h1>
        <h2 className="text-2xl">
          Freelance - communication digitale - direction artistique
        </h2>
      </section>

      <section className="my-20 space-y-20 font-serif">
        <p className="mx-auto flex w-2/3 flex-wrap items-center justify-center gap-4 text-center text-8xl">
          L'endroit
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="hidden h-[100px] w-0 animate-[widthIn_.425s_ease-in-out_2s_forwards] rounded object-cover lg:block"
          />
          où
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="hidden h-[100px] w-0 animate-[widthIn_.425s_ease-in-out_2.064s_forwards] rounded object-cover lg:block"
          />{" "}
          tout a commencé
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="hidden h-[100px] w-0 animate-[widthIn_.425s_ease-in-out_2.128s_forwards] rounded object-cover lg:block"
          />
        </p>
        <p className="mx-auto text-center text-lg lg:w-2/3">
          Je suis Julia Caro, directrice artistique originaire de l'île de La
          Réunion. À travers mes créations visuelles, je cherche à raconter desz
          histoires qui capturent l'essence du moment, en mêlant émotion et
          esthétisme. Mon art est un équilibre entre simplicité et profondeur,
          un regard personnel sur le monde qui m'entoure.
        </p>

        <TransitionLink
          href={LINKS.about.url}
          className="bg-cobalt rounded-full px-8 py-2 font-sans text-white transition-colors duration-300"
        >
          Lire la suite
        </TransitionLink>
      </section>

      <section className="mt-40 flex flex-col items-end lg:ml-auto lg:w-1/2">
        <article className="hidden w-full items-center justify-between gap-20 font-serif lg:flex">
          <span>Selected projects</span>
          <div>
            (1 <span className="mx-8">-</span> 4)
          </div>
        </article>
        <ul className="mt-8 grid w-full grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4 lg:grid-rows-1">
          {selectedProjects.map(({ date, title, images: { cover } }, i) => (
            <div key={i} className="group aspect-square size-full lg:size-32">
              <Image
                alt={`Project ${i + 1}`}
                src={cover}
                width={86}
                height={86}
                className="size-full object-cover lg:size-32"
              />
              <div
                style={{ backgroundImage: `url(${cover})` }}
                className="group-hover:animate-slideIn fixed top-0 left-0 z-20 flex h-full w-0 flex-col justify-between overflow-hidden bg-cover bg-center text-lg text-white"
              >
                <span className="bg-gradient-to-b from-black/50 to-transparent py-4">
                  {formatDate(date)}
                </span>
                <span className="bg-gradient-to-t from-black/50 to-transparent py-4">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </ul>
      </section>

      <Gallery />
    </main>
  )
}
