import styled from 'styled-components'
import { devices } from '../../constants/mediaQueries'

export const HomeContainer = styled.main`
  max-width: 896px;
  height: 100%;
  margin: -85px auto 50px;
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

  padding: 2rem;
  width: 100%;

  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;

    border-radius: 8px;
  }

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 8px;

    position: absolute;
    top: 0;
    right: 0;

    :focus {
      box-shadow: none;
    }

    ::after {
      content: '';
      width: 0;
      height: 1px;
      position: absolute;
      bottom: -2px;
      background: ${(props) => props.theme.blue};
    }

    :hover {
      ::after {
        width: 100%;
      }
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

  @media ${devices.mobileM} {
    ul {
      flex-direction: column;
    }
  }

  @media ${devices.mobileL} {
    h2,
    p {
      text-align: center;
    }

    a {
      top: -1.2rem;
      width: 100%;
      text-align: center;
      display: block;
    }

    ul li {
      font-size: 0.75rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      svg {
        margin: 0;
      }
    }
  }
`

export const SearchPost = styled.form`
  position: relative;
  margin-top: 4.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    position: absolute;
    top: 0;
    right: 0;

    color: ${(props) => props.theme.baseSpan};
    font-size: 0.875rem;
  }
`

export const Label = styled.label`
  color: ${(props) => props.theme.baseSubTitle};
  font-size: 1.125rem;
  font-weight: 700;
  width: 100%;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};
  border: 1px solid ${(props) => props.theme.baseBorder};
  border-radius: 6px;

  width: 100%;
  height: 50px;

  padding: 0.75rem 1rem;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  input:-moz-placeholder {
    color: ${(props) => props.theme.baseLabel};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PostContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  margin-top: 3rem;
`

export const Post = styled.div`
  position: relative;

  max-width: 416px;
  height: 260px;
  padding: 2rem;

  background-color: ${(props) => props.theme.basePost};
  border: 2px solid ${(props) => props.theme.basePost};
  border-radius: 10px;

  :hover {
    border: 2px solid ${(props) => props.theme.baseLabel};
  }

  span {
    position: absolute;
    top: 2rem;
    right: 2rem;

    color: ${(props) => props.theme.baseSpan};
    font-size: 0.875rem;

    ::first-letter {
      text-transform: capitalize;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    max-width: 283px;

    color: ${(props) => props.theme.baseTitle};
  }

  p {
    margin-top: 1.25rem;
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media ${devices.mobileL} {
    span {
      margin-top: -1rem;
    }

    h2 {
      margin-top: 0.5rem;
      max-width: 100%;
    }
  }
`
