import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/index';
import Home from '../../pages/login';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={() => <div>page not found</div>} />
    </Switch>
  </Router>
);

export default Routes;
