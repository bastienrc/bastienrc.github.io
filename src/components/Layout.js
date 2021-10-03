import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

const Container = styled.div``

const Main = styled.main`
  margin: 3rem auto;
  width: 80%;
  height: 100%;
  border: solid #333 3px;
  box-shadow: 4px 4px 8px 2px #000000;
`

function Layout ({ pageTitle, children }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <title>CV-Online de Sébastien Colbert</title>
        <Main>
          {children}
        </Main>
      </Container>
    </>
  )
}

export default Layout
