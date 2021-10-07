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

const Group = styled.div``

function CompetencesComponent ({ data }) {
  return (
    <Competences>
      <Title>Competences</Title>
      {
        data.map((competence, i) => (
          <Group key={i}>
            <h3>competence.group</h3>
            <CompetenceComponent label='Test' level='4' />
          </Group>
        ))
      }
    </Competences>
  )
}

export default CompetencesComponent
