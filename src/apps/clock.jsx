import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import Digit from '../components/digit.jsx';

const DELAY = 100;

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
    const now = new Date();
    const digits = [];
    const lookup = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    };

    Object.keys(lookup).forEach(key => {
      const value = lookup[key].toString();

      if (key === 'milliseconds') {
        if (lookup[key] < 10) {
          digits.push('0');
          digits.push('0');
          digits.push(value);
        } else if (lookup[key] < 100) {
          digits.push('0');
          digits.push(value[0]);
          digits.push(value[1]);
        } else {
          digits.push(value[0]);
          digits.push(value[1]);
          digits.push(value[2]);
        }
      } else {
        if (lookup[key] < 10) {
          digits.push('0');
          digits.push(value);
        } else {
          digits.push(value[0]);
          digits.push(value[1]);
        }
      }
    });
    return digits;
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
    const digits = this.state.clock;

    return (
      <div>
        <h2 style={{ marginTop: 200 }}>Clock</h2>

        <Grid>
          <Digit value={digits[0]} />
          <Digit value={digits[1]} />
          <Digit value=":" />
          <Digit value={digits[2]} />
          <Digit value={digits[3]} />
          <Digit value=":" />
          <Digit value={digits[4]} />
          <Digit value={digits[5]} />
          <Digit value=":" />
          <Digit value={digits[6]} />
          <Digit value={digits[7]} />
          <Digit value={digits[8]} />
        </Grid>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Clock;
