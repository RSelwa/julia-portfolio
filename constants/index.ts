import {
  ECOLE,
  EUROCAPA,
  HYDRATE_HEROES,
  LIVING_FRENCH_RIVIERA,
  LSI,
  MADIME,
  MAINE_COCOONE,
  RALF_TECH,
  SIMON_WATCHES,
  SPOT_LUMIERE_LED,
  UNITED_STRAP
} from "@/constants/projects"

export const PROJECTS_TYPE = {
  NEWS: "news",
  SELECTED: "selected"
} as const

export const TRANSITION_DURATION = 500
export const TRANSITION_CLASSNAME = "page-transition"

export const PROJECTS = {
  LSI,
  SPOT_LUMIERE_LED,
  ECOLE,
  EUROCAPA,
  MADIME,
  RALF_TECH,
  UNITED_STRAP,
  MAINE_COCOONE,
  LIVING_FRENCH_RIVIERA,
  HYDRATE_HEROES,
  SIMON_WATCHES
} as const

// 11

export const projects = [
  {
    date: new Date("2023-01-01"),
    title: "Why is packaging important?",
    type: PROJECTS_TYPE.NEWS,
    img: "/img.avif"
  },
  {
    date: new Date("2023-01-01"),
    title: "Future Focus Vol 1: Photographer Alice Hutchison",
    type: PROJECTS_TYPE.SELECTED,
    img: "/img.avif"
  },
  {
    date: new Date("2023-01-01"),
    title: "Can Giving Away Ideas For Free Be Valuable?",
    type: PROJECTS_TYPE.NEWS,
    img: "/img.avif"
  },
  {
    date: new Date("2023-01-01"),
    title: "The Azurial Picks Up Silver At FAB",
    type: PROJECTS_TYPE.NEWS,
    img: "/img.avif"
  },
  {
    date: new Date("2023-01-01"),
    title: "Why is packaging important?",
    type: PROJECTS_TYPE.SELECTED,
    img: "/img.avif"
  },
  {
    date: new Date("2023-01-01"),
    title: "The Azurial Picks Up Silver At FAB",
    type: PROJECTS_TYPE.SELECTED,
    img: "/img.avif"
  }
]
