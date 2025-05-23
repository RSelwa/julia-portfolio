export type ImgUrl = string

export type Project = {
  date: Date
  name: string
  description: string
  link: string
  images: {
    cover: ImgUrl
  }
}
