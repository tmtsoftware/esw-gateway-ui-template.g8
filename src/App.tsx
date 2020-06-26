import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CheckLogin, AuthContextProvider } from 'esw-ts'
import $component_name$ from './components/$component_name$'
import NavComponent from './components/NavComponent'
import { AppConfig } from './config/AppConfig'

const App = () => (
  <AuthContextProvider config={AppConfig}>
    <BrowserRouter>
      <div>
        <NavComponent />
        <Route
          exact
          path='/$component_name$'
          render={() => (
            <CheckLogin
              error={
                <div>Need to login with correct credentials to view page</div>
              }>
              <$component_name$ />
            </CheckLogin>
          )}
        />
      </div>
    </BrowserRouter>
  </AuthContextProvider>
)

export default App
