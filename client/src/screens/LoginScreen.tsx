import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import { RootState } from "../store";
import AlertMessage from "../components/AlertMessage";

const LoginScreen = (props:any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const userSignin = useSelector((state:RootState) => state.userSignin)
  const {userInfo, error}:any = userSignin

  useEffect(() => {
    if(userInfo){
      props.history.push('/dashboard')
    }
  }, [userInfo, props])

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="container center-align" style={{ marginRight: "7rem" }}>
      <div className="row">
        <div className="col m8" style={{ marginLeft: "5rem" }}>
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title row" style={{ color: "#757575" }}>
                Sign In
              </span>
              <div className="row" style={{marginLeft: '0.5rem', width:'97%'}}>
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
              </div>
              <div className="row">
                <form className="col s12" onSubmit={submitHandler}>
                  <div className="">
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
                  <div className="">
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
                  <div
                    className="row left-align"
                    style={{ color: "#757575", marginLeft: "0.5rem" }}
                  >
                    <Link to="/forget-password">Forget Password?</Link>
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
                    New User? <Link to='/'>Sign Up</Link>
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
