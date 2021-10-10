import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'

const Interupteur = styled.button`
  transition: 0.35s;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2em;
  padding: 0.5em;
  cursor: pointer;
  border: none;
  border-radius: 0 0 0 100%;
  background-color: var(--title-color);
  color: var(--main-color);
`

function Darkmode ({ action, theme }) {
  return (
    <Interupteur onClick={action}>{theme ? <FaSun /> : <FaMoon />}</Interupteur>
  )
}

export default Darkmode
