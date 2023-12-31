import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { faGithub as faGitHub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  HomeContainer,
  Input,
  Label,
  Post,
  PostContent,
  Profile,
  ProfileWrapper,
  SearchPost,
} from './styles'
import { User } from '../../types/user'
import { PostType } from '../../types/post'
import { fetchUser, searchPosts } from '../../services/githubServices'
import { LinkNav } from '../../components/linkNav/LinkNav'

type SearchFormInputs = {
  query: string
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<PostType>({} as PostType)

  async function getUse() {
    fetchUser().then((data) => {
      setUser(data)
    })
  }
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>()

  async function handleSearchPost(data?: SearchFormInputs) {
    searchPosts(data?.query).then((data) => {
      setPosts(data)
    })
  }

  useEffect(() => {
    getUse()
    handleSearchPost()
  }, [])

  return (
    <HomeContainer>
      <Profile>
        <img src={user.avatar_url} alt="" />

        <ProfileWrapper>
          <h2>{user.name}</h2>

          <LinkNav to={user.html_url}>
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkNav>

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
          <Link key={post.number} to={`/post/${post.number}`}>
            <Post>
              <span>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Post>
          </Link>
        ))}
      </PostContent>
    </HomeContainer>
  )
}
