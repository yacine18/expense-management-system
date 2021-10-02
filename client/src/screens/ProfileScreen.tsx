import React from "react";
import { useSelector } from "react-redux";
import AlertMessage from "../components/AlertMessage";
import Navbar from "../components/Navbar";
import { RootState } from "../store";

const ProfileScreen = () => {

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { error, userInfo }: any = userSignin;

  return (
    <div>
      <Navbar />
      <div className="row container" style={{ marginRight: "1rem" }}>
        <div
          className="row container"
          style={{
            marginLeft: "0.5rem",
            width: "27rem",
            maxWidth: "100%",
            minWidth: "15rem",
          }}
        >
          {error && <AlertMessage variant="danger">{error}</AlertMessage>}
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title center">
                Profile Details{" "}
                <i
                  className="material-icons"
                  style={{ marginLeft: "0.2rem", cursor: "pointer" }}
                >
                  create
                </i>
              </span>
              <div className="row" style={{ marginLeft: "1.2rem" }}>
                <strong style={{ marginLeft: "1.7rem" }}>
                  {userInfo.name}
                </strong>
              </div>
              <div className="row" style={{ marginLeft: "1.2rem" }}>
                <div className="row" style={{ marginLeft: "1.2rem" }}>
                  <strong>Email</strong>
                  <span style={{ marginLeft: "1.7rem" }}>{userInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
