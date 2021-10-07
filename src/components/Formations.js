import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'

const Formation = styled.div`
  display: flex;
  margin: 1rem 0;
`

const Periode = styled.span`
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

const Option = styled.p`
  font-style: italic;
`

function Formations ({ data }) {
  return (
    <Section>
      <Title>Formation</Title>
      {data.map((formation) => (
        <Formation key={formation.periode}>
          <Periode>{formation.periode}</Periode>
          <Info>
            <p>{formation.diplome}</p>
            {formation.option !== '' ? <Option>{formation.option}</Option> : null}
            <p>{formation.ets}</p>
          </Info>
        </Formation>
      ))}
    </Section>
  )
}

export default Formations
