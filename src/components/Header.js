import styled from 'styled-components'
import '@fontsource/fira-code'

const Fullname = styled.div`
  font-size: 1.8rem;
`

const Info = styled.div`
  font-size: 0.8rem;
  margin: 0.2rem 0 1rem 0;
`

const PosteSearch = styled.div`
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  margin: 2rem 0;
  font-size: 3rem;
  color: #060
`

function Header () {
  return (
    <>
      <Fullname>Sébastien Colbert</Fullname>
      <Info>39 ans, Permis B, Voiture</Info>
      <PosteSearch>Développeur Web</PosteSearch>
    </>
  )
}

export default Header
