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

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

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

export const SearchPost = styled.div`
  position: relative;
  margin-top: 4.5rem;

  width: 100%;
  max-width: 864px;

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
`
