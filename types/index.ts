export type ImgUrl = string

export type Project = {
  id: string
  tier: "1" | "2" | "3"
  date: Date
  title: string
  description: string
  link: string
  images: {
    cover: ImgUrl
  }
}
