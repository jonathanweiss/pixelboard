import React from 'react';

const Character = (props) => {
  const styles = {
    marginRight: `${props.margin}px`,
    marginBottom: `${props.margin}px`,
  };
  return <div className="character" style={styles}>{props.children}</div>;
};

Character.propTypes = {
  children: React.PropTypes.array,
  margin: React.PropTypes.number,
};

export default Character;
