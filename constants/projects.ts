import { COMPETENCES, LOGICIELS } from "@/constants/competences"
import { Project } from "@/types"

export const LSI: Project = {
  id: "lsi",
  tier: "1",
  title: "LSI",
  date: new Date("2023-01-01"),
  description:
    "Nous avons conçu une identité digitale complète pour valoriser leur expertise en investissement locatif clé en main. Chaque étape, du graphisme au contenu vidéo, a été soigneusement définie pour optimiser la compréhension de l’offre, inspirer confiance et garantir une présence cohérente sur le web.",
  footerDescription:
    "Les Secrets de l’Immo, a fait appel à notre studio la création de son identité digitale : Un univers visuel décliné sur le site et les contenus vidéos, pour accompagner efficacement chaque étape du parcours client.",
  link: { url: "https://lessecretsdelimmo.fr/", label: "Voir le site" },
  skills: [
    COMPETENCES.WEB_DESIGN,
    COMPETENCES.GRAPHISME,
    COMPETENCES.DIRECTION_ARTISTIQUE,
    COMPETENCES.CAPTATION_VIDEO,
    COMPETENCES.MONTAGE_VIDEO,
    COMPETENCES.HABILLAGE_VIDEO
  ],
  logiciels: [LOGICIELS.ILLUSTRATOR, LOGICIELS.PHOTOSHOP],
  images: {
    cover: "/img.avif"
  }
}

export const SPOT_LUMIERE_LED: Project = {
  tier: "1",
  id: "spot-lumiere-led",
  title: "Sport Lumière LED",
  date: new Date("2023-01-01"),

  description:
    "SPOT LUMIÈRE LED, marque française dédiée à l’éclairage technique et architectural, a fait appel à notre studio pour repenser l’ensemble de son univers de marque : identité visuelle, site internet, feed Instagram et captation vidéo.",
  link: { url: "https://www.spot-lumiere-led.com/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [],
  logiciels: [],
  footerDescription:
    "SPOT lumière led, nous a confié la création de son identité de marque, son site internet, son feed Instagram ainsi que la captation vidéo de ses produits en situation"
}

export const RALF_TECH: Project = {
  id: "ralf-tech",
  tier: "1",
  title: "Ralf Tech",
  date: new Date("2023-01-01"),
  description:
    "RALF TECH, marque indépendante spécialisée dans les montres de plongée, a fait appel à notre studio pour repenser l’ensemble de son dispositif digital : design UX/UI, site internet responsive et accompagnement sur l’architecture du contenu.",
  link: { url: "https://www.spot-lumiere-led.com/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [COMPETENCES.WEB_DESIGN, COMPETENCES.UI_UX],
  logiciels: [LOGICIELS.FIGMA, LOGICIELS.PHOTOSHOP],
  footerDescription:
    "RALF TECH, maison horlogère née dans l’univers de la plongée professionnelle, nous a confié la refonte de son site internet, avec un travail complet sur le webdesign UX/UI et l’adaptation responsive."
}

export const MADIME: Project = {
  id: "madime",
  tier: "2",
  title: "Madime",
  date: new Date("2023-01-01"),
  description:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque. De la conception du site web à la gestion du contenu visuel, chaque détail a été pensé pour offrir une expérience fluide et immersive.",
  link: { url: "https://www.madime.com/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [COMPETENCES.DIRECTION_ARTISTIQUE, COMPETENCES.GRAPHISME],
  logiciels: [LOGICIELS.PHOTOSHOP],
  footerDescription:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque."
}

export const ECOLE: Project = {
  id: "ecole",
  tier: "3",
  title: "Ecole",
  date: new Date("2023-01-01"),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: { url: "https://lessecretsdelimmo.fr/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [],
  logiciels: [],
  footerDescription: ""
}

export const UNITED_STRAP: Project = {
  id: "united-strap",
  tier: "3",
  title: "United Strap",
  date: new Date("2023-01-01"),
  description:
    "Nous avons travaillé le set design et la direction artistique dans une approche centrée sur le produit, en intégrant des éléments de paper art pour souligner l’élégance et le raffinement de chaque bracelet.",
  link: { url: "https://unitedstrap.fr/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [
    COMPETENCES.DIRECTION_ARTISTIQUE,
    COMPETENCES.DESIGN,
    COMPETENCES.PHOTOGRAPHIE
  ],
  logiciels: [LOGICIELS.FIGMA, LOGICIELS.PHOTOSHOP],
  footerDescription:
    "UNITED STRAP, marque de bracelets de montre , nous a sollicité notre studio pour concevoir le set design et la direction artistique de sa nouvelle identité visuelle."
}

export const LOU_ET_ROSE: Project = {
  id: "lou-et-rose",
  tier: "3",
  title: "LOU_ET_ROSE",
  date: new Date("2023-01-01"),
  description:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque. De la conception du site web à la gestion du contenu visuel, chaque détail a été pensé pour offrir une expérience fluide et immersive.",
  images: {
    cover: "/img.avif"
  },
  skills: [COMPETENCES.WEB_DESIGN, COMPETENCES.UI_UX],
  logiciels: [LOGICIELS.FIGMA, LOGICIELS.PHOTOSHOP],
  footerDescription:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque."
}

export const LGI: Project = {
  id: "lgi",
  tier: "2",
  title: "LGI",
  date: new Date("2023-01-01"),
  description:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque. De la conception du site web à la gestion du contenu visuel, chaque détail a été pensé pour offrir une expérience fluide et immersive.",
  images: {
    cover: "/img.avif"
  },
  skills: [
    COMPETENCES.WEB_DESIGN,
    COMPETENCES.UI_UX,
    COMPETENCES.CAPTATION_VIDEO
  ],
  logiciels: [LOGICIELS.FIGMA, LOGICIELS.PHOTOSHOP, LOGICIELS.PREMIERE_PRO],
  footerDescription:
    "Chez Spot Lumière LED, nous avons conçu une identité digitale complète pour mettre en valeur l’univers de la marque."
}

export const SIMON_WATCHES: Project = {
  id: "simon-watches",
  tier: "2",

  title: "Simon watches",
  date: new Date("2023-01-01"),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: { url: "https://lessecretsdelimmo.fr/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [],
  logiciels: [],
  footerDescription: ""
}

export const DETOURS: Project = {
  id: "detours",
  tier: "1",
  title: "Detours",
  date: new Date("2023-01-01"),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: { url: "https://lessecretsdelimmo.fr/", label: "Voir le site" },
  images: {
    cover: "/img.avif"
  },
  skills: [],
  logiciels: [],
  footerDescription: ""
}
