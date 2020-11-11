import {baseUrl} from "../utils/Constants";

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SUCCESS_REGISTRATION = 'SUCCESS_REGISTRATION';
export const LOGOUT = 'LOGOUT';
export const SUCCESS_UPDATE = 'SUCCESS_UPDATE';
export const SUCCESS_CHANGEPSW = 'SUCCESS_CHANGEPSW';

export const successLoginAction = accountData => (
    {
        type: SUCCESS_LOGIN,
        payload: {
            firstName: accountData.firstName,
            lastName: accountData.lastName,
            login: accountData.login,
            roles: accountData.roles
        }
    }
)

export const errorLoginAction = msg => (
    {
        type: ERROR_LOGIN,
        payload: msg
    }
)

export const successRegistrationAction = accountData => (
    {
        type: SUCCESS_REGISTRATION,
        payload: accountData
    }
)

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}

export const successUpdateAction = accountData => (
    {
        type: SUCCESS_UPDATE,
        payload: {
            firstName: accountData.firstName,
            lastName: accountData.lastName,
            login: accountData.login,
            roles: accountData.roles
        }
    }
)

export const successChangePswAction = () => (
    {
        type: SUCCESS_CHANGEPSW,
        payload: {}
    }
)

export const registerAction = (firstName, lastName, login, password) => {
    return dispatch => {
        const registrationDto = {
            firstName,
            lastName,
            login,
            password
        }

        fetch(`${baseUrl}/user`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(registrationDto)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + 'error on fetching');
                }
            })
            .then(data => {
                const ifSuccess = data != null ? true : false;  //unuseful expression
                dispatch(successRegistrationAction(ifSuccess));
            })
            .catch(e => console.log(e.message));
    }
}

export const loginAction = (login, password) => {
    return dispatch => {

        const credentialsBase64 = 'Basic ' + btoa(`${login}:${password}`);

        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Authorization': credentialsBase64
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('error in login');
                }
            })
            .then(data => {
                localStorage.setItem('credentials', credentialsBase64);
                dispatch(successLoginAction(data));
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorLoginAction('incorrect user or password!'));
            });;
    }
}

export const getUserAction = credentials => {
    return dispatch => {
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Authorization': credentials
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('error in login');
                }
            })
            .then(data => {
                dispatch(successLoginAction(data));
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorLoginAction('incorrect user or password!'));
            });
    }
}

export const updateAction = (credentials, firstName, lastName) => {
    return dispatch => {
        const editDto = {
            firstName,
            lastName
        }
        console.log(credentials);
        fetch(`${baseUrl}/user`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': credentials
            },
            body: JSON.stringify(editDto)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('error in login');
                }
            })
            .then(data => {
                dispatch(successUpdateAction(data));
            })
            .catch(e => console.log(e.message));
    }
}

export const changePasswordAction = password => {
    const credentials = localStorage.getItem('credentials');
    return (dispatch) => {
        fetch(`${baseUrl}/user/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credentials,
                'X-Password': password
            }
        })
            .then(response => {
                if (response.ok) {
                    const login = JSON.parse(localStorage.getItem('user')).login;
                    const newCredentials = 'Basic ' + btoa(login + ':' + password);
                    localStorage.setItem('credentials', newCredentials);
                    dispatch(successChangePswAction());
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => console.log(e));
    }
}