import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="container center-align" style={{marginRight:'7rem'}}>
      <div className="row">
        <div className="col m8"  style={{marginLeft:'4.5rem'}}>
          <div className="card">
            <span className="card-title">Expense Management</span>
            <div className="divider"></div>
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Sign Up
              </span>
              <div className="row">
                <form className="col s12">
                  <div>
                    <div className="input-field col s6">
                      <input id="name" type="text" className="validate" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="">
                    <div className="input-field col s12">
                      <input
                        id="confirm_password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="confirm_password">Confirm Password</label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn btn-block"
                      style={{ width: "95%" }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="row" style={{ color: "#757575" }}>
                    Already have an Account? <Link to="/login">Sign In</Link>
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

export default RegisterScreen;
