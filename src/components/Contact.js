import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'
import Networks from './Networks'

const Link = styled.a`
  transition: 0.35s;
  text-decoration: none;
  color: var(--main-color);
`

const P = styled.p`
  margin: 0.2em 0
`

function Contact ({ data }) {
  return (
    <Section>
      <Title>Contact</Title>
      <P>{data.address}</P>
      <P>{data.cp} {data.ville}</P>
      <P><Link href={'mailto:' + data.mail}>{data.mail}</Link></P>
      <P><Link href={'https://' + data.site}>{data.site}</Link></P>
      <Networks data={data.networks} />
    </Section>
  )
}

export default Contact
