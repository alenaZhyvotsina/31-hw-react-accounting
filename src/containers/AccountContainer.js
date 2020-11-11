import Account from "../components/Account";
import {connect} from "react-redux";
import {getUserAction, logoutAction} from "../actions/accountingAction";

function mapStateToProps(state){

    const user = state.user ?? JSON.parse(localStorage.getItem('user'));

    return {
        credentials: state.credentials || localStorage.getItem('credentials'),
        user: user
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUser: credentials => dispatch(getUserAction(credentials)),
        logout: () => dispatch(logoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);