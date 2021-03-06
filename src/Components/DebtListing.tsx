import React, { useState } from 'react'
import styled from 'styled-components'
import { AnalyticsInstance } from 'analytics'

import { Debt } from '../types'
import { DebtCard } from './DebtCard'
import { NewDebtForm } from './NewDebtForm'

interface Props {
  items?: Array<Debt>
  analytics: AnalyticsInstance
}

export const DebtListing: React.FC<Props> = ({ items, analytics }) => {
  const [showForm, setShowForm] = useState(false)

  const changeFormVisibility = () => {
    if (showForm === false) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  analytics.identify('user-id-222', {
    Role: 'Test-Role',
  })
  analytics.page()
  return (
    <DebtListingDiv>
      <ListingWrapper>
        {items?.map((item, i) => (
          <li key={i}>
            <DebtCard item={item} />
          </li>
        ))}
      </ListingWrapper>
      <FormButton onClick={changeFormVisibility}>
        {showForm ? 'hide' : 'add new'}
      </FormButton>
      <NewDebtForm visibility={showForm} />
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

const FormButton = styled.button`
  margin-bottom: 1rem;
`
