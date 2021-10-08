import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'
import Competence from './Competence'

const Group = styled.div`
  margin: 1em 0 2em 0;
`

function Competences ({ data }) {
  return (
    <Section>
      <Title>Competences</Title>
      {
        data.map((groupCompetence, i) => (
          <Group key={i}>
            <h3>{groupCompetence.groupName}</h3>
            {groupCompetence.list.map((competence, j) => (
              <Competence key={j} label={competence.label} level={competence.level} />
            ))}
          </Group>
        ))
      }
    </Section>
  )
}

export default Competences
