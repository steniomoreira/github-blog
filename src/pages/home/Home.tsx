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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub as faGitHub } from '@fortawesome/free-brands-svg-icons'

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <img src="https://placehold.co/148/071422/AFC2D4" alt="" />

        <ProfileWrapper>
          <h2>Stenio Moreira</h2>

          <a href="#">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGitHub} />
              steniomoreira
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              OSF Digital
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
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
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
        <Post>
          <span>Há 1 dia</span>
          <h2>JavaScript data types and data structures</h2>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Post>
      </PostContent>
    </HomeContainer>
  )
}
