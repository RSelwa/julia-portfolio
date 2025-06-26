/* eslint-disable react/no-unescaped-entities */

const Page = () => {
  return (
    <main
      id="draggable-container"
      className="min-h-full-height grid max-w-[100vw] grid-cols-1 gap-9 overflow-hidden p-9 lg:grid-cols-3"
    >
      <article className="space-y-4 lg:col-span-2">
        <h1 className="text-size-h2 text-cobalt font-serif font-semibold capitalize">
          à propos
        </h1>
        <p className="my-4 text-lg">
          Directrice artistique à Paris, je mets ma créativité et mon expertise
          au service des entreprises et entrepreneurs souhaitant développer une
          identité visuelle forte et cohérente. Spécialisée en communication
          360°, j’accompagne mes clients dans la conception de leur image de
          marque, du logo à la charte graphique, en passant par la direction
          artistique de leurs supports print et digitaux. Mon objectif : révéler
          l’essence de votre projet à travers des visuels uniques, impactants et
          alignés avec vos valeurs. Ensemble, donnons vie à une communication
          globale qui vous distingue et marque durablement les esprits.
        </p>
        <p className="text-cobalt mt-5 hidden font-serif text-xl font-bold italic lg:block">
          "S'il vous plait, débarrassez ma photo de tous ces stickers. Merci !"
        </p>
        <p className="hidden font-semibold lg:block">Julia CARO</p>
      </article>
      <article className="relative">
        <img
          src="/profil.webp"
          alt="me :)"
          className="size-full object-cover"
        />
        {/* <Stickers /> */}
      </article>
    </main>
  )
}

export const metadata = {
  title: "À propos – Julia CARO, directrice artistique à Paris",
  description:
    "Découvrez le parcours, la vision et l’expertise de Julia CARO, directrice artistique freelance à Paris, spécialisée en identité visuelle et communication 360°.",
  openGraph: {
    title: "À propos – Julia CARO, directrice artistique à Paris",
    description:
      "Découvrez le parcours, la vision et l’expertise de Julia CARO, directrice artistique freelance à Paris, spécialisée en identité visuelle et communication 360°.",
    images: [
      {
        url: "/profil.webp",
        width: 800,
        height: 800,
        alt: "Portrait de Julia CARO"
      }
    ]
  }
}

export default Page
