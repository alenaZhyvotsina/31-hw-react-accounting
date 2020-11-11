import React, {useEffect} from 'react';
import {changePswPage, loginPage, registerPage, updatePage} from "../utils/Constants";
import {Link, Redirect, Route} from "react-router-dom";

const Account = props => {

    useEffect(() => {
        if (!props.user && props.credentials) {
            props.getUser(props.credentials);
            //console.log(props.user);
        }
    }, []);

    if(!props.credentials){
        return <Redirect to={`${loginPage}`}/>
    }

    return (
        <div>
            <h1>My account</h1>
            <div className='row'>
                <p>First name: </p>
                <p className='p-bold'>{props.user.firstName}</p>
            </div>
            <div className='row'>
                <p>Last name: </p>
                <p className='p-bold'>{props.user.lastName}</p>
            </div>
            <div className='row'>
                <p>Login: </p>
                <p className='p-bold'>{props.user.login}</p>
            </div>
            <div className='row'>
                <p>Roles: </p>
                <p className='p-bold'>{props.user.roles}</p>
            </div>
            <div className='row'>
                <Link to={`${updatePage}`}><button>Update</button></Link>
                <Link to={`${changePswPage}`}><button>Change password</button></Link>

                <button onClick={props.logout}>Log out</button>
            </div>
        </div>
    );
};

export default Account;