import styled from 'styled-components'
import { FaGithub, FaFreeCodeCamp, FaCodepen, FaTwitter, FaLinkedin, FaViadeo } from 'react-icons/fa'

const Networks = styled.div`
  display: flex;
  justify-content: space-around;
`

const Network = styled.a`
  font-size: 2.5em;
  margin: 10px 0 0 0;
  color: black;
  margin-top: 0.5em;
`

function NetworksComponent ({ data }) {
  return (
    <Networks>
      <Network href={data.freecodecamp} title='freeCodeCamp.org'><FaFreeCodeCamp /></Network>
      <Network href={data.github} title='Github.com'><FaGithub /></Network>
      <Network href={data.codepen} title='Codepen.io'><FaCodepen /></Network>
      <Network href={data.twitter} title='Twitter.com'><FaTwitter /></Network>
      <Network href={data.linkedin} title='Linkedin.com'><FaLinkedin /></Network>
      <Network href={data.viadeo} title='Viadeo.com'><FaViadeo /></Network>
    </Networks>
  )
}

export default NetworksComponent
