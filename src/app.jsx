import React from 'react';

import Clock from './apps/clock.jsx';
import FreeText from './apps/freetext.jsx';
import RandomPixels from './apps/random.jsx';

const App = () => {
  return (
    <div>
      <Clock />
      <FreeText />
      <RandomPixels />
    </div>
  );
};

export default App;
