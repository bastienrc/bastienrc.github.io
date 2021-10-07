import styled from 'styled-components'

const XpTitle = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding: 0 0 15px 0;
  border-bottom: 2px solid black;
  color: #060;
  margin: 2rem 0 1rem 0;
`

const Xp = styled.div`
  margin: 1rem 0 2rem 0;
`

const Poste = styled.div`
  font-weight: 600;
`

const InfoXp = styled.div``
const Resume = styled.div`
  margin: 10px 0 20px 0;
  font-style: italic;
`

function Experiences ({ data }) {
  return (
    <>
      <XpTitle>Expérience Professionnelle</XpTitle>
      {data.map((xp) => (
        <Xp key={xp.id}>
          <Poste>{xp.Poste}</Poste>
          <InfoXp>{xp.Entreprise}, {xp.Periode}, {xp.Ville}</InfoXp>
          <Resume>{xp.Resume}</Resume>
        </Xp>
      ))}
    </>
  )
};

export default Experiences
