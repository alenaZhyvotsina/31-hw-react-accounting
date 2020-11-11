import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {accountPage, loginPage} from "../utils/Constants";

const ChangePassword = props => {
    console.log('psw ', props, props.credentials);

    const [passw, setPassw] = useState('');
    const [passwConf, setPasswConf] = useState('');
    const [err, setErr] = useState('');

    if(!props.credentials){
        return <Redirect to={`${loginPage}`}/>
    }

    const handleChangeClick = () => {
        if(passw == ''){
            setErr('Enter valid password!');
        }
        else if(passw !== passwConf){
            setErr('Confirmed password is not corresponds to password!');
        } else {
            setErr('');
            props.changePsw(passw);
        }
    }

    return (
        <div>
            <h1>Change password</h1>
            <div className='row'><p className='err'>{err}</p></div>
            <div className='row'>
                <label>Password
                    <input
                        type='password'
                        value={passw}
                        onChange={e => setPassw(e.target.value)}
                        placeholder=''/>
                </label>
            </div>
            <div className='row'>
                <label>Confirm password
                    <input
                        type='password'
                        value={passwConf}
                        onChange={e => setPasswConf(e.target.value)}
                        placeholder=''/>
                </label>
            </div>
            <div className='row'>
                <button onClick={handleChangeClick}>Change password</button>
            </div>
            <div className='row'>
                <Link to={`${accountPage}`}>Cancel</Link>
            </div>
        </div>
    );
};

export default ChangePassword;