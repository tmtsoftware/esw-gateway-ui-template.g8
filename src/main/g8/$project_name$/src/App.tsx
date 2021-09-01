import React from 'react'
import { LocationService } from '@tmtsoftware/esw-ts'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppConfig } from './config/AppConfig'
import { LocationServiceProvider } from './contexts/LocationServiceContext'
import { useQuery } from './hooks/useQuery'
import { Main} from './components/Main'

const basename = import.meta.env.NODE_ENV === 'production' ? `/${AppConfig.applicationName}` : ''

const App = (): JSX.Element => {
  const { data: locationService, loading, error } = useQuery(LocationService)

  if (loading) return <div>Loading...</div>
  if (error || !locationService)
    return <div>Location Service not Available, reason {error?.message}</div>

  return (
    <LocationServiceProvider locationService={locationService}>
      <Router basename={basename}>
        <Main />
      </Router>
    </LocationServiceProvider>
  )
}

export default App
