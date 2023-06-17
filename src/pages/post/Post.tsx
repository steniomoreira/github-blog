import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Article, Header, PostContainer } from './styles'

type User = {
  login: string
}

type PostItem = {
  number: number
  title: string
  body: string
  created_at: string
  labels: { name: string }[]
  comments: number
  html_url: string
  user: User
}

export function Post() {
  const [post, setPost] = useState<PostItem>({} as PostItem)
  const issueNumber = useParams().number

  const getPost = useCallback(async (number: number) => {
    const { data } = await api.get<PostItem>(
      `/repos/steniomoreira/github-blog/issues/${number}`,
    )

    setPost({
      number: data.number,
      title: data.title,
      body: data.body,
      created_at: data.created_at,
      labels: data.labels.map((label) => ({
        name: label.name,
      })),
      comments: data.comments,
      html_url: data.html_url,
      user: data.user,
    })
  }, [])

  useEffect(() => {
    getPost(Number(issueNumber))
  }, [getPost, issueNumber])

  return (
    <PostContainer>
      <Header>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <a href={post.html_url} target="_blank" rel="noreferrer">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>

        <h1>{post.title}</h1>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {post.user?.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.created_at &&
              formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} /> {post.comments} comentário
            {post.comments > 1 ? 's' : ''}
          </li>
        </ul>
      </Header>

      <Article>{post.body}</Article>
    </PostContainer>
  )
}
