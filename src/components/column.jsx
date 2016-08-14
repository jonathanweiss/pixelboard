import React from 'react';

const Column = (props) => {
    return <div className="column">{props.children}</div>;
};

Column.propTypes = {
    children: React.PropTypes.array,
};

export default Column;
