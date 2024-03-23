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