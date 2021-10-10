import styled from 'styled-components'

const CompetenceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0 0.5em 1.5em
`

const Level = styled.div`
  display: flex;
`
const Star = styled.span`
  transition: 0.35s;
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--main-color);
  margin: 0 5px;
  border-radius: 50%;
`

function Competence ({ label, level }) {
  const levels = []
  for (let i = 0; i < level; i++) {
    levels.push(<Star />)
  }

  return (
    <CompetenceContainer>
      <span>{label}</span>
      <Level>{levels}</Level>
    </CompetenceContainer>
  )
}

export default Competence
