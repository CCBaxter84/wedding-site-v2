export class Post {
  title: string
  text: string
  url: string
  desc: string
  
  constructor(title: string, text: string, url: string, desc: string) {
    this.title = title,
    this.text = text,
    this.url = url,
    this.desc = desc
  }
}