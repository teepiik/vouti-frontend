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
  analytics.page()
  analytics.identify('user-id-222', {
    firstName: 'test',
    lastName: 'dummy',
    email: 'foo@foo.com',
  })
  console.log(items)
  return (
    <ListingWrapper>
      {items?.map((item, i) => (
        <li key={i}>
          <DebtCard item={item} />
        </li>
      ))}
    </ListingWrapper>
  )
}

const ListingWrapper = styled.ul`
  list-style-type: none;
`
