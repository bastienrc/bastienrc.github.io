import React from 'react'
import styled from 'styled-components'

const ListXps = styled.div``
const Xp = styled.div``
const Poste = styled.div``
const InfoXp = styled.div``
const Resume = styled.div``

function Experiences () {
  return (
    <ListXps>
      <Xp>
        <Poste>Développeur Web</Poste>
        <InfoXp>Speedphone's, 2019, Boulogne-sur-mer</InfoXp>
        <Resume>Développement du site de la société avec le framework Symfony.</Resume>
      </Xp>
      <Xp>
        <Poste>Développeur Web</Poste>
        <InfoXp>Speedphone's, 2019, Boulogne-sur-mer</InfoXp>
        <Resume>Développement du site de la société avec le framework Symfony.</Resume>
      </Xp>
      <Xp>
        <Poste>Développeur Web</Poste>
        <InfoXp>Speedphone's, 2019, Boulogne-sur-mer</InfoXp>
        <Resume>Développement du site de la société avec le framework Symfony.</Resume>
      </Xp>
    </ListXps>
  )
}

export default Experiences
