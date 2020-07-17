import React from 'react'
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1>Vouti</h1>
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
