import styled from 'styled-components'

const Container = styled.div``

const Nom = styled.div`
  font-size: 3rem;
`

const Info = styled.div`
  font-size: 1.6rem;
`

const PosteRechercher = styled.div`
  font-size: 6rem;
  color: #060
`

function Header () {
  return (
    <Container>
      <Nom>Sébastien Colbert</Nom>
      <Info>39 ans, Permis B, Voiture</Info>
      <PosteRechercher>Développeur Web</PosteRechercher>
    </Container>
  )
}

export default Header
