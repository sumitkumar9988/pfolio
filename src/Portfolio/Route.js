import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Index';
import FourOFour from './utils/FourOFour';

const Index = ({username}) => {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/error"  render={(props) => <FourOFour {...props} />}  />
          <Route path="/" render={(props) => <Home {...props} username={username} />} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
};

export default Index;