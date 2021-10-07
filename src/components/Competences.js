import styled from 'styled-components'
import CompetenceComponent from './Competence'

const Competences = styled.div``

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 2px solid black;
  color: #060;
  margin: 3rem 0 1rem 0;
`

const Group = styled.div`
  margin: 1em 0 2em 0;
`

function CompetencesComponent ({ data }) {
  console.log(data)
  return (
    <Competences>
      <Title>Competences</Title>
      {
        data.map((groupCompetence, i) => (
          <Group key={i}>
            <h3>{groupCompetence.groupName}</h3>
            {groupCompetence.list.map((competence, j) => (
              <CompetenceComponent key={i} label={competence.label} level={competence.level} />
            ))}
          </Group>
        ))
      }
    </Competences>
  )
}

export default CompetencesComponent
