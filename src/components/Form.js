import React from 'react';

const Form = ({submit, change}) => {
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                <label htmlFor="firstname">First name</label>
                <input name="firstname" id="firstname" type="text" required onChange={change}/>
                </div>
                <div>
                <label htmlFor="lastname">Last name</label>
                <input name="lastname" id="lastname" type="text" required onChange={change}/>
                </div>
                <div>
                <label>Phone number</label>
                <input name="phone" id="phone" type="tel" required onChange={change}/>
                </div>
                <div>
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={change} required>
                    <option value="" hidden>Please choose...</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                    </select>
                </div>
                <div className="textarea">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" required onChange={change}/>
                </div>
                <input type="submit" value="send"/>
            </form>
        </div>
    );
};

export default Form;