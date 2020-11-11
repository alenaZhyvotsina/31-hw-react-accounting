import {changePasswordAction, updateAction} from "../actions/accountingAction";
import {connect} from "react-redux";
import ChangePassword from "../components/ChangePassword";

function mapStateToProps(state){
    return {
        credentials: state.credentials || localStorage.getItem('credentials')
    }
}

function mapDispatchToProps(dispatch){
    return {
        changePsw: (newPassword) => dispatch(changePasswordAction(newPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);