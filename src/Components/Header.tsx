import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>Vouti</Logo>
      <Menubar>
        <NavButton>
          <Link to='/'>Koti</Link>
        </NavButton>
        <NavButton>
          <Link to='/velat'>Velat</Link>
        </NavButton>
        <NavButton>
          <Link to='/stats'>Statsit</Link>
        </NavButton>
      </Menubar>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 0.2rem 0;
  border-bottom: red;
  z-index: 10;
`

const Menubar = styled.nav`
  display: inline-block;
`

const NavButton = styled.span`
  padding: 0.5em;
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: bolder;
  }
  a:active {
    font-size: 1.1rem;
  }
`

const Logo = styled.span`
  font-weight: bolder;
  font-size: 1.5em;
`
