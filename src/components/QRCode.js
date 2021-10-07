import qrCodeImg from '../qr-code/sebastiencolbert.fr.svg'

function QRCode () {
  return (
    <div>
      <a href='https://sebastiencolbert.fr'>
        <img src={qrCodeImg} alt='QR Code vers sebastiencolbert.fr' />
      </a>
    </div>
  )
}

export default QRCode
