import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { CheckLogin, AuthContextProvider } from 'esw-ts'
import SampleGUI from './components/SampleGUI'
import NavBar from './components/NavBar'
import { AppConfig } from './config/AppConfig'

const App = () => (
  <AuthContextProvider config={AppConfig}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Route
          exact
          path='/SampleGUI'
          render={() => (
            <CheckLogin
              error={
                <div>Need to login with correct credentials to view page</div>
              }>
              <SampleGUI />
            </CheckLogin>
          )}
        />
      </div>
    </BrowserRouter>
  </AuthContextProvider>
)

export default App
