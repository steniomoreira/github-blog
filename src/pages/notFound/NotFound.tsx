import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkNav } from '../../components/linkNav/LinkNav'
import { Error404Container, NotFoundContainer } from './styles'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export function NotFound() {
  return (
    <NotFoundContainer>
      <Error404Container>
        <h1>404</h1>

        <p>Ooops! Página não encontrada</p>

        <LinkNav to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Home Page
        </LinkNav>
      </Error404Container>
    </NotFoundContainer>
  )
}
