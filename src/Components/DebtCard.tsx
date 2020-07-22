import React from 'react'
import styled from 'styled-components'

import { Debt } from '../types'

interface Props {
  item?: Debt
}

export const DebtCard: React.FC<Props> = ({ item }) => {
  return (
    <Card>
      <p>{item?.debt_item}</p>
    </Card>
  )
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: saddleBrown;
`
