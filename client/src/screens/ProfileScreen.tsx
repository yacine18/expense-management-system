import React from "react";
import Navbar from "../components/Navbar";

const ProfileScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="row container" style={{ marginRight: "1rem" }}>
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
                <img src="../../public/assets/profile.png" alt="profile" />
                <strong style={{ marginLeft: "1.7rem" }}>Yassine Hilali</strong>
              </div>
              <div className="row" style={{ marginLeft: "1.2rem" }}>
                <div className="row" style={{ marginLeft: "1.2rem" }}>
                  <strong>Email</strong>
                  <span style={{ marginLeft: "1.7rem" }}>test@email.com</span>
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
