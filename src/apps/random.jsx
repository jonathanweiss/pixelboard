import React from 'react';

import Grid from '../components/grid.jsx';
import { drawCharacter } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

class Random extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  createRandomLed() {
    const color = [
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256),
    ].join(', ');
    const { width, height } = defaultGrid;

    return {
      isActive: Math.round(Math.random()) === 0,
      color,
      width,
      height,
    };
  }

  createRandomLeds(amount) {
    const leds = [];

    for (let i = 0; i < amount; i++) {
      leds.push(this.createRandomLed());
    }

    return leds;
  }

  createRandomGrid(chars) {
    const grid = [];

    for (let i = 0; i < chars; i++) {
      grid[i] = [];
      for (let k = 0; k < defaultGrid.rows; k++) {
        grid[i][k] = this.createRandomLeds(defaultGrid.columns);
      }
    }

    return grid;
  }

  render() {
    const grid = this.createRandomGrid(10);

    return (
      <div>
        <h2>Random colored pixels</h2>
        <Grid>{grid.map((character, index) => drawCharacter(character, index))}</Grid>
      </div>
    );
  }
}

export default Random;
