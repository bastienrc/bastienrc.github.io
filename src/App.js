import Layout from './components/Layout'
import styled from 'styled-components'
import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Header from './components/Header'

const QRCode = styled.div``

function App () {
  return (
    <Layout>
      <Header />
      <Experiences />
      <Formations />
      <Contact />
      <Competences />
      <QRCode />
    </Layout>
  )
}

export default App
