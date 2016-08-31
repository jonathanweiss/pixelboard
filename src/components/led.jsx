import Radium from 'radium';
import React from 'react';

const styles = {
  base: {
    margin: '0 1px 1px 0',
    backgroundColor: 'transparent',
  },
};

const Led = (props) => {
  const { width, height, isActive, color } = props;

  styles.base.width = width;
  styles.base.height = height;
  styles.active = {
    backgroundColor: `rgba(${color}, 1)`,
  };

  return <div style={[styles.base, isActive && styles.active]} />;
};

Led.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  isActive: React.PropTypes.bool,
  color: React.PropTypes.string,
};

Led.defaultProps = {
  width: 20,
  height: 20,
  isActive: false,
  color: '0, 0, 0',
};

export default Radium(Led); //eslint-disable-line
