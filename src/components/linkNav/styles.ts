import styled from 'styled-components'

export const LinkContainer = styled.div`
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
`
