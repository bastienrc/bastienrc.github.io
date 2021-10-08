import { useState } from 'react'
import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'

const Interupteur = styled.button`
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
  color: var(--bg-main-color)
`

function Darkmode ({ isDarkTheme }) {
  const [darkmode, setDarkmode] = useState(isDarkTheme)

  const onHandleClick = e => {
    setDarkmode(false)
  }

  return (
    <>
      <Interupteur onClick={onHandleClick}>{darkmode ? <FaSun /> : <FaMoon />}</Interupteur>
    </>
  )
}

export default Darkmode
