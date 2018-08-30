import React, { Component, Fragment } from 'react';
import Home from './containers/Home.js';
import Choosen from './containers/Choosen.js';
import Historic from './containers/Historic.js';
import NavBar from './components/NavBar.js';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div>
              <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route path="/Choosen" component={ Choosen } />
                      <Route path="/Historic" component={ Historic } />
              </Switch>
         </div>

      </Fragment>
    );
  }
}

export default App;
