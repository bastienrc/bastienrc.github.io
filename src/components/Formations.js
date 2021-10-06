import styled from 'styled-components'

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 2px solid black;
  color: #060;
  margin: 1rem 0;
`

const Formation = styled.div`
  display: flex;
  margin: 1rem 0;
`

const Year = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 80px;
  height: 80px;
  text-align: center;
  color: white;
  border-radius: 50%;
  font-size: 1.4rem;
`

const Info = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1rem;
  }
  margin: 15px 0 0 5px;
`

function Formations () {
  return (
    <>
      <Title>Formation</Title>
      <Formation>
        <Year>2020</Year>
        <Info>
          <p>Titre professionnel "Développeur Web et Web mobile"</p>
          <p>Simplon Boulogne-sur-mer</p>
        </Info>
      </Formation>
      <Formation>
        <Year>2020</Year>
        <Info>
          <p>Titre professionnel "Développeur Web et Web mobile"</p>
          <p>Simplon Boulogne-sur-mer</p>
        </Info>
      </Formation>
      <Formation>
        <Year>2020</Year>
        <Info>
          <p>Titre professionnel "Développeur Web et Web mobile"</p>
          <p>Simplon Boulogne-sur-mer</p>
        </Info>
      </Formation>
    </>
  )
}

export default Formations
