import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CheckLogin, AuthContextProvider } from 'esw-ts'
import $component_name$ from './components/$component_name$'
import NavBar from './components/NavBar'
import { AppConfig } from './config/AppConfig'

const App = () => (
  <AuthContextProvider config={AppConfig}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Route
          exact
          path='/$component_name$'
          render={() => (
            $if(auth_needed.truthy)$
            <CheckLogin
              error={
                <div>Need to login with correct credentials to view page</div>
              }>
              <$component_name$ />
            </CheckLogin>
           $else$
           <$component_name$ />
           $endif$
          )}
        />
      </div>
    </BrowserRouter>
  </AuthContextProvider>
)

export default App
