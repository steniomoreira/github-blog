import {
  Article,
  HomeContainer,
  Input,
  Label,
  Post,
  PostContent,
  Profile,
  ProfileWrapper,
  SearchPost,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub as faGitHub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type User = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

type PostItem = {
  number: number
  title: string
  body: string
  created_at: string
  labels: { name: string }[]
}

type PostType = {
  total_count: number
  items: PostItem[]
}

type SearchFormInputs = {
  query: string
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<PostType>({} as PostType)

  async function getUse() {
    const { data } = await api.get<User>('users/steniomoreira')

    setUser({
      avatar_url: data.avatar_url,
      name: data.name,
      html_url: data.html_url,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
    })
  }

  const searchPosts = useCallback(async (query?: string) => {
    const queryParams = query ? `${query}%20` : ''

    const { data } = await api.get<PostType>(
      `/search/issues?q=${queryParams}repo:steniomoreira/github-blog`,
    )

    const items = data.items.map((post: PostItem) => ({
      number: post.number,
      title: post.title,
      body: post.body,
      created_at: post.created_at,
      labels: post.labels.map((label) => ({
        name: label.name,
      })),
    }))

    setPosts({ total_count: data.total_count, items })
  }, [])

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>()

  async function handleSearchPost(data: SearchFormInputs) {
    searchPosts(data.query)
  }

  useEffect(() => {
    getUse()
    searchPosts()
  }, [searchPosts])

  return (
    <HomeContainer>
      <Profile>
        <img src={user.avatar_url} alt="" />

        <ProfileWrapper>
          <h2>{user.name}</h2>

          <a href={user.html_url} target="_blank" rel="noreferrer">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>

          <p>{user.bio}</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGitHub} />
              {user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} /> {user.followers} seguidores
            </li>
          </ul>
        </ProfileWrapper>
      </Profile>

      <SearchPost onSubmit={handleSubmit(handleSearchPost)}>
        <span>
          {posts.total_count}{' '}
          {`publica${posts.total_count > 1 ? 'ções' : 'ção'}`}
        </span>
        <Label htmlFor="published">Publicações</Label>
        <Input
          id="published"
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </SearchPost>

      <PostContent>
        {posts.items?.map((post) => (
          <Link key={post.number} to="/post">
            <Post>
              <span>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
              <h2>{post.title}</h2>
              <Article>{post.body.substring(0, 138).concat('...')}</Article>
            </Post>
          </Link>
        ))}
      </PostContent>
    </HomeContainer>
  )
}
