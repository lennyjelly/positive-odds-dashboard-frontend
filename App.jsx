import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './pages/not-found';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Subscriptions from './pages/subscriptions';
import Dashboard from './pages/dashboard';
import Games from './pages/games';
import AdminSMS from './pages/sms';
import Backtesting from './pages/backtesting';

function App() {
  // TODO: Handle rerouting of pages according to roles (subscribed user and admin)
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
        <Route path={'/games/:type'}>
          <Games />
        </Route>
        <Route exact path={'/send-sms'}>
          <AdminSMS />
        </Route>
        <Route exact path={'/backtesting'}>
          <Backtesting />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
