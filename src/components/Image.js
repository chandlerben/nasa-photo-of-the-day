import React from 'react';

const Image = props => {
    return (
        <div>
            <img src={props.url} alt={props.alt} />
        </div>
    );
};

export default Image;