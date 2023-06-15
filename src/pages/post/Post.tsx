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

      <Article>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </Article>
    </PostContainer>
  )
}
