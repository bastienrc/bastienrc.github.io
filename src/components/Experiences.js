import styled from 'styled-components'

const XpTitle = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 3px solid black;
  color: #060;
`

const Xp = styled.div`
  margin: 10px 0;
`

const Poste = styled.div`
`

const InfoXp = styled.div``
const Resume = styled.div`
  margin: 10px 0 20px 0
`

function Experiences ({ data }) {
  return (
    <>
      <XpTitle>Expérience Professionelle</XpTitle>
      {data.map((xp) => (
        <Xp key={xp.id}>
          <Poste>{xp.Poste}</Poste>
          <infoXp>{xp.Entreprise}, {xp.Periode}, {xp.Ville}</infoXp>
          <Resume>{xp.Resume}</Resume>
        </Xp>
      ))}
    </>
  )
};

export default Experiences
