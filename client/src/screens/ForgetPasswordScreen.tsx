import React from "react";

const ForgetPasswordScreen = () => {
  return (
    <div className="container center-align">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <span className="card-title">Expense Management</span>
            <div className="divider"></div>
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Reset Password
              </span>
              <div className="row">
                <form className="col s12">
                  <div className="">
                    <div className="input-field col s6" style={{ width: "100%" }}>
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn btn-block"
                      style={{ width: "95%" }}
                    >
                      Reset Password
                    </button>
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

export default ForgetPasswordScreen;
