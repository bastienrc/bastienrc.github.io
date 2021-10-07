import styled from 'styled-components'
import NetworksComponent from './Networks'

const Contact = styled.div`
  margin: 10px 0;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 2px solid black;
  color: #060;
  margin: 3rem 0 1rem 0;
`

const Address = styled.div``

const Mail = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`

const Site = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`

function ContactComponent ({ data }) {
  return (
    <Contact>
      <Title>Contact</Title>
      <Address>{data.address}</Address>
      <Address>{data.cp} {data.ville}</Address>
      <Mail href={'mailto:' + data.mail}>{data.mail}</Mail>
      <Site href={'https://' + data.site}>{data.site}</Site>
      <NetworksComponent data={data.networks} />
    </Contact>
  )
}

export default ContactComponent
