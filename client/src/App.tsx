import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/Dashboard";
import ProfileScreen from "./screens/ProfileScreen";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import AddTransaction from "./components/AddTransaction";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/:id/profile" component={ProfileScreen} />
          <PrivateRoute path="/add" component={AddTransaction} />
          <Route path="/forget-password" component={ForgetPasswordScreen} />
          <Route path="/reset-password/:id/:token" component={ResetPasswordScreen} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
