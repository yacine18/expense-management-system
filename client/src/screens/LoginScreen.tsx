import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="container center-align" style={{marginRight:'7rem'}}>
      <div className="row" >
        <div className="col m8" style={{marginLeft:'4.5rem'}}>
          <div className="card"  >
            <span className="card-title">Expense Management</span>
            <div className="divider"></div>
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Sign In
              </span>
              <div className="row">
                <form className="col s12">
                  <div className="">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row left-align" style={{ color: "#757575", marginLeft: '0.5rem' }}>
                    <Link to="/reset-password">Forget Password</Link>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn btn-block"
                      style={{ width: "95%" }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="row" style={{ color: "#757575" }}>
                    New Customer? <Link to="/">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
