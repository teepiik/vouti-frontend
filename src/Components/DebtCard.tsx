import React from 'react'
import styled from 'styled-components'

import { Debt } from '../types'

interface Props {
  item?: Debt
}

export const DebtCard: React.FC<Props> = ({ item }) => {
  return (
    <CardWrapper>
      <DebtItem>{item?.debt_item}</DebtItem>
      <People>
        Deptor: {item?.debtor}, Receiver: {item?.receiver}
      </People>
      <Dates>
        Date of origin: {item?.date_origin}, Paid: {item?.date_paid}
      </Dates>
      <Comment>Comments: {item?.comment}</Comment>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: saddleBrown;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`

const DebtItem = styled.h2`
  margin: 0;
  letter-spacing: 0.1em;
`
const People = styled.p``
const Dates = styled.p``
const Comment = styled.p``
