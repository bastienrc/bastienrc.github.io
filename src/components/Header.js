import styled from 'styled-components'
import '@fontsource/fira-code'

const HeaderContainer = styled.header`
  margin: 1em
`

const Fullname = styled.div`
  font-size: 1.2em;
`

const Info = styled.div`
  font-size: 0.8em;
  margin: 0.2rem 0 1rem 0;
`

const PosteSearch = styled.div`
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  margin: 1.2em 0 1.8em 0;
  font-size: 2.2em;
  color: var(--title-color);
`

function Header ({ data }) {
  return (
    <HeaderContainer>
      <Fullname>{data.fullname}</Fullname>
      <Info>{data.info}</Info>
      <PosteSearch>{data.posteSearch}</PosteSearch>
    </HeaderContainer>
  )
}

export default Header
