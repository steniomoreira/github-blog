import RemoveMarkdown from 'remove-markdown'
import { api } from '../lib/axios'
import { User } from '../types/user'
import { IssueType, PostItem, PostType } from '../types/post'

const gitHubUser = import.meta.env.VITE_GITHUB_USER
const gitHubRepo = import.meta.env.VITE_GITHUB_REPO

export async function fetchUser() {
  const { data } = await api.get<User>(`users/${gitHubUser}`)

  return {
    avatar_url: data.avatar_url,
    name: data.name,
    html_url: data.html_url,
    bio: data.bio,
    login: data.login,
    company: data.company,
    followers: data.followers,
  }
}

export async function fetchPost(number: number) {
  const { data } = await api.get<IssueType>(
    `/repos/${gitHubUser}/${gitHubRepo}/issues/${number}`,
  )

  return {
    number: data.number,
    title: data.title,
    body: data.body,
    created_at: data.created_at,
    labels: data.labels.map(({ name }) => ({ name })),
    comments: data.comments,
    html_url: data.html_url,
    user: data.user,
  }
}

export async function searchPosts(query = '') {
  const { data } = await api.get<PostType>('/search/issues', {
    params: {
      q: `repo:${gitHubUser}/${gitHubRepo} ${query}`,
    },
  })

  const items = data.items.map(
    ({ number, title, body, created_at, labels, comments }: PostItem) => ({
      number,
      title,
      created_at,
      comments,
      body: RemoveMarkdown(body),
      labels: labels.map(({ name }) => ({ name })),
    }),
  )

  return { total_count: data.total_count, items }
}
