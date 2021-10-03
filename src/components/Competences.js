import styled from 'styled-components'

const ListCompetences = styled.div``
const Competence = styled.div``
const Group = styled.div``
const Name = styled.div``
const Level = styled.div``

function Competences () {
  return (
    <ListCompetences>
      <Competence>
        <Group>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Group>
        <Group>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Group>
        <Group>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Group>
      </Competence>
    </ListCompetences>
  )
}

export default Competences
