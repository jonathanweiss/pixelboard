import React from 'react';

const Grid = (props) => {
    return <div className="grid">{props.children}</div>;
};

Grid.propTypes = {
    children: React.PropTypes.object,
};

export default Grid;
