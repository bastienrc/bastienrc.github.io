import styled from 'styled-components'
import { Section } from './GlobalStyle'
import qrCodeImgDark from '../qr-code/dark-sebastiencolbert.fr.svg'
import qrCodeImgLight from '../qr-code/light-sebastiencolbert.fr.svg'

const QrcLink = styled.a`
  transition: 0.35s;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
  }
`

function QRCode ({ theme }) {
  return (
    <Section>
      <QrcLink href='https://sebastiencolbert.fr'>
        {theme
          ? <img src={qrCodeImgDark} alt='QR Code vers sebastiencolbert.fr' />
          : <img src={qrCodeImgLight} alt='QR Code vers sebastiencolbert.fr' />}
      </QrcLink>
    </Section>
  )
}

export default QRCode
