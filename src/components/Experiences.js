import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'

const Xp = styled.div`
  margin: 1em 0 2em 0;
`

const Poste = styled.div`
  font-weight: 600;
`

const InfoXp = styled.div``
const Resume = styled.div`
  margin: 10px 0 20px 0;
  font-style: italic;
`

function Experiences ({ data }) {
  return (
    <Section>
      <Title>Expérience Professionnelle</Title>
      {data.map((xp) => (
        <Xp key={xp.id}>
          <Poste>{xp.Poste}</Poste>
          <InfoXp>{xp.Entreprise}, {xp.Periode}, {xp.Ville}</InfoXp>
          <Resume>{xp.Resume}</Resume>
        </Xp>
      ))}
    </Section>
  )
}

export default Experiences
