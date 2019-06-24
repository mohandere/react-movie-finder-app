import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

import Header from './components/Header';

import Home from './screens/home';
import Details from './screens/details';
import ActorDetails from './screens/actor';
import Explore from './screens/explore';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/movie/:ID" component={Details} />
          <Route path="/actor/:ID" component={ActorDetails} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
