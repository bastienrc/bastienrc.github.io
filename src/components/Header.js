import styled from 'styled-components'
import '@fontsource/fira-code'

const Fullname = styled.div`
  font-size: 1.8rem;
`

const Info = styled.div`
  font-size: 0.8rem;
`

const PosteSearch = styled.div`
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 2rem;
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
