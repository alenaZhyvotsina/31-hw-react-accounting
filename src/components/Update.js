import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {accountPage, loginPage} from "../utils/Constants";

const Update = props => {

    const [firstName, setFirstName] = useState(props.user.firstName);
    const [lastName, setLastName] = useState(props.user.lastName);

    if(!props.credentials){
        return <Redirect to={`${loginPage}`}/>
    }

    return (
        <div>
            <h1>Update my account</h1>
            <div className='row'>
                <label>First name
                    <input
                        type='text'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder='first name'/>
                </label>
            </div>
            <div className='row'>
                <label>Last name
                    <input
                        type='text'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder='last name'/>
                </label>
            </div>
            <div className='row'>
                <button onClick={() => props.updateUser(props.credentials, firstName, lastName)}>Update</button>
            </div>
            <div className='row'>
                <Link to={`${accountPage}`}>Cancel</Link>
            </div>
        </div>
    );
};

export default Update;