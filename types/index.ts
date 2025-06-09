export type ImgUrl = string

export type Project = {
  id: string
  tier: "1" | "2" | "3"
  date: Date
  title: string
  description: string
  link?: { url: string; label: string }
  skills: string[]
  logiciels: string[]
  footerDescription: string
  images: {
    cover: ImgUrl
  }
}
