import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <div>
                <label htmlFor="firstname">First name</label>
                <input name="firstname" id="firstname" type="text" required onChange={props.change}/>
                </div>
                <div>
                <label htmlFor="lastname">Last name</label>
                <input name="lastname" id="lastname" type="text" required onChange={props.change}/>
                </div>
                <div>
                <label>Phone number</label>
                <input name="phone" id="phone" type="tel" required onChange={props.change}/>
                </div>
                <div>
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={props.change}>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                    </select>
                </div>
                <div className="textarea">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" required onChange={props.change}/>
                </div>
                <input type="submit" value="send"/>
            </form>
        </div>
    );
};

export default Form;