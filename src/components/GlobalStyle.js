import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg-body-color: ${props => props.theme.bgBodyColor};
    --bg-main-color: ${props => props.theme.bgMainColor};
    --main-color: ${props => props.theme.mainColor};
    --title-color: ${props => props.theme.titleColor};
  }

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    transition: 0.35s;
    color: var(--main-color);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--bg-main-color);;
  }

  @media (min-width: 1000px) {
    body {
      transition: 0.35s;
      background: #DDDDDD; /* Au cas ou les dégradés ne fonctionnent pas*/
      background: radial-gradient(ellipse, #DDDDDD, var(--bg-body-color))
    }
  }
`

export const Title = styled.h2`
  transition: 0.35s;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 600;
  padding: 0 0 0.6em 0;
  border-bottom: 0.11em solid var(--main-color);
  color: var(--title-color);
  margin: 3em 0 1em 0;
`

export const Section = styled.section`
  margin: 1em
`
