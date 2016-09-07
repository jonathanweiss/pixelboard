import React from 'react';
import { Link } from 'react-router';

const App = () => {
  return (
    <div>
      <h1>Pixelboard Demos</h1>
      <ul>
        <li><Link to="/clock">Digital Clock</Link></li>
        <li><Link to="/random">Random Pixels</Link></li>
        <li><Link to="/freetext">Enter your own digits</Link></li>
      </ul>
    </div>
  );
};

export default App;
