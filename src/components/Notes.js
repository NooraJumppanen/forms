import React from 'react';

const Notes = ({firstname, lastname, phone, role, message, id}) => {
    return (
        <div className="notes_area">
            <h3> Note #{id}:</h3>
            <p><strong>{firstname} {lastname} </strong>-- {role} -- tel: {phone} -- message: "<strong>{message}</strong>" </p>
        </div>
    );
};

export default Notes;