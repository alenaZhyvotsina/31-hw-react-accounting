import {applyMiddleware, createStore} from "redux";
import accountingReducer from "../reducers/accountingReducer";
import thunk from "redux-thunk";



export const initialState = {
    credentials: localStorage.getItem('credentials') ?? ''
}

export const store = createStore(accountingReducer, initialState, applyMiddleware(thunk));