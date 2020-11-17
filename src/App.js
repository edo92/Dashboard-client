import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

export default App