import {registerAction} from "../actions/accountingAction";
import Register from "../components/Register";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        ifSuccess: state.ifSuccess,
        credentials: state.credentials || localStorage.getItem('credentials')
    }
}

function mapDispatchToProps(dispatch){
    return {
        register: (firstName, lastName, login, password) =>
            dispatch(registerAction(firstName, lastName, login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);