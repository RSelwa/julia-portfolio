import Gallery from "@/components/gallery"

const Page = () => {
  return (
    <main className="min-h-full-height p-9">
      <h1 className="text-cobalt text-center font-serif text-8xl">
        Mes projets
      </h1>

      <Gallery />
    </main>
  )
}

export const metadata = {
  title: "Projets – Julia CARO, directrice artistique à Paris",
  description:
    "Découvrez les projets réalisés par Julia CARO, directrice artistique freelance à Paris : identité visuelle, branding, communication digitale et plus encore.",
  openGraph: {
    title: "Projets – Julia CARO, directrice artistique à Paris",
    description:
      "Découvrez les projets réalisés par Julia CARO, directrice artistique freelance à Paris : identité visuelle, branding, communication digitale et plus encore."
  }
}

export default Page
