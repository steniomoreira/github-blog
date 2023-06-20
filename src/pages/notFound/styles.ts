import styled from 'styled-components'

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;

  max-width: 896px;
  height: 100%;

  margin: -85px auto 50px;
  padding: 0 1rem;
`

export const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 350px;
  padding: 2rem;

  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 8rem;
    font-weight: 700;
    color: ${(props) => props.theme.baseLabel};
  }

  p {
    font-size: 1.2rem;
    text-align: center;
  }

  a {
    margin-top: 1rem;
  }
`
