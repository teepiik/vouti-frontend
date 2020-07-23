import React from 'react'
import styled from 'styled-components'
import { AnalyticsInstance } from 'analytics'

import { Debt } from '../types'
import { DebtCard } from './DebtCard'

interface Props {
  items?: Array<Debt>
  analytics: AnalyticsInstance
}

export const DebtListing: React.FC<Props> = ({ items, analytics }) => {
  analytics.identify('user-id-222', {
    Role: 'Test-Role',
  })
  analytics.page()
  console.log(items)
  return (
    <DebtListingDiv>
      <ListingWrapper>
        {items?.map((item, i) => (
          <li key={i}>
            <DebtCard item={item} />
          </li>
        ))}
      </ListingWrapper>
    </DebtListingDiv>
  )
}

const ListingWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const DebtListingDiv = styled.div`
  margin: auto;
  max-width: 32rem;
`
