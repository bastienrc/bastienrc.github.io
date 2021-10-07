import styled from 'styled-components'

const Competence = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0 0.5em 1.5em
`

const Name = styled.div``
const Level = styled.div`
  display: flex;
`
const Star = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #000;
  margin: 0 5px;
  border-radius: 50%;
`

function CompetenceComponent ({ label, level }) {
  const levels = []
  for (let i = 0; i < level; i++) {
    levels.push(<Star />)
  }

  return (
    <Competence>
      <Name>{label}</Name>
      <Level>{levels}</Level>
    </Competence>
  )
}

export default CompetenceComponent
