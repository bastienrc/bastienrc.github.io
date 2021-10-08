import styled from 'styled-components'
import { Section } from './GlobalStyle'
import qrCodeImg from '../qr-code/sebastiencolbert.fr.svg'

const QrcLink = styled.a`
  margin: 1rem 0;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
`

function QRCode () {
  return (
    <Section>
      <QrcLink href='https://sebastiencolbert.fr'>
        <img src={qrCodeImg} alt='QR Code vers sebastiencolbert.fr' />
      </QrcLink>
    </Section>
  )
}

export default QRCode
