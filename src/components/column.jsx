import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const Column = (props) => {
  styles.margins = {
    marginRight: `${props.margin}px`,
    marginBottom: `${props.margin}px`,
  };
  console.log(props)
  return <div style={[styles.base, styles.margins]}>{props.children}</div>;
};

Column.propTypes = {
  children: React.PropTypes.array,
  margin: React.PropTypes.number,
};

Column.defaultProps = {
  margin: 0,
};

export default Radium(Column); //eslint-disable-line
