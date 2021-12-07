import React from 'react';

const closeHandler = () => {
    window.location.reload();
};

const Popup = ({firstname, lastname, phone, role, message, post}) => {
    return (
        <>
        <div className="overlay"></div>
        <div className="popup">
        <h1>Your note:</h1>
            <p><span className="popupBold">First name: </span>{firstname}</p>
            <p><span className="popupBold">Last name: </span>{lastname}</p>
            <p><span className="popupBold">Phone number: </span>{phone}</p>
            <p><span className="popupBold">Role: </span>{role}</p>
            <p><span className="popupBold">Message: </span>{message}</p>
       
        <button onClick={post}>Yes, I am sure</button>
        <button className="popupbuttontwo" onClick={closeHandler}>Nope, don't want to post it</button>
        </div>
        </>
    );
};

export default Popup;