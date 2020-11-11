import {
    ERROR_LOGIN,
    LOGOUT,
    SUCCESS_CHANGEPSW,
    SUCCESS_LOGIN,
    SUCCESS_REGISTRATION,
    SUCCESS_UPDATE
} from "../actions/accountingAction";
import {browse} from 'react-router';
import {accountPage} from "../utils/Constants";

function accountingReducer(state, action){
    switch (action.type){
        case SUCCESS_REGISTRATION:
            return {...state, ifSuccess: action.payload};
        case SUCCESS_LOGIN:
            console.log('SL', action.payload);
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {...state, user: action.payload, credentials: localStorage.getItem('credentials'), errorMessage: ''}
        case ERROR_LOGIN:
            return {...state, user: null, credentials: '', errorMessage: action.payload}
        case SUCCESS_UPDATE:
            localStorage.setItem('user', JSON.stringify(action.payload));
            window.location.href = `/${accountPage}`;
            return {...state, user: action.payload}
        case SUCCESS_CHANGEPSW:
            window.location.href = `/${accountPage}`;
            return {...state, credentials: localStorage.getItem('credentials')}
        case LOGOUT:
            localStorage.removeItem('credentials');
            localStorage.removeItem('user');
            return {...state, user: null, credentials: ''};
        default:
            return state;
    }

}

export default accountingReducer;