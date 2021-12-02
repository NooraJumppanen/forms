import React from 'react';

const View = (props) => {
    return (
        <>
            <h1>This is your input:</h1>
            <div className="lines"></div>

            <div className="view">
            <p>First name <span className="viewtext"> {props.firstname}</span></p>
            <p>Last name <span className="viewtext"> {props.lastname}</span></p>
            <p>Phone number <span className="viewtext"> {props.phone}</span></p>
            <p>Role <span className="viewtext"> {props.role}</span></p>
            <p>Message <span className="viewtext"> {props.message}</span></p>
        </div>
        </>
    );
};

export default View;