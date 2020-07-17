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

const voutiText =
  'Voudit kuuluivat keskiajan ylhäisaateliin. Heidän tehtäviään oli periä kuninkaalle menevät verot sekä toimia käskynhaltijana tietyllä alueella tai linnassa linnanisännän apulaisena. Esimerkiksi Turun linnanvoutina toimi vuonna 1515 laamanni Klaus Henrikinpojan poika Krister.'

const ListingWrapper = styled.div``
