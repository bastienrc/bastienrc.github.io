import styled from 'styled-components'

const ListFormations = styled.div``
const Formation = styled.div``
const DateFormation = styled.div``
const NomFormation = styled.div``
const InfoFormation = styled.div``

function Formations () {
  return (
    <ListFormations>
      <Formation>
        <DateFormation>2020</DateFormation>
        <NomFormation>Titre professionnel "Développeur Web et Web mobile"</NomFormation>
        <InfoFormation>Simplon Boulogne-sur-mer</InfoFormation>
      </Formation>
      <Formation>
        <DateFormation>2020</DateFormation>
        <NomFormation>Titre professionnel "Développeur Web et Web mobile"</NomFormation>
        <InfoFormation>Simplon Boulogne-sur-mer</InfoFormation>
      </Formation>
      <Formation>
        <DateFormation>2020</DateFormation>
        <NomFormation>Titre professionnel "Développeur Web et Web mobile"</NomFormation>
        <InfoFormation>Simplon Boulogne-sur-mer</InfoFormation>
      </Formation>
    </ListFormations>
  )
}

export default Formations
