export type PostItem = {
  number: number
  title: string
  body: string
  created_at: string
  labels: { name: string }[]
  comments: number
}

export type PostType = {
  total_count: number
  items: PostItem[]
}
