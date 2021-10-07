import styled from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'

import Experiences from './components/Experiences'
import FormationsComponent from './components/Formations'
import ContactComponent from './components/Contact'
import CompetencesComponent from './components/Competences'
import HeaderComponent from './components/Header'
import QRCode from './components/QRCode'
import { DataIdentity, DataExperiences, DataFormations, DataCompetences } from './data/data.js'

const Main = styled.main`
  margin: 1em 0;

  @media (min-width: 800px) {
    margin: 3rem auto;
    padding: 3rem;
    width: 80%;
    height: 100%;
    border: solid #333 3px;
    box-shadow: 4px 4px 8px 2px #000000;
    background: var(--bg-main-color);
  }
`

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
