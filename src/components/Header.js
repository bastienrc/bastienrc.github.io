import styled from 'styled-components'
import '@fontsource/fira-code'

const Header = styled.div`
  margin: 1em
`

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
  color: var(--title-color);
`

function HeaderComponent ({ data }) {
  return (
    <Header>
      <Fullname>{data.fullname}</Fullname>
      <Info>{data.info}</Info>
      <PosteSearch>{data.posteSearch}</PosteSearch>
    </Header>
  )
}

export default HeaderComponent
