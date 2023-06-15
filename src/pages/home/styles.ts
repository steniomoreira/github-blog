import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1440px;
  height: 100vh;
  margin: -85px auto 0;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Profile = styled.div`
  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 2rem;

  max-width: 864px;
  padding: 2rem;

  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;

  img {
    background-color: ${(props) => props.theme.baseBackground};
    width: 148px;
    height: 148px;

    border-radius: 8px;
  }
`
export const ProfileWrapper = styled.div`
  position: relative;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 8px;

    position: absolute;
    top: 0;
    right: 0;

    :focus {
      display: none;
    }
  }

  p {
    font-size: 1rem;
    line-height: 160%;

    margin-top: 0.5rem;
  }

  ul {
    margin-top: 1.5rem;

    display: flex;
    gap: 24px;

    li {
      svg {
        width: 18px;
        height: 18px;

        margin-right: 0.5rem;
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }
`
