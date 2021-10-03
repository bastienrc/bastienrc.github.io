import Layout from './components/Layout'
import styled from 'styled-components'
import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'

const Header = styled.div``
const Nom = styled.div``
const Info = styled.div``
const PosteRechercher = styled.div``

const QRCode = styled.div``

function App () {
  return (
    <Layout>
      <Header>
        <Nom>Sébastien Colbert</Nom>
        <Info>39 ans, Permis B, Voiture</Info>
        <PosteRechercher>Développeur Web</PosteRechercher>
      </Header>

      <Experiences />
      <Formations />
      <Contact />
      <Competences />

      <QRCode />
    </Layout>
  )
}

export default App
