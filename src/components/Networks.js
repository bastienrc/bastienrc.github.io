import styled from 'styled-components'
import { FaGithub, FaFreeCodeCamp, FaCodepen, FaTwitter, FaLinkedin, FaViadeo } from 'react-icons/fa'

const NetworksContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Network = styled.a`
  transition: 0.35s;
  font-size: 2.5em;
  margin: 10px 0 0 0;
  color: var(--elt-color);
  margin-top: 0.5em;
  &:hover {
    color: var(--title-color);
  }
`

function Networks ({ data }) {
  return (
    <NetworksContainer>
      <Network href={data.freecodecamp} title='freeCodeCamp.org'><FaFreeCodeCamp /></Network>
      <Network href={data.github} title='Github.com'><FaGithub /></Network>
      <Network href={data.codepen} title='Codepen.io'><FaCodepen /></Network>
      <Network href={data.twitter} title='Twitter.com'><FaTwitter /></Network>
      <Network href={data.linkedin} title='Linkedin.com'><FaLinkedin /></Network>
      <Network href={data.viadeo} title='Viadeo.com'><FaViadeo /></Network>
    </NetworksContainer>
  )
}

export default Networks
