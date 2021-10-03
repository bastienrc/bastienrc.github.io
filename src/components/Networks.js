import styled from 'styled-components'

const ListNetworks = styled.div``
const Network = styled.div``
const Icon = styled.div``
const Name = styled.div``
const Url = styled.div``

function Networks () {
  return (
    <ListNetworks>
      <Network>
        <Icon>firecamps</Icon>
        <Name>Freecodecamp.org</Name>
        <Url>https://www.freecodecamp.org/bastienrc</Url>
      </Network>
      <Network>
        <Icon>firecamps</Icon>
        <Name>Freecodecamp.org</Name>
        <Url>https://www.freecodecamp.org/bastienrc</Url>
      </Network>
      <Network>
        <Icon>firecamps</Icon>
        <Name>Freecodecamp.org</Name>
        <Url>https://www.freecodecamp.org/bastienrc</Url>
      </Network>
    </ListNetworks>
  )
}

export default Networks
