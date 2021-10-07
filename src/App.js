import styled, { createGlobalStyle } from 'styled-components'

import Experiences from './components/Experiences'
import FormationsComponent from './components/Formations'
import ContactComponent from './components/Contact'
import CompetencesComponent from './components/Competences'
import HeaderComponent from './components/Header'
import { DataIdentity, DataExperiences, DataFormations, DataCompetences } from './data/data.js'

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
        <HeaderComponent data={DataIdentity} />
        <Experiences data={DataExperiences} />
        <FormationsComponent data={DataFormations} />
        <ContactComponent data={DataIdentity} />
        <CompetencesComponent data={DataCompetences} />
        <QRCode />
      </Main>
    </>
  )
}

export default App
