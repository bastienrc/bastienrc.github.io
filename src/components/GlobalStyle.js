import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg-body-color: #030;
    --bg-main-color: #FFF;
    --title-color: #060;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (min-width: 800px) {
    body {
      background: #DDDDDD; /* Au cas ou les dégradés ne fonctionnent pas*/
      background: radial-gradient(ellipse, #DDDDDD, var(--bg-body-color))
    }
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 2px solid black;
  color: #060;
  margin: 3rem 0 1rem 0;
`

export const Section = styled.section`
  margin: 1em
`
