import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'

const Formation = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  margin: 1em 0;
`

const Periode = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-right: 0.5em;
  width: 80px;
  height: 80px;
  text-align: center;
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.9em;
    line-height: 1.2em;
  }
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
