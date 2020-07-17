import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import { Header } from './Components/Header'
import { DebtListing } from './Components/DebtListing'
import { Debt } from './types'
import debtService from './Services/debts'

const App: React.FC = () => {
  const [debts, setDebts] = useState<Array<Debt>>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await debtService.getAll()
      setDebts(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <DebtListing items={debts} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%
    margin: 0px;
    padding: 0px;
    line-height: 1.5;
    position: relative;
  }

  div {
    box-sizing: border-box;
  }

  #root {
    min-height: 100%;
    position: relative;
  }
`

export default App
