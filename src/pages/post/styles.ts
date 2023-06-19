import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 896px;
  height: 100%;
  margin: -85px auto 50px;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Header = styled.header`
  width: 100%;
  padding: 2rem;

  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    a {
      position: relative;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.75rem;

      display: flex;
      align-items: center;
      gap: 8px;

      :focus {
        display: none;
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
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.25rem;
  }

  ul {
    margin-top: 0.5rem;

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

export const Article = styled(ReactMarkdown)`
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    list-style: inherit;
    margin-left: 1.5rem;
  }

  img {
    max-width: 100%;
  }
`
