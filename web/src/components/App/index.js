import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Navigation from '../Navigation'
import Home from '../../pages/Home'
import './styles.scss'

function App () {
  return (
    <div className='app'>
      <Header />
      <div className='app-page'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Navigation />
      </div>
    </div>
  )
}

export default App