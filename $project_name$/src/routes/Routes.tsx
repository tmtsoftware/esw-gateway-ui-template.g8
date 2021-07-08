import { AuthContextProvider, CheckLogin } from '@tmtsoftware/esw-ts'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginError from '../components/error/LoginError'
import { GreetUser } from '../components/GreetUser'
import { SecuredGreetUser } from '../components/SecuredGreetUser'

export const Routes = (): JSX.Element => {
  return (
    <AuthContextProvider
      config={{ realm: 'TMT', clientId: 'tmt-frontend-app' }}>
      <Switch>
        <Route exact path='/' component={GreetUser} />
        <Route
          exact
          path='/secured'
          render={() => (
            // #checkLogin-component-usage
            <CheckLogin error={<LoginError />}>
              <SecuredGreetUser />
            </CheckLogin>
            // #checkLogin-component-usage
          )}
        />
      </Switch>
    </AuthContextProvider>
  )
}
