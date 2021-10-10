import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import { darkTheme, lightTheme } from './components/themes'

// Import components
import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Header from './components/Header'
import QRCode from './components/QRCode'
import Darkmode from './components/Darkmode'

// import datas
import { DataIdentity, DataExperiences, DataFormations, DataCompetences } from './data/data.js'

const Main = styled.main`
  position: relative;
  margin: 1em 0;

  @media (min-width: 800px) {
    width: 80%;
    margin: 2rem auto;
    padding: 3rem;
    border: solid #333 3px;
    box-shadow: 4px 4px 8px 2px #000000;
    background: var(--bg-main-color);
  }
`

const Container = styled.div`
  @media (min-width: 800px) {
    display: flex;
  }
`

const Col1 = styled.div`
  @media (min-width: 800px) {
    width: calc(100% / 3 * 2);
  }
`

const Col2 = styled.div`
  @media (min-width: 800px) {
    width: calc(100% / 3);
  }
`

function App () {
  const [isDarkTheme, toggleTheme] = useState(false)

  const action = () => {
    toggleTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Main>
        <Darkmode action={action} theme={isDarkTheme} />
        <Header data={DataIdentity} />
        <Container>
          <Col1>
            <Experiences data={DataExperiences} />
            <Formations data={DataFormations} />
          </Col1>
          <Col2>
            <Contact data={DataIdentity} />
            <Competences data={DataCompetences} />
            <QRCode theme={isDarkTheme} />
          </Col2>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
