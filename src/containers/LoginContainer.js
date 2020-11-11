import {loginAction} from "../actions/accountingAction";
import Login from "../components/Login";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        credentials: state.credentials || localStorage.getItem('credentials'),
        errorMessage: state.errorMessage
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (login, password) => dispatch(loginAction(login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);