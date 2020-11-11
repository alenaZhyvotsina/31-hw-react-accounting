import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {accountPage, loginPage} from "../utils/Constants";

const Register = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
        props.register(firstName, lastName, login, password);
    }

    if(props.ifSuccess) {
        return <Redirect to={`${loginPage}`}/>
    }

    if(!props.credentials) {
        return (
            <div>
                <h1>Registration form</h1>
                <div className='row'>
                    <label>First name
                        <input
                            type='text'
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder='first name'/>
                    </label>
                </div>
                <div className='row'>
                    <label>Last name
                        <input
                            type='text'
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            placeholder='last name'/>
                    </label>
                </div>
                <div className='row'>
                    <label>Login
                        <input
                            type='text'
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                            placeholder='login'/>
                    </label>
                </div>
                <div className='row'>
                    <label>Password
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='password'/>
                    </label>
                </div>
                <div className='row'>
                    <button onClick={handleRegisterClick}>Register</button>
                </div>
            </div>
        );
    } else {
        return <Redirect to={`${accountPage}`}/>
    }
};

export default Register;