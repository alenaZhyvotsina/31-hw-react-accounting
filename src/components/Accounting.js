import React from 'react';
import Register from "../containers/RegisterContainer";
import Login from "../containers/LoginContainer";
import Account from "../containers/AccountContainer";
import Update from "../containers/UpdateContainer";
import ChangePassword from "../containers/ChangePswContainer";
import {Route, Switch} from 'react-router-dom';
import {accountPage, baseUrl, changePswPage, loginPage, registerPage, updatePage} from "../utils/Constants";
import ErrorPage from "./ErrorPage";

const Accounting = () => {
    return (
        <Switch>
            <Route path={`/${registerPage}`}
                   exact
                   component={Register}
                   />

            <Route path={[`/`, `/${loginPage}`]}
                   exact
                   component={Login}
            />

            <Route path={`/${accountPage}`}
                   exact
                   component={Account}
            />

            <Route path={`/${updatePage}`}
                   exact
                   component={Update}
            />

            <Route path={`/${changePswPage}`}
                   exact
                   component={ChangePassword}
            />

            <Route component={ErrorPage}/>

        </Switch>
    );
};

export default Accounting;