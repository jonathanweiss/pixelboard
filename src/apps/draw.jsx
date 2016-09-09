import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import { drawCharacter, getBits } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

class Draw extends React.Component {

  render() {
    const grid = [];

    return (
      <div>
        <h2>Draw as you like!</h2>
        <Grid>{grid.map((character, index) => drawCharacter(character, index))}</Grid>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Draw;
