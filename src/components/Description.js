import React from 'react';
const moment = require('moment');

const Description = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{moment(props.date).format('MMMM Do YYYY')}</h4>
            <p>{props.explanation}</p>
        </div>
    );
};

export default Description