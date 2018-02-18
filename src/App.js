import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/home';
import Create from './components/create';
import Edit from './components/edit';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/edit' component={Edit} />
      </Router>
    );
  }
}

export default App;
