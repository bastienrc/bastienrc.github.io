import styled, { createGlobalStyle } from 'styled-components'

import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Header from './components/Header'
import { DataExperiences } from './data/data.js'

const GlobalStyle = createGlobalStyle`
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
      background: radial-gradient(ellipse, #DDDDDD, #003300)
    }
  }
`

const Main = styled.main`
  margin: 1rem;

  @media (min-width: 800px) {
    margin: 3rem auto;
    padding: 3rem;
    width: 80%;
    height: 100%;
    border: solid #333 3px;
    box-shadow: 4px 4px 8px 2px #000000;
    background: #FFF;
  }
`

const QRCode = styled.div``

function App () {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Experiences data={DataExperiences} />
        <Formations />
        <Contact />
        <Competences />
        <QRCode />
      </Main>
    </>
  )
}

export default App
