import React from 'react';
import {Router, Route} from 'react-router';

export default ({history}) => (
  <Router history={history}>
    <Route path="/" component={require('./Layout').default}>
      <Route path="*" component={require('./404').default}/>
    </Route>
  </Router>
)