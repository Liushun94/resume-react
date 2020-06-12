import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home}
          exact
          path="/home"
      ></Route>
    </Switch>
  </BrowserRouter>
)

export default BasicRoute