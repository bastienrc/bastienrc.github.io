import styled from 'styled-components'
import Networks from './Networks'

const Contact = styled.div``
const Address = styled.div``
const Phone = styled.div``
const Mail = styled.div``
const Site = styled.div``

function Contacts () {
  return (
    <Contact>
      <Address>4 Avenue Charles de Gaulle 62200 Boulogne-sur-mer</Address>
      <Phone>06 18 17 92 65</Phone>
      <Mail>colbertsebastien@gmail.com</Mail>
      <Site>sebastiencolbert.fr</Site>
      <Networks />
    </Contact>

  )
}

export default Contacts
