import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import { App, PersonsList, NotFound, NewPerson } from 'components'

const Routes = (
  <Route>
    <Route path="/" component={App} >
      <IndexRedirect to="persons-list" />
      <Route path="persons-list" component={PersonsList}>
        <Route path="add-person" component={NewPerson} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} status={404} />
  </Route>
)

export default Routes
