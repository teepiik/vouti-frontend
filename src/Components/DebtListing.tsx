import React from 'react'
import styled from 'styled-components'

import { Debt } from '../types'
import { DebtCard } from './DebtCard'

interface Props {
  items?: Array<Debt>
}

export const DebtListing: React.FC<Props> = ({ items }) => {
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
