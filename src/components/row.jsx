import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const Row = (props) => {
  return <div style={[styles.base]}>{props.children}</div>;
};

Row.propTypes = {
  children: React.PropTypes.array,
};

export default Radium(Row); //eslint-disable-line
