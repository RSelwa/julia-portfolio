export const PROJECTS_TYPE = {
  NEWS: "news",
  SELECTED: "selected"
} as const

export const TRANSITION_DURATION = 500
export const TRANSITION_CLASSNAME = "page-transition"

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
