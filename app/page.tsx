/* eslint-disable react/no-unescaped-entities */
import Gallery from "@/components/gallery"
import TransitionLink from "@/components/transition-link"
import { selectedProjects } from "@/constants"
import { LINKS } from "@/constants/navigation"
import { formatDate } from "@/lib/utils"
import Image from "next/image"

export default function Home() {
  return (
    <main className="text-center px-10">
      <section className="font-serif text-center text-cobalt">
        <h1 className="mt-40 text-7xl font-bold w-5/6 mx-auto">
          La source de Julia Caro
        </h1>
        <h2 className="text-2xl">
          Freelance - communication digitale - direction artistique
        </h2>
      </section>

      <section className="my-20 font-serif space-y-20">
        <p className="flex w-2/3 mx-auto flex-wrap justify-center items-center gap-4 text-center text-8xl">
          L'endroit
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="object-cover rounded  lg:block hidden w-0 h-[100px] animate-[widthIn_.425s_ease-in-out_2s_forwards]"
          />
          où
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="object-cover rounded lg:block hidden w-0 h-[100px] animate-[widthIn_.425s_ease-in-out_2.064s_forwards]"
          />{" "}
          tout a commencé
          <Image
            alt="La source"
            src="/img.avif"
            width={200}
            height={100}
            className="object-cover rounded lg:block hidden w-0 h-[100px] animate-[widthIn_.425s_ease-in-out_2.128s_forwards]"
          />
        </p>
        <p className="text-center lg:w-2/3 mx-auto text-lg">
          Je suis Julia Caro, directrice artistique originaire de l'île de La
          Réunion. À travers mes créations visuelles, je cherche à raconter desz
          histoires qui capturent l'essence du moment, en mêlant émotion et
          esthétisme. Mon art est un équilibre entre simplicité et profondeur,
          un regard personnel sur le monde qui m'entoure.
        </p>

        <TransitionLink
          href={LINKS.about.url}
          className=" bg-cobalt font-sans rounded-full text-white px-8 py-2 transition-colors duration-300"
        >
          Lire la suite
        </TransitionLink>
      </section>

      <section className="lg:ml-auto lg:w-1/2 mt-40 flex flex-col items-end">
        <article className="lg:flex hidden justify-between items-center font-serif gap-20 w-full">
          <span>Selected projects</span>
          <div>
            (1 <span className="mx-8">-</span> 4)
          </div>
        </article>
        <ul className="grid grid-cols-2 lg:grid-rows-1 grid-rows-2 lg:grid-cols-4 gap-4 w-full mt-8">
          {selectedProjects.map(({ date, title, images: { cover } }, i) => (
            <div
              key={i}
              className="group size-full aspect-square lg:size-[86px]"
            >
              <Image
                alt={`Project ${i + 1}`}
                src={cover}
                width={86}
                height={86}
                className="lg:size-[86px] size-full object-cover"
              />
              <div
                style={{ backgroundImage: `url(${cover})` }}
                className="fixed h-full left-0 top-0 z-20 overflow-hidden w-0 group-hover:animate-slideIn flex flex-col justify-between bg-center bg-cover text-white text-lg"
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
