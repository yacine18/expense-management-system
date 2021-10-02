import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import { RootState } from "../store";
import AlertMessage from "../components/AlertMessage";

const RegisterScreen = (props: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const userRegister = useSelector((state: RootState) => state.userRegister);
  const { userInfo, error }: any = userRegister;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/dashboard");
    }
  }, [userInfo, props]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div className="container center-align" style={{ marginRight: "7rem" }}>
      <div className="row">
        <div className="col m8" style={{ marginLeft: "4.5rem" }}>
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Sign Up
              </span>
              <div
                className="row"
                style={{ marginLeft: "0.5rem", width: "97%" }}
              >
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
              </div>
              <div className="row">
                <form className="col s12" onSubmit={submitHandler}>
                  <div>
                    <div className="input-field col s6">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
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
                  <div>
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
