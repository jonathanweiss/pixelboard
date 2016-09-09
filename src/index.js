import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './app.jsx';

import Clock from './apps/clock.jsx';
import FreeText from './apps/freetext.jsx';
import RandomPixels from './apps/random.jsx';
import Draw from './apps/draw.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/clock" component={Clock} />
    <Route path="/random" component={RandomPixels} />
    <Route path="/freetext" component={FreeText} />
    <Route path="/draw" component={Draw} />
  </Router>
, document.querySelector('#root'));

export default App;
