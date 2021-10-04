import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetPassword } from "../actions/userActions";
import AlertMessage from "../components/AlertMessage";
import { RootState } from "../store";

const ResetPasswordScreen = (props: any) => {
  const { id, token } = props.match.params;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const passwordReset = useSelector((state: RootState) => state.resetPassword);
  const { error }: any = passwordReset;

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords Do Not Match");
    } else {
      dispatch(resetPassword(password,id, token));
      // redirect user to login page
      // props.history.push('/login')
    }
  };

  return (
    <div className="container center-align" style={{ marginRight: "6rem" }}>
      <div className="row">
        <div className="col m8" style={{ marginLeft: "5rem" }}>
          <div className="card">
            <div className="divider"></div>
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Reset Password
              </span>
              <div className="row">
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
              </div>
              <div className="row">
                <form className="col s12" onSubmit={submitHandler}>
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">New Password</label>
                    </div>
                  </div>
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="confirm_password"
                        type="password"
                        className="validate"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="confirm_password">
                        Confirm New Password
                      </label>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <button
                      type="submit"
                      className="waves-effect waves-light btn btn-block"
                      style={{ width: "95%" }}
                    >
                      Update Password
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

export default ResetPasswordScreen;
