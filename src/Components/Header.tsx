import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TopLine>
        <Logo>Vouti</Logo>
      </TopLine>
      <NavBarWrapper>
        <NavButtonsWrapper>
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
        </NavButtonsWrapper>
      </NavBarWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 0;
  border-bottom: red;
  z-index: 10;
  margin: auto;
  margin-bottom: 2rem;
`

const TopLine = styled.div`
  background-color: maroon;
  min-width: 100%;
  height: 3rem;
  text-align: center;
`

const NavButtonsWrapper = styled.div`
  margin: auto;
  max-width: 32rem;
`

const NavBarWrapper = styled.div`
  background-color: #00000d;
  color: wheat;
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
    color: wheat;
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
  font-size: 2em;
  color: wheat;
  letter-spacing: 0.15em;
`
