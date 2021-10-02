import { DefaultRootState } from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { createTransactionReducer, getTransactionReducer } from './reducers/transactionReducers';
import { passwordForgetReducer, resetPasswordReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const initialState:DefaultRootState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')!)
      : null,
  },
}


const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  createTransaction: createTransactionReducer,
  transactionsList:getTransactionReducer,
  passwordForget: passwordForgetReducer,
  resetPassword: resetPasswordReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof reducer>

export default store