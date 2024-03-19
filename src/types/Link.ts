import { Albums } from "./enums"

export type Link = {
  id: string,
  coll: "Link",
  ts: string,
  url: string,
  description: string,
  album: Albums,
  thumbnail: string
}