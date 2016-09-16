import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import Clock from '../components/clock.jsx';

const DELAY = 100;

class ClockApp extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    window.clearInterval(this.timeout);
  }

  updateTime() {
    this.setState({ time: new Date() });

    this.timeout = window.setTimeout(() => {
      this.updateTime();
    }, DELAY);
  }

  render() {
    const timeDE = this.state.time;
    const timeAU = moment(this.state.time).add(8, 'hours').toDate();
    const timeNZ = moment(this.state.time).add(10, 'hours').toDate();

    return (
      <div>
        <h2>Düsseldorf</h2>
        <Clock time={timeDE} showSeconds showMiliSeconds />

        <h2>Sydney</h2>
        <Clock time={timeAU} showSeconds />

        <h2>Auckland</h2>
        <Clock time={timeNZ} />

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default ClockApp;
