import styled from 'styled-components'
import freeCodeCamp from '../icons/freecodecamp.svg'

const Networks = styled.div`
  display: flex;
  gap: 10px;
`

const Network = styled.div`
  margin: 10px 0;
  a {

  }

  img {
    width: 50px;
  }
`

function ListNetworks () {
  return (
    <Networks>
      <Network>
        <a href='https://www.freecodecamp.org/bastienrc' title='Freecodecamp.org'>
          <img src={freeCodeCamp} alt='Freecodecamp.org' />
        </a>
      </Network>
      <Network>
        <a href='https://www.freecodecamp.org/bastienrc' title='Freecodecamp.org'>
          <img src={freeCodeCamp} alt='Freecodecamp.org' />
        </a>
      </Network>
      <Network>
        <a href='https://www.freecodecamp.org/bastienrc' title='Freecodecamp.org'>
          <img src={freeCodeCamp} alt='Freecodecamp.org' />
        </a>
      </Network>
    </Networks>
  )
}

export default ListNetworks
