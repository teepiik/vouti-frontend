import React from 'react'
import styled from 'styled-components'

export const Home: React.FC = () => {
  return (
    <Homepage>
      <h1>Vouti</h1>
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
