/* eslint-disable react/no-unescaped-entities */
import { Stickers } from "@/components/stickers"

const Page = () => {
  return (
    <main
      id="draggable-container"
      className="min-h-full-height max-w-[100vw] grid grid-cols-1 gap-9 overflow-hidden p-9 lg:grid-cols-3"
    >
      <article className="space-y-4 lg:col-span-2">
        <h1 className="text-size-h2 text-cobalt font-serif font-semibold capitalize">
          à propos
        </h1>
        <p className="my-4 text-lg">
          Je suis développeur web basé à Paris, spécialisé dans le développement
          front-end et back-end avec Next.js, WordPress, et SEO.
          <br />
          Après avoir passé 3 ans au sein de la startup FLIM, j’ai eu l’occasion
          de travailler sur une multitude de projets innovants. Ce fut un
          terrain de jeu idéal pour affiner mes compétences en développement,
          gérer des projets de A à Z, et surtout, collaborer avec des équipes
          multidisciplinaires pour livrer des produits tech de qualité.
          <br />
          Mon rôle m’a permis de toucher à tout, du front-end au back-end, en
          passant par l’intégration SEO pour améliorer la visibilité des sites.
          Aujourd’hui, je suis focalisé sur l’accompagnement de mes clients dans
          la création de sites WordPress sur-mesure, l’optimisation de la
          performance web, et la mise en place de stratégies SEO pour booster
          leur visibilité. <br />
          Que ce soit pour des sites vitrine, des plateformes e-commerce ou des
          applications web, je mets un point d’honneur à offrir des solutions
          efficaces, créatives et adaptées aux besoins de chaque projet. <br />
          Toujours en quête de nouveaux défis, je m’intéresse de près aux
          dernières innovations, particulièrement dans l’écosystème
          React/Next.js.
        </p>
        <p className="text-cobalt mt-5 hidden text-xl font-bold italic lg:block font-serif ">
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
        <Stickers />
      </article>
    </main>
  )
}

export default Page
