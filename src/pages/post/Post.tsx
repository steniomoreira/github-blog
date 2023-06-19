import { useCallback, useEffect, useState } from 'react'
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
import { IssueType } from '../../types/post'
import { fetchPost } from '../../services/githubServices'

export function Post() {
  const [post, setPost] = useState<IssueType>({} as IssueType)
  const issueNumber = useParams().number

  const getPost = useCallback(async (number: number) => {
    fetchPost(number).then((data) => {
      setPost(data)
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

      <Article linkTarget="_blank">{post.body}</Article>
    </PostContainer>
  )
}
