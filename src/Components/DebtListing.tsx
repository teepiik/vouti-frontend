import React from 'react'
import styled from 'styled-components'

import { Debt } from '../types'

interface Props {
  items?: Array<Debt>
}

export const DebtListing: React.FC<Props> = ({ items }) => {
  console.log(items)
  return (
    <ListingWrapper>
      <p>Vouti</p>
    </ListingWrapper>
  )
}

const ListingWrapper = styled.div``
