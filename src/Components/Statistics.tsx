import React from 'react'
import styled from 'styled-components'
import { AnalyticsInstance } from 'analytics'

interface Props {
  analytics: AnalyticsInstance
}

export const Statistics: React.FC<Props> = ({ analytics }) => {
  analytics.page()
  return (
    <Statspage>
      <h1>Pistepörssi</h1>
      <p>Coming soon</p>
    </Statspage>
  )
}

const Statspage = styled.div`
  margin: auto;
  max-width: 32rem;
`
