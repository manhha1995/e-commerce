import React from 'react';

const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const classes = 'card' + props.className
    // eslint-disable-next-line react/prop-types
    return <div className={classes}>{props.children}</div>
}

export default Card;