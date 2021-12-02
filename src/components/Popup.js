import React from 'react';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <>
        <div className="overlay"></div>
        <div className="popup">
        <h1>Your note:</h1>
            <p><span className="popupBold">First name: </span>{props.firstname}</p>
            <p><span className="popupBold">Last name: </span>{props.lastname}</p>
            <p><span className="popupBold">Phone number: </span>{props.phone}</p>
            <p><span className="popupBold">Role: </span>{props.role}</p>
            <p><span className="popupBold">Message: </span>{props.message}</p>
       
        <button onClick={closeHandler}>Yes, I am sure</button>
        <button className="popupbuttontwo" onClick={closeHandler}>Nope, don't want to post it</button>
        </div>
    
        </>
    );
};

export default Popup;