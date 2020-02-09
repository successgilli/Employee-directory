import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/page" component={() => <div>page</div>} />
      <Route path="*" component={() => <div>page not found</div>} />
    </Switch>
  </Router>
);

export default Routes;
