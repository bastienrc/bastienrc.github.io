import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'
import NetworksComponent from './Networks'

const Link = styled.a`
  text-decoration: none;
  color: black;
`

const P = styled.p`
  margin: 0.2em 0
`

function ContactComponent ({ data }) {
  return (
    <Section>
      <Title>Contact</Title>
      <P>{data.address}</P>
      <P>{data.cp} {data.ville}</P>
      <P><Link href={'mailto:' + data.mail}>{data.mail}</Link></P>
      <P><Link href={'https://' + data.site}>{data.site}</Link></P>
      <NetworksComponent data={data.networks} />
    </Section>
  )
}

export default ContactComponent
