import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../actions/userActions";
import AlertMessage from "../components/AlertMessage";
import Navbar from "../components/Navbar";
import { RootState } from "../store";

const ProfileScreen = (props:any) => {
  const {id} = props.match.params
  const detailsUser = useSelector((state: RootState) => state.detailsUser);
  const { error, user }: any = detailsUser;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userDetails(id))
  }, [dispatch, id])

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
              <span className="card-title center">Profile Details </span>
              <div className="row" style={{ marginLeft: "1.2rem" }}>
                <div className="row" style={{ marginLeft: "1.2rem" }}>
                  <strong>Name</strong>
                  <span style={{ marginLeft: "1.7rem" }}>{user?.name}</span>
                </div>
              </div>
              <div className="row" style={{ marginLeft: "1.2rem" }}>
                <div className="row" style={{ marginLeft: "1.2rem" }}>
                  <strong>Email</strong>
                  <span style={{ marginLeft: "1.7rem" }}>{user?.email}</span>
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
