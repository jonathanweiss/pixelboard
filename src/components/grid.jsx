import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const Grid = (props) => {
  return <div style={[styles.base]}>{props.children}</div>;
};

Grid.propTypes = {
  children: React.PropTypes.array,
};

export default Radium(Grid); //eslint-disable-line
