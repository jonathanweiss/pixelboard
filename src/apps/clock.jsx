import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import { drawColumn, getBits } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

const DELAY = 500;

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      clock: this.getTime(),
    };
  }

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    window.clearInterval(this.timeout);
  }

  getTime() {
    const twoDigits = (val) => { return val < 10 ? `0${val}` : val; };

    const now = new Date();
    return `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
  }

  updateTime() {
    this.setState({
      clock: this.getTime(),
    });

    this.timeout = window.setTimeout(() => {
      this.updateTime();
    }, DELAY);
  }

  render() {
    const clock = this.state.clock
      .split('')
      .map(character => getBits(character, defaultGrid));

    return (
      <div>
        <h2>Clock</h2>
        <Grid>{clock.map((character, index) => drawColumn(character, index))}</Grid>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Clock;
