import styled from 'styled-components'
import Networks from './Networks'

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

function Contact () {
  return (
    <>
      <Title>Contact</Title>
      <Address>4 Avenue Charles de Gaulle</Address>
      <Address>62200 Boulogne-sur-mer</Address>
      <Mail href='mailto:colbertsebastien@gmail.com'>colbertsebastien@gmail.com</Mail>
      <Site>sebastiencolbert.fr</Site>
      <Networks />
    </>

  )
}

export default Contact
