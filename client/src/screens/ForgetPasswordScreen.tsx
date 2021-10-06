import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgetPassword } from "../actions/userActions";
import AlertMessage from "../components/AlertMessage";
import { RootState } from "../store";

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState<string>("");

  const passwordForget = useSelector(
    (state: RootState) => state.passwordForget
  );
  const { error, success }: any = passwordForget;

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <div className="container center-align" style={{ marginRight: "6rem" }}>
      <div className="row">
        <div className="col m8" style={{ marginLeft: "5rem" }}>
          <div className="card">
            <div className="divider"></div>
            <div className="card-content">
              <span className="card-title row" style={{ color: "#757575" }}>
                Reset Password
              </span>
              <div
                className="row"
                style={{ marginLeft: "0.5rem", width: "97%" }}
              >
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
                {success && <AlertMessage variant="success">Email Sent. Please check your inbox</AlertMessage>}
              </div>
              <div className="row">
                <form className="col s12" onSubmit={submitHandler}>
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn btn-block"
                      style={{ width: "95%" }}
                    >
                      Reset Password
                    </button>
                  </div>
                  <div>
                    <Link
                      to="/login"
                      className="btn-flat"
                      style={{ width: "95%" }}
                    >
                     Cancel
                    </Link>
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
