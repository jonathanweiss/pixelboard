import Radium from 'radium';
import React from 'react';

const styles = {
  base: {
    margin: '0 1px 1px 0',
    backgroundColor: 'transparent',
  },
};

const Led = (props) => {
  const { width, height, isActive, color, backgroundColor } = props;

  styles.base.width = width;
  styles.base.height = height;
  styles.base.backgroundColor = backgroundColor;
  styles.active = {
    backgroundColor: `rgba(${color}, 1)`,
  };

  return <div style={[styles.base, isActive && styles.active]} />;
};

Led.propTypes = {
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
  height: React.PropTypes.number,
  isActive: React.PropTypes.bool,
  width: React.PropTypes.number,
};

Led.defaultProps = {
  backgroundColor: 'transparent',
  color: '0, 0, 0',
  height: 20,
  isActive: false,
  width: 20,
};

export default Radium(Led); //eslint-disable-line
