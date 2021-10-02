import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import { RootState } from "../store";

const Balance = () => {
  const transactionsList = useSelector(
    (state: RootState) => state.transactionsList
  );
  const { transactions }: any = transactionsList;

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo }: any = userSignin;

  const amounts: any =
    transactions && transactions.length > 0
      ? transactions.map((transaction: any) => transaction.amount)
      : null;
  const total =
    transactions && transactions.length > 0
      ? amounts.reduce((acc: any, item: any) => (acc += item), 0)
      : 0;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="row card-panel" style={{ display: "flex" }}>
      <strong style={{ fontSize: "1.1rem" }}>
        Balance :{" "}
        <span style={{ fontSize: "1.1rem" }}>${total.toFixed(2)}</span>
      </strong>
      <div
        className="black-text"
        style={{ display: "flex", marginLeft: "auto" }}
      >
        <Link to={`/${userInfo.id}/profile`} style={{ marginRight: "1rem", fontSize: "1.1rem" }}>
          <strong>{userInfo.name}</strong>
        </Link>
        <Link
          onClick={signoutHandler}
          to="/login"
          style={{ fontSize: "1.1rem" }}
        >
          <strong>Logout</strong>
        </Link>
      </div>
      <div className="black-text"></div>
    </div>
  );
};

export default Balance;
