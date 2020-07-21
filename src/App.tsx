import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import { Header } from './Components/Header'
import { DebtListing } from './Components/DebtListing'
import { Home } from './Components/Home'
import { Statistics } from './Components/Statistics'
import { Debt } from './types'
import debtService from './Services/debts'
import Background from './bgpic.png'

const App: React.FC = () => {
  const [debts, setDebts] = useState<Array<Debt>>([])

  // returns AnalyticsInstance
  const analytics = Analytics({
    app: 'Vouti',
    version: '0.1',
    plugins: [
      googleAnalytics({
        // This key is public anyway - You need to filter your domain on GA
        trackingId: 'UA-173026199-1',
      }),
    ],
  })
  const no = process.env.REACT_APP_GA_TRACKING_ID
  console.log(no)

  useEffect(() => {
    const fetchData = async () => {
      const result = await debtService.getAll()
      setDebts(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/velat'>
          <DebtListing items={debts} analytics={analytics} />
        </Route>
        <Route path='/stats'>
          <Statistics analytics={analytics} />
        </Route>
        <Route path='/'>
          <Home analytics={analytics} />
        </Route>
      </Switch>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0px;
    padding: 0px;
    line-height: 1.5;
    position: relative;
    background-image: url(${Background});
    background-color: #cccccc;
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
