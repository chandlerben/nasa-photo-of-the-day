import React from 'react';
import "../App.css";

const Image = props => {
    return (
        <div className="main-div">
            <img className="image" src={props.url} alt={props.alt} />
        </div>
    );
};

export default Image;