import styled from 'styled-components'
import { Section, Title } from './GlobalStyle'
import CompetenceComponent from './Competence'

const Group = styled.div`
  margin: 1em 0 2em 0;
`

function CompetencesComponent ({ data }) {
  console.log(data)
  return (
    <Section>
      <Title>Competences</Title>
      {
        data.map((groupCompetence, i) => (
          <Group key={i}>
            <h3>{groupCompetence.groupName}</h3>
            {groupCompetence.list.map((competence, j) => (
              <CompetenceComponent key={j} label={competence.label} level={competence.level} />
            ))}
          </Group>
        ))
      }
    </Section>
  )
}

export default CompetencesComponent
