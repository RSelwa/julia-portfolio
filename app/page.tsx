import GridElement from "@/components/grid-element"
import { projects } from "@/constants"
import Image from "next/image"

export default function Home() {
  return (
    <main className="text-center px-10">
      <section className="font-serif text-center text-cobalt">
        <h1 className="mt-40 text-7xl font-bold w-5/6 mx-auto">
          La source de Julia Caro
        </h1>
        <h2 className="text-2xl">
          Freelance - communication digitale - direction artistique{" "}
        </h2>
      </section>

      {/* <div>
        <p>La source </p>
        <div className="h-[110px]">
          <AspectRatio ratio={220 / 110}>
            <Image
              alt="La source"
              src="/img.avif"
              width={220}
              height={110}
              className="object-cover rounded"
            />
          </AspectRatio>{" "}
        </div>
        où <AspectRatio /> tout a commencé
      </div> */}

      <section className="lg:w-1/2 ml-auto mt-40">
        <article className=" flex justify-between items-center">
          <div className="lg:ml-[-110px]">Selected projects</div>{" "}
          <div>
            (1 <span className="mx-8">-</span> 4)
          </div>
        </article>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="group size-[86px]">
              <Image
                alt={`Project ${i + 1}`}
                src={`/img.avif`}
                width={86}
                height={86}
                className="size-[86px] object-cover"
              />
              <div className="fixed h-full left-0 top-0 z-20 overflow-hidden w-0 group-hover:animate-slideIn bg-red-500">
                {"test" + i}
              </div>
            </div>
          ))}
        </ul>
      </section>

      <section className="min-h-[1000px] mt-40">
        <ul className="grid grid-cols-1 lg:grid-cols-12 gap-5">
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
        </ul>
      </section>
    </main>
  )
}
