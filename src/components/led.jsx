import React from 'react';
import cn from 'classnames';

const Led = (props) => {
    const classnames = cn({
        led: true,
        'is-active': props.isActive,
    });

    const style = {
        backgroundColor: props.isActive ? `rgba(${props.color}, 1)` : false,
        width: props.width,
        height: props.height
    };

    return <div className={classnames} style={style} />;
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
};

export default Led;
