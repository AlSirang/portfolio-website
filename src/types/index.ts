export type ArchiveProject = {
  year: number
  title: string
  tools: string[]
  website?: { display: string; url: string }
}

export type Service = {
  title: string
  description: string
  tools: string[]
  href: string
}
