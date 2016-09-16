import React from 'react';

import Column from './column.jsx';
import Row from './row.jsx';
import Led from './led.jsx';
import { getBits } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

class Digit extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { value, margin } = this.props;
    const bits = getBits(value, defaultGrid);

    return (
      <Column margin={margin}>
        {bits.map((row, rowIndex) => {
          return (<Row key={`row_${rowIndex}`}>{row.map((led, ledIndex) => {
            return <Led key={`led_${ledIndex}`} {...led} />;
          })}</Row>);
        })}
      </Column>
    );
  }
}

Digit.propTypes = {
  margin: React.PropTypes.number,
  value: React.PropTypes.string,
};

Digit.defaultProps = {
  margin: 4,
};

export default Digit;
// export default Radium(Led); //eslint-disable-line
