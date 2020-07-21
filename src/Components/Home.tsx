import React from 'react'
import styled from 'styled-components'
import { AnalyticsInstance } from 'analytics'

interface Props {
  analytics: AnalyticsInstance
}

export const Home: React.FC<Props> = ({ analytics }) => {
  analytics.page()
  return (
    <Homepage>
      <VoutiText>
        Voudit kuuluivat keskiajan ylhäisaateliin. Heidän tehtäviään oli periä
        kuninkaalle menevät verot sekä toimia käskynhaltijana tietyllä alueella
        tai linnassa linnanisännän apulaisena. Esimerkiksi Turun linnanvoutina
        toimi vuonna 1515 laamanni Klaus Henrikinpojan poika Krister.
      </VoutiText>
    </Homepage>
  )
}

const Homepage = styled.div``
const VoutiText = styled.p`
  text-align: center;
  width: 50%;
`
