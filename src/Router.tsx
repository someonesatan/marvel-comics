import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import List from './containers/List'
import Card from './containers/Card'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/comics' component={List} />
      <Route exact path='/comics/:id' component={Card} />
      <Redirect to='/comics'/>
    </Switch>
  </BrowserRouter>
)

export default Router