import React from 'react';

import Grid from '../components/grid.jsx';
import Digit from '../components/digit.jsx';

const getDigits = (time) => {
  const digits = [];
  const lookup = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
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
};

const Clock = (props) => {
  const digits = getDigits(props.time);

  return (
    <Grid>
      <Digit value={digits[0]} />
      <Digit value={digits[1]} />
      <Digit value=":" />
      <Digit value={digits[2]} />
      <Digit value={digits[3]} />
      {props.showSeconds ? <Digit value=":" /> : null}
      {props.showSeconds ? <Digit value={digits[4]} /> : null}
      {props.showSeconds ? <Digit value={digits[5]} /> : null}
      {props.showMiliSeconds ? <Digit value=":" /> : null}
      {props.showMiliSeconds ? <Digit value={digits[6]} /> : null}
      {props.showMiliSeconds ? <Digit value={digits[7]} /> : null}
      {props.showMiliSeconds ? <Digit value={digits[8]} /> : null}
    </Grid>
  );
};

Clock.propTypes = {
  time: React.PropTypes.object.isRequired,
  showSeconds: React.PropTypes.bool,
  showMiliSeconds: React.PropTypes.bool,
};

export default Clock;
