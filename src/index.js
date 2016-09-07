import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './app.jsx';

import Clock from './apps/clock.jsx';
import FreeText from './apps/freetext.jsx';
import RandomPixels from './apps/random.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/clock" component={Clock} />
    <Route path="/random" component={RandomPixels} />
    <Route path="/freetext" component={FreeText} />
  </Router>
, document.querySelector('#root'));

export default App;
