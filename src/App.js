import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import Choosen from './components/Choosen';
import Historic from './components/Historic';
import NavBar from './components/NavBar';

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <NavBar />
        <div>
              <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/Choosen" component={Choosen} />
                      <Route path="/Historic" component={Historic} />
              </Switch>
         </div>

      </Fragment>
    );
  }
}

export default App;
