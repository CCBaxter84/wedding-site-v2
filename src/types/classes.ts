import { Titles, ApiPaths } from '@/types/enums'

export class StoryPost {
  title: string
  text: string
  url: string
  description: string
  
  constructor(title: string, text: string, url: string, description: string) {
    this.title = title,
    this.text = text,
    this.url = url,
    this.description = description
  }
}

export class RouteLink {
  to: ApiPaths
  name: Titles

  constructor(to: ApiPaths, name: Titles) {
    this.to = to
    this.name = name
  }
}