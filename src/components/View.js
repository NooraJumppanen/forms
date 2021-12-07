import React from 'react';

const View = ({firstname, lastname, phone, role, message}) => {
    return (
        <> 
            <div className="view">
            <div className="dottedline"></div>
            <div className="lines"></div>
            <h2>This is your input:</h2>
            <p>First name <span className="viewtext"> {firstname}</span></p>
            <p>Last name <span className="viewtext"> {lastname}</span></p>
            <p>Phone number <span className="viewtext"> {phone}</span></p>
            <p>Role <span className="viewtext"> {role}</span></p>
            <p>Message <span className="viewtext"> {message}</span></p>
            </div>
        </>
    );
};

export default View;