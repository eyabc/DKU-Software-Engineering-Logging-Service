export type ContentLink = {
  self: string
  git: string
  html: string
}

export type Content = {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content?: string
  encoding?: string
  _links: ContentLink
}

export interface ContentVO {
  user: string
  repo: string
  path?: string
  sha?: string
}