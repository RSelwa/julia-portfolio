import {
  DETOURS,
  ECOLE,
  LGI,
  LOU_ET_ROSE,
  LSI,
  MADIME,
  RALF_TECH,
  SIMON_WATCHES,
  SPOT_LUMIERE_LED,
  UNITED_STRAP
} from "@/constants/projects"

export const PROJECTS_TYPE = {
  NEWS: "news",
  SELECTED: "selected"
} as const

export const CONTACT_EMAIL = "julia.caro30pro30@gmail.com"
export const TRANSITION_DURATION = 500
export const TRANSITION_CLASSNAME = "page-transition"

export const PROJECTS = {
  LSI, //? tier1
  SPOT_LUMIERE_LED, //? tier1
  DETOURS, //? tier1
  RALF_TECH, //? tier1
  MADIME, //# tier2
  SIMON_WATCHES, //# tier2
  LGI, //# tier2
  ECOLE, //! tier3
  UNITED_STRAP, //! tier3
  LOU_ET_ROSE //! tier3
} as const

export const selectedProjects = Object.values(PROJECTS).filter(
  (project) => project.tier === "1"
)
