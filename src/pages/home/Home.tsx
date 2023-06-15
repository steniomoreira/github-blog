import { HomeContainer, Profile, ProfileWrapper } from './styles'
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
    </HomeContainer>
  )
}
