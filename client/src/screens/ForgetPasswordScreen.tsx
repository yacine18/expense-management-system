import React from "react";

const ForgetPasswordScreen = () => {
  return (
    <div className="container center-align" style={{marginRight:'6rem'}}>
    <div className="row" >
      <div className="col m8" style={{marginLeft:'5rem'}}>
        <div className="card"  >
          <div className="divider"></div>
          <div className="card-content white-text">
            <span className="card-title row" style={{ color: "#757575" }}>
              Reset Password
            </span>
            <div className="row">
              <form className="col s12">
                <div>
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div>
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
