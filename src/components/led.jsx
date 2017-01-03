import Radium from 'radium';
import React from 'react';

const Led = (props) => {
  const { width, height, isActive, color, backgroundColor, margin } = props;

  const styles = {
    base: {
      margin: `0 ${margin}px ${margin}px 0`,
      width,
      height,
      backgroundColor,
    },
    active: {
      backgroundColor: `${color}`,
    },
  };

  return <div style={[styles.base, isActive && styles.active]} />;
};

Led.propTypes = {
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
  height: React.PropTypes.number,
  isActive: React.PropTypes.bool,
  margin: React.PropTypes.number,
  width: React.PropTypes.number,
};

Led.defaultProps = {
  backgroundColor: 'transparent',
  margin: 1,
  color: '#000000',
  height: 20,
  isActive: false,
  width: 20,
};

export default Radium(Led); //eslint-disable-line
