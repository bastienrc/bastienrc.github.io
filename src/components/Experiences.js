import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const Container = styled.div`
  width: 60%;
  padding-right: 5px;
`

const Xp = styled.div``

const Poste = styled.div`
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
`
const InfoXp = styled.div``
const Resume = styled.div``

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`

function Experiences ({ data }) {
  return (
    <Container>
      <Poste>Expériences</Poste>
      <CustomizedSlider defaultValue={30} />
      {data.map((xp) => (
        <div key={xp.id}>
          <h3>{xp.Poste}</h3>
          <p>{xp.Entreprise}, {xp.Periode}, {xp.Ville}</p>
          <p>{xp.Resume}</p>
        </div>
      ))}
    </Container>
  )
};

export default Experiences
