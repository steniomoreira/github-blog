import { Link } from 'react-router-dom'
import { Article, Header, PostContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Post() {
  return (
    <PostContainer>
      <Header>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <a href="#" target="_blank">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>

        <h1>JavaScript data types and data structures</h1>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            steniomoreira
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} /> 5 comentários
          </li>
        </ul>
      </Header>

      <Article># Simba is my dog!</Article>
    </PostContainer>
  )
}
