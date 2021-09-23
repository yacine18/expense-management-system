import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/Dashboard";
import ProfileScreen from "./screens/ProfileScreen";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/reset-password" component={ForgetPasswordScreen} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
