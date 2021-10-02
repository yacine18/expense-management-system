import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { RootState } from '../store'

const PrivateRoute = ({ component: Component, ...rest }:any) => {
    const userSignin = useSelector((state:RootState) => state.userSignin)
    const {userInfo}:any = userSignin
    return (
        <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
    )
}

export default PrivateRoute
