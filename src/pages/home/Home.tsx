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
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub as faGitHub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

type User = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)

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

  useEffect(() => {
    getUse()
  }, [])

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

      <SearchPost>
        <span>6 publicações</span>
        <Label htmlFor="published">Publicações</Label>
        <Input id="published" type="text" placeholder="Buscar conteúdo" />
      </SearchPost>

      <PostContent>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
        <Link to="/post">
          <Post>
            <span>Há 1 dia</span>
            <h2>JavaScript data types and data structures</h2>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </Post>
        </Link>
      </PostContent>
    </HomeContainer>
  )
}
