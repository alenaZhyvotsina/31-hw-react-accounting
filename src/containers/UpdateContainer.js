import Update from "../components/Update";
import {connect} from "react-redux";
import {updateAction} from "../actions/accountingAction";

function mapStateToProps(state){
    return {
        credentials: state.credentials || localStorage.getItem('credentials'),
        user: state.user ?? JSON.parse(localStorage.getItem('user'))
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateUser: (credentials, firstName, lastName) => dispatch(updateAction(credentials, firstName, lastName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);