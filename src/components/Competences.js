import styled from 'styled-components'

const Competence = styled.div`
  display: flex;
  justify-content: space-between;
`
const Group = styled.div``
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

function Competences () {
  return (
    <>
      <Group>
        <Competence>
          <Name>GNU/Linux Debian</Name>
          <Level>
            <Star />
            <Star />
            <Star />
          </Level>
        </Competence>
        <Competence>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Competence>
      </Group>
      <Group>
        <Competence>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Competence>
        <Competence>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Competence>
      </Group>
      <Group>
        <Competence>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Competence>
        <Competence>
          <Name>GNU/Linux Debian</Name><Level>3</Level>
        </Competence>
      </Group>
    </>
  )
}

export default Competences
