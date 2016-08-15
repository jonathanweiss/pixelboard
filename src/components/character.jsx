import React from 'react';

const Character = (props) => {
    return <div className="character">{props.children}</div>;
};

Character.propTypes = {
    children: React.PropTypes.array,
};

export default Character;
