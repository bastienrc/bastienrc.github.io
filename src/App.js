import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Header from './components/Header'
import { DataExperiences } from './data/data.js'

const AppContainer = styled.body`
  margin: 0;
  padding: 0.5rem;
  background: #DDDDDD; /* Au cas ou les dégradés ne fonctionnent pas*/
  background: radial-gradient(ellipse, #DDDDDD, #333333);
`

const Main = styled.main`
  margin: 3rem auto;
  padding: 3rem;
  width: 80%;
  height: 100%;
  border: solid #333 3px;
  box-shadow: 4px 4px 8px 2px #000000;
  background: #FFF;
`

const QRCode = styled.div``

function App () {
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Main>
          <Header />
          <Experiences data={DataExperiences} />
          <Formations />
          <Contact />
          <Competences />
          <QRCode />
        </Main>
      </AppContainer>
    </>
  )
}

export default App
