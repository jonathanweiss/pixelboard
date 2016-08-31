import React from 'react';

import Grid from '../components/grid.jsx';
import { drawCharacter, getBits } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

const DELAY = 1000;

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      clock: this.getTime(),
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        clock: this.getTime(),
      });
    }, DELAY);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  getTime() {
    const twoDigits = (val) => { return val < 10 ? `0${val}` : val; };

    const now = new Date();
    return `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
  }

  render() {
    const clock = this.state.clock
      .split('')
      .map(character => getBits(character, defaultGrid));

    return (
      <div>
        <h2>Clock</h2>
        <Grid>{clock.map((character, index) => drawCharacter(character, index))}</Grid>
      </div>
    );
  }
}

export default Clock;
