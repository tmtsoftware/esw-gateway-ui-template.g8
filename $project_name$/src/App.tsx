import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Landing } from './components'
import './App.css'
import { AppConfig } from './config/AppConfig'

const basename = import.meta.env.NODE_ENV === 'production' ? `/${AppConfig.applicationName}` : ''

const App = (): JSX.Element => (
  <Router basename={basename}>
    <div className='App'>
    <Landing />
  </div>
  </Router>
)

export default App
