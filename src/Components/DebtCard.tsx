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

const Card = styled.span``
