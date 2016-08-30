import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const Character = (props) => {
  styles.margins = {
    marginRight: `${props.margin}px`,
    marginBottom: `${props.margin}px`,
  };
  return <div style={[styles.base, styles.margins]}>{props.children}</div>;
};

Character.propTypes = {
  children: React.PropTypes.array,
  margin: React.PropTypes.number,
};

export default Radium(Character); //eslint-disable-line
