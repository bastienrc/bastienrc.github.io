import styled from 'styled-components'
import qrCodeImg from '../qr-code/sebastiencolbert.fr.svg'

const QRCodeStyle = styled.a`

`
function QRCode () {
  return (
    <QRCodeStyle href='https://sebastiencolbert.fr'>
      <img src={qrCodeImg} alt='QR Code vers sebastiencolbert.fr' />
    </QRCodeStyle>
  )
}

export default QRCode
