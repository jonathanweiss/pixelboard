import React from 'react';

const Row = (props) => {
    return <div className="row">{props.children}</div>;
};

Row.propTypes = {
    children: React.PropTypes.array,
};

export default Row;
