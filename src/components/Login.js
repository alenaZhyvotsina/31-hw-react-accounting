import React, {useState} from 'react';
import {Redirect, Link} from "react-router-dom";
import {accountPage, registerPage} from "../utils/Constants";

const Login = props => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    if(!props.credentials) {
        return (
            <div>
                <p className='err'>{props.errorMessage}</p>
                <h1>Login</h1>
                <div className='row'>
                    <label>Login
                        <input
                            type='text'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            placeholder='login'/>
                    </label>
                </div>
                <div className='row'>
                    <label>Password
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='password'/>
                    </label>
                </div>
                <div className='row'>
                    <button onClick={() => props.login(login, password)}>Log in</button>
                </div>
                <div className='row'>
                    <div><p>or</p></div>
                    <Link to={`/${registerPage}`}>Register</Link>
                </div>
            </div>
        );
    } else {
        return <Redirect to={`${accountPage}`}/>
    }
};

export default Login;