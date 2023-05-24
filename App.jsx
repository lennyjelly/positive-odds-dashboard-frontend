import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './pages/not-found';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Subscriptions from './pages/subscriptions';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/login'}>
          <Login />
        </Route>
        <Route exact path={'/sign-up'}>
          <SignUp />
        </Route>
        <Route exact path={'/sign-up/subscriptions'}>
          <Subscriptions />
        </Route>
        <Route exact path={'/dashboard'}>
          <Dashboard />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
